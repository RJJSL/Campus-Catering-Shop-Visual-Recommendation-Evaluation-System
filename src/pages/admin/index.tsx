// 管理后台页
import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const AdminPage: React.FC = () => {
  const handleShopReview = () => {
    Taro.showToast({ title: '店铺审核功能开发中...', icon: 'none' });
  };

  const handleDishReview = () => {
    Taro.showToast({ title: '菜品审核功能开发中...', icon: 'none' });
  };

  const handleReviewManage = () => {
    Taro.showToast({ title: '评价管理功能开发中...', icon: 'none' });
  };

  const handleUserManage = () => {
    Taro.showToast({ title: '用户管理功能开发中...', icon: 'none' });
  };

  return (
    <View className={styles.adminPage}>
      {/* 头部 */}
      <View className={styles.header}>
        <Text className={styles.title}>管理后台</Text>
        <Text className={styles.subtitle}>审核内容、管理用户</Text>
      </View>

      {/* 统计数据 */}
      <View className={styles.statsGrid}>
        <View className={styles.statCard}>
          <Text className={styles.statValue}>5</Text>
          <Text className={styles.statLabel}>待审核店铺</Text>
        </View>
        <View className={styles.statCard}>
          <Text className={styles.statValue}>12</Text>
          <Text className={styles.statLabel}>待审核菜品</Text>
        </View>
        <View className={styles.statCard}>
          <Text className={styles.statValue}>3</Text>
          <Text className={styles.statLabel}>待处理投诉</Text>
        </View>
      </View>

      {/* 功能菜单 */}
      <View className={styles.menuList}>
        <View className={styles.menuItem} onClick={handleShopReview}>
          <Text className={styles.menuIcon}>🏪</Text>
          <Text className={styles.menuText}>店铺审核</Text>
          <Text className={styles.menuArrow}>→</Text>
        </View>
        <View className={styles.menuItem} onClick={handleDishReview}>
          <Text className={styles.menuIcon}>🍽️</Text>
          <Text className={styles.menuText}>菜品审核</Text>
          <Text className={styles.menuArrow}>→</Text>
        </View>
        <View className={styles.menuItem} onClick={handleReviewManage}>
          <Text className={styles.menuIcon}>💬</Text>
          <Text className={styles.menuText}>评价管理</Text>
          <Text className={styles.menuArrow}>→</Text>
        </View>
        <View className={styles.menuItem} onClick={handleUserManage}>
          <Text className={styles.menuIcon}>👤</Text>
          <Text className={styles.menuText}>用户管理</Text>
          <Text className={styles.menuArrow}>→</Text>
        </View>
      </View>
    </View>
  );
};

export default AdminPage;