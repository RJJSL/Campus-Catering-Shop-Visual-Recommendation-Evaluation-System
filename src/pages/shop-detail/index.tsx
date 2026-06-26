// 店铺详情页
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import RatingChart from '@/components/RatingChart';
import ReviewCard from '@/components/ReviewCard';
import DishCard from '@/components/DishCard';
import { shops } from '@/data/shops';
import { getDishesByShopId } from '@/data/dishes';
import { getReviewsByShopId, getRatingDistribution } from '@/data/reviews';
import styles from './index.module.scss';

const ShopDetailPage: React.FC = () => {
  const router = useRouter();
  const [shop, setShop] = useState<any>(null);
  const [dishes, setDishes] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [distribution, setDistribution] = useState<any[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const id = parseInt(router.params.id || '1');
    const foundShop = shops.find(s => s.id === id);
    if (foundShop) {
      setShop(foundShop);
      setDishes(getDishesByShopId(id));
      setReviews(getReviewsByShopId(id));
      setDistribution(getRatingDistribution(id));
    }
  }, [router.params.id]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    Taro.showToast({
      title: isFavorite ? '已取消收藏' : '已收藏',
      icon: 'success'
    });
  };

  const handleReview = () => {
    Taro.navigateTo({
      url: `/pages/review-add/index?shopId=${shop?.id}`
    });
  };

  const handleShare = () => {
    Taro.showToast({ title: '分享功能开发中...', icon: 'none' });
  };

  const handleLikeReview = (reviewId: number) => {
    setReviews(prevReviews => 
      prevReviews.map(review => {
        if (review.id === reviewId) {
          const newIsLiked = !review.isLiked;
          const newLikeCount = newIsLiked ? review.likeCount + 1 : review.likeCount - 1;
          Taro.showToast({
            title: newIsLiked ? '已点赞' : '已取消点赞',
            icon: 'success'
          });
          return {
            ...review,
            isLiked: newIsLiked,
            likeCount: newLikeCount
          };
        }
        return review;
      })
    );
  };

  if (!shop) {
    return (
      <View className={styles.shopDetailPage}>
        <View className={styles.loading}>
          <Text className={styles.loadingText}>加载中...</Text>
        </View>
      </View>
    );
  }

  return (
    <View className={styles.shopDetailPage}>
      {/* 图片轮播 */}
      <Swiper 
        className={styles.imageSwiper}
        autoplay
        circular
        indicatorDots
      >
        <SwiperItem>
          <Image 
            className={styles.shopImage} 
            src={shop.image} 
            mode="aspectFill"
          />
        </SwiperItem>
      </Swiper>

      {/* 店铺信息 */}
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
        
        <View className={styles.shopDetails}>
          <Text className={styles.detailText}>📍 {shop.address}</Text>
          {shop.phone && <Text className={styles.detailText}>📞 {shop.phone}</Text>}
          {shop.openingHours && <Text className={styles.detailText}>🕐 {shop.openingHours}</Text>}
        </View>
        
        {shop.description && (
          <Text className={styles.description}>{shop.description}</Text>
        )}
      </View>

      {/* 评分分布 */}
      <View className={styles.section}>
        <RatingChart distribution={distribution} />
      </View>

      {/* 菜品列表 */}
      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>推荐菜品</Text>
        </View>
        <ScrollView 
          className={styles.dishScroll}
          scrollX
          scrollWithAnimation
        >
          {dishes.map(dish => (
            <View key={dish.id} className={styles.dishItem}>
              <DishCard dish={dish} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 评价列表 */}
      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>用户评价</Text>
          <Text className={styles.addReview} onClick={handleReview}>写评价 →</Text>
        </View>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewCard 
              key={review.id} 
              review={review} 
              onLike={() => handleLikeReview(review.id)}
            />
          ))
        ) : (
          <View className={styles.emptyReviews}>
            <Text className={styles.emptyText}>暂无评价</Text>
            <Text className={styles.emptyHint}>快来发表第一条评价吧</Text>
          </View>
        )}
      </View>

      {/* 底部操作栏 */}
      <View className={styles.bottomBar}>
        <View 
          className={`${styles.actionButton} ${isFavorite ? styles.favoriteActive : ''}`}
          onClick={handleFavorite}
        >
          <Text>{isFavorite ? '❤️ 已收藏' : '🤍 收藏'}</Text>
        </View>
        <View className={styles.actionButton} onClick={handleReview}>
          <Text>📝 评价</Text>
        </View>
        <View className={styles.actionButton} onClick={handleShare}>
          <Text>🔗 分享</Text>
        </View>
      </View>
    </View>
  );
};

export default ShopDetailPage;