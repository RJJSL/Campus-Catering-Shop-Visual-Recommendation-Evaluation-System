// 上传店铺页
import React, { useState } from 'react';
import { View, Text, Input, Textarea } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const ShopUploadPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    area: '',
    address: '',
    phone: '',
    openingHours: '',
    description: ''
  });

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      Taro.showToast({ title: '请输入店铺名称', icon: 'none' });
      return;
    }

    Taro.showToast({ title: '店铺上传成功，等待审核', icon: 'success' });
    
    setTimeout(() => {
      Taro.navigateBack();
    }, 1500);
  };

  return (
    <View className={styles.shopUploadPage}>
      {/* 店铺名称 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>店铺名称 *</Text>
        <Input 
          className={styles.formInput}
          placeholder="请输入店铺名称"
          value={formData.name}
          onInput={(e) => setFormData({ ...formData, name: e.detail.value })}
        />
      </View>

      {/* 店铺类型 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>店铺类型 *</Text>
        <Input 
          className={styles.formInput}
          placeholder="餐厅、小吃、饮品、甜点、快餐"
          value={formData.type}
          onInput={(e) => setFormData({ ...formData, type: e.detail.value })}
        />
      </View>

      {/* 所在区域 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>所在区域 *</Text>
        <Input 
          className={styles.formInput}
          placeholder="南苑、西苑、北苑、东苑"
          value={formData.area}
          onInput={(e) => setFormData({ ...formData, area: e.detail.value })}
        />
      </View>

      {/* 详细地址 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>详细地址 *</Text>
        <Input 
          className={styles.formInput}
          placeholder="请输入详细地址"
          value={formData.address}
          onInput={(e) => setFormData({ ...formData, address: e.detail.value })}
        />
      </View>

      {/* 联系电话 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>联系电话</Text>
        <Input 
          className={styles.formInput}
          placeholder="请输入联系电话（可选）"
          value={formData.phone}
          onInput={(e) => setFormData({ ...formData, phone: e.detail.value })}
        />
      </View>

      {/* 营业时间 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>营业时间</Text>
        <Input 
          className={styles.formInput}
          placeholder="例如：08:00-20:00"
          value={formData.openingHours}
          onInput={(e) => setFormData({ ...formData, openingHours: e.detail.value })}
        />
      </View>

      {/* 店铺简介 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>店铺简介</Text>
        <Textarea 
          className={styles.formInput}
          placeholder="请输入店铺简介（可选）"
          value={formData.description}
          onInput={(e) => setFormData({ ...formData, description: e.detail.value })}
        />
      </View>

      {/* 店铺图片 */}
      <View className={styles.formGroup}>
        <Text className={styles.formLabel}>店铺图片</Text>
        <View className={styles.imageUpload}>
          <Text className={styles.uploadIcon}>📷</Text>
        </View>
        <Text className={styles.formHint}>点击上传店铺图片</Text>
      </View>

      {/* 提交按钮 */}
      <View className={styles.submitButton} onClick={handleSubmit}>
        <Text>提交审核</Text>
      </View>
    </View>
  );
};

export default ShopUploadPage;