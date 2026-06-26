// 个人中心页
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import ShopCard from '@/components/ShopCard';
import ReviewCard from '@/components/ReviewCard';
import DishCard from '@/components/DishCard';
import { shops } from '@/data/shops';
import { reviews } from '@/data/reviews';
import { dishes } from '@/data/dishes';
import styles from './index.module.scss';

const ProfilePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: 1,
    nickname: '美食达人',
    avatar: 'https://picsum.photos/id/64/200/200',
    favoriteShopCount: 3,
    favoriteDishCount: 2,
    reviewCount: 2,
    uploadShopCount: 1,
    uploadDishCount: 1
  });

  const [activeTab, setActiveTab] = useState<'favorites' | 'reviews' | 'uploads'>('favorites');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = useCallback(() => {
    const token = Taro.getStorageSync('token');
    const user = Taro.getStorageSync('userInfo');
    if (token && user) {
      setIsLoggedIn(true);
      setUserInfo(user);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const goToLogin = () => {
    Taro.navigateTo({ url: '/pages/login/index' });
  };

  const goToShopUpload = () => {
    Taro.navigateTo({ url: '/pages/shop-upload/index' });
  };

  const goToDishUpload = () => {
    Taro.navigateTo({ url: '/pages/dish-upload/index' });
  };

  const goToAdmin = () => {
    Taro.navigateTo({ url: '/pages/admin/index' });
  };

  const handleLogout = () => {
    Taro.showModal({
      title: '确认退出',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          Taro.removeStorageSync('token');
          Taro.removeStorageSync('userInfo');
          setIsLoggedIn(false);
          setActiveTab('favorites');
          Taro.showToast({ title: '已退出登录', icon: 'success' });
        }
      }
    });
  };

  const favoriteShops = shops.slice(0, 3);
  const favoriteDishes = dishes.slice(0, 2);
  const myReviews = reviews.slice(0, 2);
  const myUploadShops = shops.slice(0, 1);
  const myUploadDishes = dishes.slice(0, 1);

  if (!isLoggedIn) {
    return (
      <View className={styles.profilePage}>
        <View className={styles.loginPrompt}>
          <Text className={styles.loginHint}>登录后可使用更多功能</Text>
          <View className={styles.loginButton} onClick={goToLogin}>
            <Text>微信登录</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className={styles.profilePage}>
      {/* 用户信息卡片 */}
      <View className={styles.userCard}>
        <Image 
          className={styles.userAvatar} 
          src={userInfo.avatar} 
          mode="aspectFill"
        />
        <View className={styles.userInfo}>
          <Text className={styles.userName}>{userInfo.nickname}</Text>
          <View className={styles.userStats}>
            <View className={styles.statItem}>
              <Text className={styles.statValue}>{userInfo.favoriteShopCount}</Text>
              <Text className={styles.statLabel}>收藏店铺</Text>
            </View>
            <View className={styles.statItem}>
              <Text className={styles.statValue}>{userInfo.reviewCount}</Text>
              <Text className={styles.statLabel}>评价</Text>
            </View>
            <View className={styles.statItem}>
              <Text className={styles.statValue}>{userInfo.uploadShopCount}</Text>
              <Text className={styles.statLabel}>上传</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 快捷操作区 - 上传功能 */}
      <View className={styles.quickActions}>
        <View className={styles.actionCard} onClick={goToShopUpload}>
          <Text className={styles.actionIcon}>🏪</Text>
          <Text className={styles.actionTitle}>上传店铺</Text>
          <Text className={styles.actionDesc}>分享你发现的美食店铺</Text>
        </View>
        <View className={styles.actionCard} onClick={goToDishUpload}>
          <Text className={styles.actionIcon}>🍽️</Text>
          <Text className={styles.actionTitle}>上传菜品</Text>
          <Text className={styles.actionDesc}>推荐好吃的菜品</Text>
        </View>
      </View>

      {/* 标签页切换 */}
      <View className={styles.tabBar}>
        <View 
          className={`${styles.tabItem} ${activeTab === 'favorites' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          <Text>我的收藏</Text>
        </View>
        <View 
          className={`${styles.tabItem} ${activeTab === 'reviews' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          <Text>我的评价</Text>
        </View>
        <View 
          className={`${styles.tabItem} ${activeTab === 'uploads' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('uploads')}
        >
          <Text>我的上传</Text>
        </View>
      </View>

      {/* 内容区域 */}
      <ScrollView className={styles.contentArea} scrollY>
        {/* 我的收藏 */}
        {activeTab === 'favorites' && (
          <View className={styles.favoriteSection}>
            <View className={styles.favoriteHeader}>
              <Text className={styles.favoriteTitle}>收藏的店铺</Text>
            </View>
            {favoriteShops.map(shop => (
              <View 
                key={shop.id}
                onClick={() => Taro.navigateTo({ url: `/pages/shop-detail/index?id=${shop.id}` })}
              >
                <ShopCard shop={shop} />
              </View>
            ))}

            <View className={styles.favoriteHeader}>
              <Text className={styles.favoriteTitle}>收藏的菜品</Text>
            </View>
            {favoriteDishes.map(dish => (
              <View 
                key={dish.id}
                onClick={() => Taro.navigateTo({ url: `/pages/dish-detail/index?id=${dish.id}` })}
              >
                <DishCard dish={dish} />
              </View>
            ))}
          </View>
        )}

        {/* 我的评价 */}
        {activeTab === 'reviews' && (
          <View className={styles.reviewsSection}>
            {myReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
            {myReviews.length === 0 && (
              <View className={styles.emptyState}>
                <Text className={styles.emptyText}>暂无评价</Text>
                <Text className={styles.emptyHint}>快去发表第一条评价吧</Text>
              </View>
            )}
          </View>
        )}

        {/* 我的上传 */}
        {activeTab === 'uploads' && (
          <View className={styles.uploadsSection}>
            <View className={styles.favoriteHeader}>
              <Text className={styles.favoriteTitle}>上传的店铺</Text>
            </View>
            {myUploadShops.map(shop => (
              <View 
                key={shop.id}
                onClick={() => Taro.navigateTo({ url: `/pages/shop-detail/index?id=${shop.id}` })}
              >
                <ShopCard shop={shop} />
              </View>
            ))}

            <View className={styles.favoriteHeader}>
              <Text className={styles.favoriteTitle}>上传的菜品</Text>
            </View>
            {myUploadDishes.map(dish => (
              <View 
                key={dish.id}
                onClick={() => Taro.navigateTo({ url: `/pages/dish-detail/index?id=${dish.id}` })}
              >
                <DishCard dish={dish} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* 底部菜单 */}
      <View className={styles.bottomMenu}>
        <View className={styles.menuGroup}>
          <View className={styles.menuItem} onClick={goToAdmin}>
            <Text className={styles.menuIcon}>⚙️</Text>
            <Text className={styles.menuText}>管理后台</Text>
            <Text className={styles.menuArrow}>→</Text>
          </View>
        </View>

        <View className={styles.logoutButton} onClick={handleLogout}>
          <Text className={styles.logoutText}>退出登录</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;