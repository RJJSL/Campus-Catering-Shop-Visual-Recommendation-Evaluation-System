// 菜品相关类型定义

export interface Dish {
  id: number;
  name: string;
  image: string;
  price: number;
  shopId: number;
  shopName: string;
  category: string;
  description?: string;
  likeCount: number;
  favoriteCount: number;
  commentCount: number;
  isLiked?: boolean;
  isFavorite?: boolean;
}

export interface DishComment {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  content: string;
  createTime: string;
  dishId: number;
}