// 上传菜品页
import React, { useState } from 'react';
import { View, Text, Input, Textarea } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const DishUploadPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    shopId: '',
    shopName: '',
    price: '',
    category: '',
    description: ''
  });

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      Taro.showToast({ title: '请输入菜品名称', icon: 'none' });
      return;
    }

    if (!formData.price.trim()) {
      Taro.showToast({ title: '请输入菜品价格', icon: 'none' });
      return;
    }

    Taro.showToast({ title: '菜品上传成功，等待审核', icon: 'success' });
    
    setTimeout(() => {
      Taro.navigateBack();
    }, 1500);
  };

  return (
    <View className={styles.dishUploadPage}>
      {/* 菜品名称 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>菜品名称 *</Text>
        <Input 
          className={styles.formInput}
          placeholder="请输入菜品名称"
          value={formData.name}
          onInput={(e) => setFormData({ ...formData, name: e.detail.value })}
        />
      </View>

      {/* 所属店铺 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>所属店铺 *</Text>
        <Input 
          className={styles.formInput}
          placeholder="请输入店铺名称"
          value={formData.shopName}
          onInput={(e) => setFormData({ ...formData, shopName: e.detail.value })}
        />
      </View>

      {/* 菜品价格 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>菜品价格 *</Text>
        <Input 
          className={styles.formInput}
          placeholder="请输入菜品价格（元）"
          type="number"
          value={formData.price}
          onInput={(e) => setFormData({ ...formData, price: e.detail.value })}
        />
      </View>

      {/* 菜品分类 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>菜品分类</Text>
        <Input 
          className={styles.formInput}
          placeholder="主食、小吃、饮品、甜点"
          value={formData.category}
          onInput={(e) => setFormData({ ...formData, category: e.detail.value })}
        />
      </View>

      {/* 菜品简介 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>菜品简介</Text>
        <Textarea 
          className={styles.formInput}
          placeholder="请输入菜品简介（可选）"
          value={formData.description}
          onInput={(e) => setFormData({ ...formData, description: e.detail.value })}
        />
      </View>

      {/* 菜品图片 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>菜品图片</Text>
        <View className={styles.imageUpload}>
          <Text className={styles.uploadIcon}>📷</Text>
        </View>
        <Text className={styles.formHint}>点击上传菜品图片</Text>
      </View>

      {/* 提交按钮 */}
      <View className={styles.submitButton} onClick={handleSubmit}>
        <Text>提交审核</Text>
      </View>
    </View>
  );
};

export default DishUploadPage;