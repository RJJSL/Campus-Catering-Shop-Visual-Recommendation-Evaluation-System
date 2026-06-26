// 用户相关类型定义

export interface User {
  id: number;
  openid?: string;
  nickname: string;
  avatar: string;
  phone?: string;
  createTime: string;
  favoriteShopCount: number;
  favoriteDishCount: number;
  reviewCount: number;
  uploadShopCount: number;
  uploadDishCount: number;
}

export interface FavoriteShop {
  id: number;
  shopId: number;
  shop: {
    id: number;
    name: string;
    image: string;
    rating: number;
    area: string;
    type: string;
  };
  createTime: string;
}

export interface FavoriteDish {
  id: number;
  dishId: number;
  dish: {
    id: number;
    name: string;
    image: string;
    price: number;
    shopName: string;
  };
  createTime: string;
}