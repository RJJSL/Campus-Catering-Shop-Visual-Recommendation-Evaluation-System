// 评价卡片组件
import React from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import { Review } from '@/types/review';
import styles from './index.module.scss';

interface ReviewCardProps {
  review: Review;
  onLike?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onLike }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} className={i <= rating ? styles.starActive : styles.star}>
          ⭐
        </Text>
      );
    }
    return stars;
  };

  return (
    <View className={styles.reviewCard}>
      <View className={styles.reviewHeader}>
        <Image 
          className={styles.userAvatar} 
          src={review.userAvatar} 
          mode="aspectFill"
        />
        <View className={styles.userInfo}>
          <Text className={styles.userName}>
            {review.isAnonymous ? '匿名用户' : review.userName}
          </Text>
          <View className={styles.ratingRow}>
            {renderStars(review.rating)}
          </View>
        </View>
        <Text className={styles.time}>{review.createTime}</Text>
      </View>
      
      <Text className={styles.content}>{review.content}</Text>
      
      {review.images && review.images.length > 0 && (
        <ScrollView 
          className={styles.imageRow} 
          scrollX
          scrollWithAnimation
        >
          {review.images.map((img, index) => (
            <Image 
              key={index}
              className={styles.reviewImage} 
              src={img} 
              mode="aspectFill"
            />
          ))}
        </ScrollView>
      )}
      
      <View className={styles.reviewFooter}>
        <View 
          className={styles.likeButton}
          onClick={onLike}
        >
          <Text className={review.isLiked ? styles.liked : styles.like}>
            {review.isLiked ? '❤️' : '🤍'}
          </Text>
          <Text className={styles.likeCount}>{review.likeCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewCard;