// 菜品卡片组件
import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Dish } from '@/types/dish';
import styles from './index.module.scss';

interface DishCardProps {
  dish: Dish;
  onClick?: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      Taro.navigateTo({
        url: `/pages/dish-detail/index?id=${dish.id}`
      });
    }
  };

  return (
    <View className={styles.dishCard} onClick={handleClick}>
      <Image 
        className={styles.dishImage} 
        src={dish.image} 
        mode="aspectFill"
      />
      <View className={styles.dishInfo}>
        <Text className={styles.dishName}>{dish.name}</Text>
        <Text className={styles.shopName}>{dish.shopName}</Text>
        <View className={styles.dishMeta}>
          <Text className={styles.price}>¥{dish.price}</Text>
          <Text className={styles.likeCount}>❤️ {dish.likeCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default DishCard;