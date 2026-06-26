// 店铺相关类型定义

export interface Shop {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  area: string;
  type: string;
  address: string;
  phone?: string;
  openingHours?: string;
  description?: string;
  distance?: string;
  isNew?: boolean;
  isHot?: boolean;
}

export interface ShopType {
  id: number;
  name: string;
  icon?: string;
}

export interface Area {
  id: number;
  name: string;
}