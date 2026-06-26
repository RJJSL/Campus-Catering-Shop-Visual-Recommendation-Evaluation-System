// 评价 Mock 数据
import { Review, RatingDistribution } from '@/types/review';

export const reviews: Review[] = [
  { id: 1, userId: 1, userName: '美食达人', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 1, rating: 5, content: '臭豆腐味道很正宗，外酥里嫩，配上秘制酱料，回味无穷！强烈推荐！', images: ['https://picsum.photos/id/292/300/300'], createTime: '2026-06-20 12:30', likeCount: 45, isLiked: false },
  { id: 2, userId: 2, userName: '吃货小王', userAvatar: 'https://picsum.photos/id/91/200/200', shopId: 1, rating: 4, content: '味道不错，分量也够，就是排队时间有点长', createTime: '2026-06-19 18:45', likeCount: 23, isLiked: false },
  { id: 3, userId: 3, userName: '匿名用户', userAvatar: 'https://picsum.photos/id/177/200/200', shopId: 2, rating: 5, content: '麻辣小面超级好吃，辣度适中，面条劲道', createTime: '2026-06-18 10:20', likeCount: 67, isAnonymous: true, isLiked: false },
  { id: 4, userId: 4, userName: '学生小李', userAvatar: 'https://picsum.photos/id/338/200/200', shopId: 3, rating: 4, content: '冰淇淋口感细腻，价格实惠，夏天必备', createTime: '2026-06-17 15:30', likeCount: 34, isLiked: false },
  { id: 5, userId: 5, userName: '美食探索者', userAvatar: 'https://picsum.photos/id/1027/200/200', shopId: 4, rating: 5, content: '黄焖鸡味道很棒，鸡肉鲜嫩，汤汁浓郁，配上米饭绝了！', images: ['https://picsum.photos/id/401/300/300'], createTime: '2026-06-16 12:00', likeCount: 89, isLiked: false },
  { id: 6, userId: 6, userName: '校园吃货', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 6, rating: 4, content: '兰州拉面味道正宗，汤鲜面滑，价格合理', createTime: '2026-06-15 18:20', likeCount: 56, isLiked: false },
  { id: 7, userId: 1, userName: '美食达人', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 7, rating: 5, content: '蛋糕很好吃，新鲜出炉，奶油细腻不腻', images: ['https://picsum.photos/id/580/300/300'], createTime: '2026-06-14 11:30', likeCount: 45, isLiked: false },
  { id: 8, userId: 2, userName: '吃货小王', userAvatar: 'https://picsum.photos/id/91/200/200', shopId: 8, rating: 4, content: '麻辣香锅味道不错，食材新鲜，就是有点贵', createTime: '2026-06-13 14:45', likeCount: 34, isLiked: false },
  { id: 9, userId: 3, userName: '匿名用户', userAvatar: 'https://picsum.photos/id/177/200/200', shopId: 9, rating: 3, content: '炸鸡还行，汉堡一般，性价比不高', createTime: '2026-06-12 16:20', likeCount: 12, isAnonymous: true, isLiked: false },
  { id: 10, userId: 4, userName: '学生小李', userAvatar: 'https://picsum.photos/id/338/200/200', shopId: 10, rating: 5, content: '水果捞很新鲜，酸奶浓稠，强烈推荐！', createTime: '2026-06-11 12:00', likeCount: 45, isLiked: false },
  { id: 11, userId: 5, userName: '美食探索者', userAvatar: 'https://picsum.photos/id/1027/200/200', shopId: 11, rating: 5, content: '东北烧烤味道正宗，羊肉鲜嫩，烤茄子特别好吃', images: ['https://picsum.photos/id/674/300/300'], createTime: '2026-06-10 19:30', likeCount: 78, isLiked: false },
  { id: 12, userId: 6, userName: '校园吃货', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 12, rating: 5, content: '川味火锅太赞了！麻辣鲜香，食材新鲜，环境也好', createTime: '2026-06-09 18:00', likeCount: 98, isLiked: false },
  { id: 13, userId: 1, userName: '美食达人', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 13, rating: 4, content: '日料很精致，寿司新鲜，价格有点贵但值得', createTime: '2026-06-08 12:30', likeCount: 56, isLiked: false },
  { id: 14, userId: 2, userName: '吃货小王', userAvatar: 'https://picsum.photos/id/91/200/200', shopId: 14, rating: 4, content: '麻辣拌味道不错，自选食材很方便', createTime: '2026-06-07 11:30', likeCount: 34, isLiked: false },
  { id: 15, userId: 3, userName: '学生小李', userAvatar: 'https://picsum.photos/id/177/200/200', shopId: 15, rating: 5, content: '煎饼果子很好吃，正宗天津风味，早餐首选', createTime: '2026-06-06 08:30', likeCount: 67, isLiked: false },
  { id: 16, userId: 4, userName: '校园吃货', userAvatar: 'https://picsum.photos/id/338/200/200', shopId: 16, rating: 4, content: '寿司店性价比很高，三文鱼很新鲜', createTime: '2026-06-05 12:00', likeCount: 45, isLiked: false },
  { id: 17, userId: 5, userName: '美食探索者', userAvatar: 'https://picsum.photos/id/1027/200/200', shopId: 17, rating: 4, content: '烤肉饭味道不错，分量足，价格实惠', createTime: '2026-06-04 12:30', likeCount: 34, isLiked: false },
  { id: 18, userId: 6, userName: '甜品爱好者', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 18, rating: 5, content: '芋圆甜品超级好吃！Q弹爽滑，红豆沙细腻', createTime: '2026-06-03 16:00', likeCount: 56, isLiked: false },
  { id: 19, userId: 1, userName: '美食达人', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 19, rating: 4, content: '冒菜味道不错，麻辣鲜香，食材自选', createTime: '2026-06-02 18:30', likeCount: 45, isLiked: false },
  { id: 20, userId: 2, userName: '吃货小王', userAvatar: 'https://picsum.photos/id/91/200/200', shopId: 20, rating: 5, content: '咖啡时光环境很好，拿铁咖啡很香，适合学习', images: ['https://picsum.photos/id/425/300/300'], createTime: '2026-06-01 10:00', likeCount: 67, isLiked: false },
  { id: 21, userId: 3, userName: '学生小李', userAvatar: 'https://picsum.photos/id/177/200/200', shopId: 1, rating: 5, content: '第二次来了，还是那么好吃！', createTime: '2026-05-31 13:00', likeCount: 23, isLiked: false },
  { id: 22, userId: 4, userName: '校园吃货', userAvatar: 'https://picsum.photos/id/338/200/200', shopId: 2, rating: 4, content: '小面很劲道，就是有点辣', createTime: '2026-05-30 12:00', likeCount: 18, isLiked: false },
  { id: 23, userId: 5, userName: '美食探索者', userAvatar: 'https://picsum.photos/id/1027/200/200', shopId: 3, rating: 4, content: '柠檬水很解渴，夏天必备', createTime: '2026-05-29 14:30', likeCount: 15, isLiked: false },
  { id: 24, userId: 6, userName: '甜品爱好者', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 4, rating: 5, content: '黄焖鸡米饭太香了，每次来都要吃', createTime: '2026-05-28 12:00', likeCount: 34, isLiked: false },
  { id: 25, userId: 1, userName: '美食达人', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 5, rating: 4, content: '水果茶很新鲜，推荐', createTime: '2026-05-27 15:00', likeCount: 22, isLiked: false },
  { id: 26, userId: 2, userName: '吃货小王', userAvatar: 'https://picsum.photos/id/91/200/200', shopId: 6, rating: 5, content: '牛肉拉面太赞了，汤鲜面滑', createTime: '2026-05-26 12:30', likeCount: 45, isLiked: false },
  { id: 27, userId: 3, userName: '匿名用户', userAvatar: 'https://picsum.photos/id/177/200/200', shopId: 7, rating: 5, content: '芝士蛋糕太好吃了！入口即化', isAnonymous: true, createTime: '2026-05-25 16:00', likeCount: 38, isLiked: false },
  { id: 28, userId: 4, userName: '校园吃货', userAvatar: 'https://picsum.photos/id/338/200/200', shopId: 8, rating: 3, content: '香锅味道一般，性价比不高', createTime: '2026-05-24 18:00', likeCount: 12, isLiked: false },
  { id: 29, userId: 5, userName: '美食探索者', userAvatar: 'https://picsum.photos/id/1027/200/200', shopId: 9, rating: 4, content: '炸鸡腿很酥脆，推荐', createTime: '2026-05-23 13:30', likeCount: 28, isLiked: false },
  { id: 30, userId: 6, userName: '甜品爱好者', userAvatar: 'https://picsum.photos/id/64/200/200', shopId: 10, rating: 5, content: '芒果捞超级好吃，芒果很甜', createTime: '2026-05-22 15:00', likeCount: 36, isLiked: false }
];

export const getReviewsByShopId = (shopId: number): Review[] => {
  return reviews.filter(review => review.shopId === shopId);
};

export const getRatingDistribution = (shopId: number): RatingDistribution[] => {
  const shopReviews = getReviewsByShopId(shopId);
  const total = shopReviews.length;
  
  const distribution: RatingDistribution[] = [];
  for (let i = 5; i >= 1; i--) {
    const count = shopReviews.filter(r => r.rating === i).length;
    distribution.push({
      rating: i,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0
    });
  }
  
  return distribution;
};

export const getReviewsByUserId = (userId: number): Review[] => {
  return reviews.filter(review => review.userId === userId);
};