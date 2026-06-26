// 发表评价页
import React, { useState } from 'react';
import { View, Text, Input, Textarea } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import styles from './index.module.scss';

const ReviewAddPage: React.FC = () => {
  const router = useRouter();
  const shopId = router.params.shopId || '1';
  
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  const handleSubmit = () => {
    if (!content.trim()) {
      Taro.showToast({ title: '请输入评价内容', icon: 'none' });
      return;
    }

    Taro.showToast({ title: '评价发表成功', icon: 'success' });
    
    setTimeout(() => {
      Taro.navigateBack();
    }, 1500);
  };

  return (
    <View className={styles.reviewAddPage}>
      {/* 评分 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>评分</Text>
        <View className={styles.ratingRow}>
          {[1, 2, 3, 4, 5].map(star => (
            <Text 
              key={star}
              className={`${styles.star} ${star <= rating ? styles.starActive : ''}`}
              onClick={() => handleStarClick(star)}
            >
              ⭐
            </Text>
          ))}
        </View>
      </View>

      {/* 评价内容 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>评价内容</Text>
        <Textarea 
          className={styles.contentInput}
          placeholder="分享你的用餐体验..."
          value={content}
          onInput={(e) => setContent(e.detail.value)}
        />
      </View>

      {/* 匿名选项 */}
      <View className={styles.formGroup}>
        <View 
          className={styles.anonymousToggle}
          onClick={() => setIsAnonymous(!isAnonymous)}
        >
          <Text className={styles.toggleText}>
            {isAnonymous ? '✅ 匿名评价' : '⬜ 匿名评价'}
          </Text>
        </View>
      </View>

      {/* 提交按钮 */}
      <View className={styles.submitButton} onClick={handleSubmit}>
        <Text>提交评价</Text>
      </View>
    </View>
  );
};

export default ReviewAddPage;