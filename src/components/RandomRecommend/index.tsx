// 随机推荐组件
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Shop } from '@/types/shop';
import { shops } from '@/data/shops';
import styles from './index.module.scss';

interface RandomRecommendProps {
  onResult?: (shop: Shop) => void;
}

const RandomRecommend: React.FC<RandomRecommendProps> = ({ onResult }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentShop, setCurrentShop] = useState<Shop | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startRandom = () => {
    setIsAnimating(true);
    setCurrentShop(null);
    
    // 动画效果：快速切换店铺
    let index = 0;
    const totalSwitches = 15;
    const interval = setInterval(() => {
      index++;
      setCurrentIndex(Math.floor(Math.random() * shops.length));
      
      if (index >= totalSwitches) {
        clearInterval(interval);
        setIsAnimating(false);
        const finalShop = shops[Math.floor(Math.random() * shops.length)];
        setCurrentShop(finalShop);
        if (onResult) {
          onResult(finalShop);
        }
      }
    }, 100);
  };

  const goToDetail = () => {
    if (currentShop) {
      Taro.navigateTo({
        url: `/pages/shop-detail/index?id=${currentShop.id}`
      });
    }
  };

  return (
    <View className={styles.randomContainer}>
      <View 
        className={styles.randomButton}
        onClick={startRandom}
      >
        <Text className={styles.randomText}>
          {isAnimating ? '正在选择...' : '🎲 随便吃啥'}
        </Text>
        <Text className={styles.randomSubtext}>
          {isAnimating ? '帮您随机挑选' : '点击随机推荐一家店铺'}
        </Text>
      </View>
      
      {(isAnimating || currentShop) && (
        <View 
          className={styles.resultCard}
          onClick={goToDetail}
        >
          <Image 
            className={styles.resultImage} 
            src={isAnimating ? shops[currentIndex].image : (currentShop?.image || '')} 
            mode="aspectFill"
          />
          <View className={styles.resultInfo}>
            <Text className={styles.resultName}>
              {isAnimating ? shops[currentIndex].name : (currentShop?.name || '')}
            </Text>
            {!isAnimating && currentShop && (
              <>
                <View className={styles.resultMeta}>
                  <Text className={styles.rating}>⭐ {currentShop.rating}</Text>
                  <Text className={styles.area}>{currentShop.area}</Text>
                  <Text className={styles.type}>{currentShop.type}</Text>
                </View>
                <Text className={styles.clickHint}>点击查看详情 →</Text>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default RandomRecommend;