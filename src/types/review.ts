// 评价相关类型定义

export interface Review {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  shopId: number;
  rating: number;
  content: string;
  images?: string[];
  createTime: string;
  likeCount: number;
  isAnonymous?: boolean;
  isLiked?: boolean;
}

export interface RatingDistribution {
  rating: number;
  count: number;
  percentage: number;
}