// 首页
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import RandomRecommend from '@/components/RandomRecommend';
import ShopCard from '@/components/ShopCard';
import DishCard from '@/components/DishCard';
import { shops, shopTypes, areas, getTodayRecommend, getNewShops } from '@/data/shops';
import { dishes } from '@/data/dishes';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    avatar: 'https://picsum.photos/id/64/200/200',
    nickname: '游客'
  });

  const todayRecommend = getTodayRecommend();
  const newShops = getNewShops();
  const hotDishes = dishes.sort((a, b) => b.likeCount - a.likeCount).slice(0, 5);

  useEffect(() => {
    // 检查登录状态
    const token = Taro.getStorageSync('token');
    const user = Taro.getStorageSync('userInfo');
    if (token && user) {
      setIsLoggedIn(true);
      setUserInfo(user);
    }
  }, []);

  const goToProfile = () => {
    if (!isLoggedIn) {
      Taro.navigateTo({ url: '/pages/login/index' });
    } else {
      Taro.switchTab({ url: '/pages/profile/index' });
    }
  };

  const goToShopsWithType = (typeId: number) => {
    Taro.switchTab({ url: '/pages/shops/index' });
  };

  const goToShopsWithArea = (areaId: number) => {
    Taro.switchTab({ url: '/pages/shops/index' });
  };

  return (
    <View className={styles.homePage}>
      {/* 头部 */}
      <View className={styles.header}>
        <View>
          <Text className={styles.title}>今天吃什么？</Text>
          <Text className={styles.subtitle}>发现校园周边美味</Text>
        </View>
        <Image 
          className={styles.userAvatar} 
          src={userInfo.avatar} 
          mode="aspectFill"
          onClick={goToProfile}
        />
      </View>

      {/* 随机推荐 */}
      <RandomRecommend />

      {/* 分类入口 */}
      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>美食分类</Text>
        </View>
        <View className={styles.categoryGrid}>
          {shopTypes.slice(0, 4).map(type => (
            <View 
              key={type.id} 
              className={styles.categoryItem}
              onClick={() => goToShopsWithType(type.id)}
            >
              <Text className={styles.categoryIcon}>
                {type.id === 1 ? '🍽️' : type.id === 2 ? '🥪' : type.id === 3 ? '🥤' : '🍰'}
              </Text>
              <Text className={styles.categoryName}>{type.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 今日推荐 */}
      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>今日推荐</Text>
          <Text 
            className={styles.moreLink}
            onClick={() => Taro.switchTab({ url: '/pages/shops/index' })}
          >
            更多 →
          </Text>
        </View>
        <Swiper 
          className={styles.swiperContainer}
          autoplay
          circular
          indicatorDots
        >
          {todayRecommend.map(shop => (
            <SwiperItem key={shop.id} className={styles.swiperItem}>
              <View 
                className={styles.bannerItem}
                onClick={() => Taro.navigateTo({ url: `/pages/shop-detail/index?id=${shop.id}` })}
              >
                <Image 
                  className={styles.bannerImage} 
                  src={shop.image} 
                  mode="aspectFill"
                />
                <View className={styles.bannerInfo}>
                  <Text className={styles.bannerName}>{shop.name}</Text>
                  <Text className={styles.bannerRating}>⭐ {shop.rating} · {shop.area}</Text>
                </View>
              </View>
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* 新店推荐 */}
      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>新店推荐</Text>
          <Text 
            className={styles.moreLink}
            onClick={() => Taro.switchTab({ url: '/pages/shops/index' })}
          >
            更多 →
          </Text>
        </View>
        <ScrollView 
          className={styles.scrollContainer}
          scrollX
          scrollWithAnimation
        >
          {newShops.map(shop => (
            <View key={shop.id} className={styles.scrollItem}>
              <ShopCard shop={shop} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 热门菜品 */}
      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>热门菜品</Text>
          <Text 
            className={styles.moreLink}
            onClick={() => Taro.switchTab({ url: '/pages/shops/index' })}
          >
            更多 →
          </Text>
        </View>
        <ScrollView 
          className={styles.scrollContainer}
          scrollX
          scrollWithAnimation
        >
          {hotDishes.map(dish => (
            <View key={dish.id} className={styles.scrollItem}>
              <DishCard dish={dish} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 区域入口 */}
      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>按区域浏览</Text>
        </View>
        <View className={styles.categoryGrid}>
          {areas.map(area => (
            <View 
              key={area.id} 
              className={styles.categoryItem}
              onClick={() => goToShopsWithArea(area.id)}
            >
              <Text className={styles.categoryIcon}>📍</Text>
              <Text className={styles.categoryName}>{area.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomePage;