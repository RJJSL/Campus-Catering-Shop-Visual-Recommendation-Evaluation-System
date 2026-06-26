// 店铺列表页
import React, { useState, useEffect } from 'react';
import { View, Text, Input, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import ShopCard from '@/components/ShopCard';
import { shops, shopTypes, areas } from '@/data/shops';
import styles from './index.module.scss';

const ShopsPage: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'rating' | 'heat' | 'distance'>('rating');
  const [filteredShops, setFilteredShops] = useState(shops);

  useEffect(() => {
    let result = shops;

    // 搜索过滤
    if (searchKeyword) {
      result = result.filter(shop => 
        shop.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        shop.type.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    // 类型过滤
    if (selectedType) {
      const typeName = shopTypes.find(t => t.id === selectedType)?.name;
      if (typeName) {
        result = result.filter(shop => shop.type === typeName);
      }
    }

    // 区域过滤
    if (selectedArea) {
      const areaName = areas.find(a => a.id === selectedArea)?.name;
      if (areaName) {
        result = result.filter(shop => shop.area === areaName);
      }
    }

    // 排序
    if (sortBy === 'rating') {
      result = result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'heat') {
      result = result.sort((a, b) => b.reviewCount - a.reviewCount);
    } else if (sortBy === 'distance') {
      result = result.sort((a, b) => {
        const distA = parseInt(a.distance?.replace('m', '') || '9999');
        const distB = parseInt(b.distance?.replace('m', '') || '9999');
        return distA - distB;
      });
    }

    setFilteredShops(result);
  }, [searchKeyword, selectedType, selectedArea, sortBy]);

  const handleSearch = () => {
    // 搜索逻辑已在 useEffect 中处理
  };

  const handleTypeFilter = (typeId: number | null) => {
    setSelectedType(typeId);
  };

  const handleAreaFilter = (areaId: number | null) => {
    setSelectedArea(areaId);
  };

  const handleSort = (sort: 'rating' | 'heat' | 'distance') => {
    setSortBy(sort);
  };

  return (
    <View className={styles.shopsPage}>
      {/* 搜索栏 */}
      <View className={styles.searchBar}>
        <Input 
          className={styles.searchInput}
          placeholder="搜索店铺名称或类型"
          value={searchKeyword}
          onInput={(e) => setSearchKeyword(e.detail.value)}
        />
        <View className={styles.searchButton} onClick={handleSearch}>
          <Text>搜索</Text>
        </View>
      </View>

      {/* 类型筛选 */}
      <ScrollView 
        className={styles.filterBar}
        scrollX
        scrollWithAnimation
      >
        <View 
          className={`${styles.filterItem} ${selectedType === null ? styles.filterItemActive : ''}`}
          onClick={() => handleTypeFilter(null)}
        >
          <Text>全部</Text>
        </View>
        {shopTypes.map(type => (
          <View 
            key={type.id}
            className={`${styles.filterItem} ${selectedType === type.id ? styles.filterItemActive : ''}`}
            onClick={() => handleTypeFilter(type.id)}
          >
            <Text>{type.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 区域筛选 */}
      <ScrollView 
        className={styles.filterBar}
        scrollX
        scrollWithAnimation
      >
        <View 
          className={`${styles.filterItem} ${selectedArea === null ? styles.filterItemActive : ''}`}
          onClick={() => handleAreaFilter(null)}
        >
          <Text>全部区域</Text>
        </View>
        {areas.map(area => (
          <View 
            key={area.id}
            className={`${styles.filterItem} ${selectedArea === area.id ? styles.filterItemActive : ''}`}
            onClick={() => handleAreaFilter(area.id)}
          >
            <Text>{area.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 排序栏 */}
      <View className={styles.sortBar}>
        <View 
          className={`${styles.sortItem} ${sortBy === 'rating' ? styles.sortItemActive : ''}`}
          onClick={() => handleSort('rating')}
        >
          <Text>评分最高</Text>
        </View>
        <View 
          className={`${styles.sortItem} ${sortBy === 'heat' ? styles.sortItemActive : ''}`}
          onClick={() => handleSort('heat')}
        >
          <Text>热度最高</Text>
        </View>
        <View 
          className={`${styles.sortItem} ${sortBy === 'distance' ? styles.sortItemActive : ''}`}
          onClick={() => handleSort('distance')}
        >
          <Text>距离最近</Text>
        </View>
      </View>

      {/* 店铺列表 */}
      <ScrollView 
        className={styles.shopList}
        scrollY
        scrollWithAnimation
      >
        {filteredShops.length > 0 ? (
          filteredShops.map(shop => (
            <ShopCard key={shop.id} shop={shop} />
          ))
        ) : (
          <View className={styles.emptyState}>
            <Text className={styles.emptyText}>暂无符合条件的店铺</Text>
            <Text className={styles.emptyHint}>试试其他筛选条件吧</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ShopsPage;