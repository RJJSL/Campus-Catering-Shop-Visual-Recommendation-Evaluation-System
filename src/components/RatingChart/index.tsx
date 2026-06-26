// 评分分布图组件
import React from 'react';
import { View, Text } from '@tarojs/components';
import { RatingDistribution } from '@/types/review';
import styles from './index.module.scss';

interface RatingChartProps {
  distribution: RatingDistribution[];
}

const RatingChart: React.FC<RatingChartProps> = ({ distribution }) => {
  const maxCount = Math.max(...distribution.map(d => d.count), 1);

  return (
    <View className={styles.chartContainer}>
      <Text className={styles.chartTitle}>评分分布</Text>
      <View className={styles.chartContent}>
        {distribution.map(item => (
          <View key={item.rating} className={styles.ratingRow}>
            <Text className={styles.ratingLabel}>{item.rating}星</Text>
            <View className={styles.barContainer}>
              <View 
                className={styles.bar}
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              />
            </View>
            <Text className={styles.count}>{item.count}人</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RatingChart;