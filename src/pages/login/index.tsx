// 登录页
import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // 模拟登录成功
    const mockUser = {
      id: 1,
      nickname: '美食达人',
      avatar: 'https://picsum.photos/id/64/200/200',
      favoriteShopCount: 3,
      favoriteDishCount: 2,
      reviewCount: 2,
      uploadShopCount: 1,
      uploadDishCount: 1
    };
    
    Taro.setStorageSync('token', 'mock_token_123');
    Taro.setStorageSync('userInfo', mockUser);
    
    Taro.showToast({ title: '登录成功', icon: 'success' });
    
    setTimeout(() => {
      Taro.switchTab({ url: '/pages/profile/index' });
    }, 1500);
  };

  return (
    <View className={styles.loginPage}>
      <Text className={styles.logo}>🍽️</Text>
      <Text className={styles.title}>校园美食</Text>
      <Text className={styles.subtitle}>发现周边美味，分享用餐体验</Text>
      
      <View className={styles.loginButton} onClick={handleLogin}>
        <Text className={styles.loginButtonText}>微信一键登录</Text>
      </View>
      
      <Text className={styles.hint}>
        登录后可收藏店铺、发表评价、上传内容
      </Text>
    </View>
  );
};

export default LoginPage;