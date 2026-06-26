// 菜品详情页
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { dishes } from '@/data/dishes';
import styles from './index.module.scss';

const DishDetailPage: React.FC = () => {
  const router = useRouter();
  const [dish, setDish] = useState<any>(null);

  useEffect(() => {
    const id = parseInt(router.params.id || '1');
    const foundDish = dishes.find(d => d.id === id);
    if (foundDish) {
      setDish(foundDish);
    }
  }, [router.params.id]);

  const handleLike = () => {
    Taro.showToast({ title: '已点赞', icon: 'success' });
  };

  const handleFavorite = () => {
    Taro.showToast({ title: '已收藏', icon: 'success' });
  };

  const handleGoToShop = () => {
    if (dish) {
      Taro.navigateTo({
        url: `/pages/shop-detail/index?id=${dish.shopId}`
      });
    }
  };

  if (!dish) {
    return (
      <View className={styles.dishDetailPage}>
        <Text>加载中...</Text>
      </View>
    );
  }

  return (
    <View className={styles.dishDetailPage}>
      <Image 
        className={styles.dishImage} 
        src={dish.image} 
        mode="aspectFill"
      />
      
      <View className={styles.dishInfo}>
        <Text className={styles.dishName}>{dish.name}</Text>
        <Text 
          className={styles.shopName}
          onClick={handleGoToShop}
        >
          {dish.shopName} →
        </Text>
        <Text className={styles.price}>¥{dish.price}</Text>
        {dish.description && (
          <Text className={styles.description}>{dish.description}</Text>
        )}
      </View>

      <View className={styles.actionBar}>
        <View className={styles.actionButton} onClick={handleLike}>
          <Text>❤️ 点赞</Text>
        </View>
        <View className={styles.actionButton} onClick={handleFavorite}>
          <Text>⭐ 收藏</Text>
        </View>
      </View>
    </View>
  );
};

export default DishDetailPage;