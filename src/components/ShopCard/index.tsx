// 店铺卡片组件
import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Shop } from '@/types/shop';
import styles from './index.module.scss';

interface ShopCardProps {
  shop: Shop;
  onClick?: () => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      Taro.navigateTo({
        url: `/pages/shop-detail/index?id=${shop.id}`
      });
    }
  };

  return (
    <View className={styles.shopCard} onClick={handleClick}>
      <Image 
        className={styles.shopImage} 
        src={shop.image} 
        mode="aspectFill"
      />
      <View className={styles.shopInfo}>
        <View className={styles.shopHeader}>
          <Text className={styles.shopName}>{shop.name}</Text>
          {shop.isNew && <Text className={styles.newTag}>新店</Text>}
          {shop.isHot && <Text className={styles.hotTag}>热门</Text>}
        </View>
        <View className={styles.shopMeta}>
          <Text className={styles.rating}>⭐ {shop.rating}</Text>
          <Text className={styles.reviewCount}>{shop.reviewCount}条评价</Text>
        </View>
        <View className={styles.shopTags}>
          <Text className={styles.tag}>{shop.area}</Text>
          <Text className={styles.tag}>{shop.type}</Text>
        </View>
        <Text className={styles.distance}>{shop.distance}</Text>
      </View>
    </View>
  );
};

export default ShopCard;