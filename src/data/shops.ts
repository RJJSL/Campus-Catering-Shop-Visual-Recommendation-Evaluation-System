// 店铺 Mock 数据
import { Shop, ShopType, Area } from '@/types/shop';

export const shopTypes: ShopType[] = [
  { id: 1, name: '餐厅' },
  { id: 2, name: '小吃' },
  { id: 3, name: '饮品' },
  { id: 4, name: '甜点' },
  { id: 5, name: '快餐' },
  { id: 6, name: '烧烤' },
  { id: 7, name: '火锅' },
  { id: 8, name: '日料' }
];

export const areas: Area[] = [
  { id: 1, name: '南苑' },
  { id: 2, name: '西苑' },
  { id: 3, name: '北苑' },
  { id: 4, name: '东苑' },
  { id: 5, name: '中心广场' }
];

export const shops: Shop[] = [
  {
    id: 1,
    name: '老长沙臭豆腐',
    image: 'https://picsum.photos/id/292/300/300',
    rating: 4.8,
    reviewCount: 156,
    area: '南苑',
    type: '小吃',
    address: '南苑食堂一楼A区',
    phone: '13800138001',
    openingHours: '08:00-20:00',
    description: '正宗长沙臭豆腐，外酥里嫩，配上秘制酱料，回味无穷',
    distance: '200m',
    isNew: true,
    isHot: true
  },
  {
    id: 2,
    name: '重庆小面',
    image: 'https://picsum.photos/id/312/300/300',
    rating: 4.5,
    reviewCount: 89,
    area: '南苑',
    type: '小吃',
    address: '南苑食堂二楼B区',
    openingHours: '07:00-21:00',
    description: '麻辣鲜香，地道重庆风味',
    distance: '250m',
    isHot: true
  },
  {
    id: 3,
    name: '蜜雪冰城',
    image: 'https://picsum.photos/id/326/300/300',
    rating: 4.2,
    reviewCount: 234,
    area: '西苑',
    type: '饮品',
    address: '西苑商业街A区101',
    phone: '13800138003',
    openingHours: '09:00-22:00',
    description: '冰淇淋与茶饮，清凉解暑',
    distance: '500m'
  },
  {
    id: 4,
    name: '黄焖鸡米饭',
    image: 'https://picsum.photos/id/401/300/300',
    rating: 4.6,
    reviewCount: 178,
    area: '北苑',
    type: '快餐',
    address: '北苑食堂一楼C区',
    openingHours: '10:00-20:00',
    description: '鲜嫩鸡肉，浓郁汤汁，配上米饭，美味可口',
    distance: '300m',
    isHot: true
  },
  {
    id: 5,
    name: '奶茶先生',
    image: 'https://picsum.photos/id/431/300/300',
    rating: 4.3,
    reviewCount: 67,
    area: '东苑',
    type: '饮品',
    address: '东苑商业街B区203',
    openingHours: '08:00-21:00',
    description: '新鲜水果茶，健康美味',
    distance: '400m',
    isNew: true
  },
  {
    id: 6,
    name: '兰州拉面',
    image: 'https://picsum.photos/id/570/300/300',
    rating: 4.7,
    reviewCount: 145,
    area: '南苑',
    type: '餐厅',
    address: '南苑商业街C区301',
    phone: '13800138006',
    openingHours: '07:00-21:00',
    description: '手工拉面，汤鲜面滑',
    distance: '350m'
  },
  {
    id: 7,
    name: '蛋糕工坊',
    image: 'https://picsum.photos/id/580/300/300',
    rating: 4.9,
    reviewCount: 56,
    area: '西苑',
    type: '甜点',
    address: '西苑商业街D区102',
    phone: '13800138007',
    openingHours: '09:00-20:00',
    description: '新鲜烘焙，口感细腻',
    distance: '450m',
    isNew: true
  },
  {
    id: 8,
    name: '麻辣香锅',
    image: 'https://picsum.photos/id/625/300/300',
    rating: 4.4,
    reviewCount: 98,
    area: '北苑',
    type: '餐厅',
    address: '北苑食堂二楼D区',
    openingHours: '11:00-21:00',
    description: '麻辣鲜香，自选食材',
    distance: '280m'
  },
  {
    id: 9,
    name: '炸鸡汉堡',
    image: 'https://picsum.photos/id/835/300/300',
    rating: 4.1,
    reviewCount: 123,
    area: '东苑',
    type: '快餐',
    address: '东苑食堂一楼E区',
    openingHours: '10:00-22:00',
    description: '酥脆炸鸡，美味汉堡',
    distance: '380m'
  },
  {
    id: 10,
    name: '水果捞',
    image: 'https://picsum.photos/id/1080/300/300',
    rating: 4.5,
    reviewCount: 45,
    area: '南苑',
    type: '甜点',
    address: '南苑商业街E区105',
    openingHours: '08:00-20:00',
    description: '新鲜水果，酸奶搭配',
    distance: '320m',
    isNew: true
  },
  {
    id: 11,
    name: '东北烧烤',
    image: 'https://picsum.photos/id/674/300/300',
    rating: 4.6,
    reviewCount: 203,
    area: '西苑',
    type: '烧烤',
    address: '西苑商业街F区201',
    phone: '13800138011',
    openingHours: '16:00-23:00',
    description: '地道东北烧烤，炭火烤制，香气四溢',
    distance: '550m',
    isHot: true
  },
  {
    id: 12,
    name: '川味火锅',
    image: 'https://picsum.photos/id/704/300/300',
    rating: 4.7,
    reviewCount: 167,
    area: '北苑',
    type: '火锅',
    address: '北苑商业街G区101',
    phone: '13800138012',
    openingHours: '11:00-22:00',
    description: '正宗川味火锅，麻辣鲜香，食材新鲜',
    distance: '600m',
    isHot: true
  },
  {
    id: 13,
    name: '和风日料',
    image: 'https://picsum.photos/id/488/300/300',
    rating: 4.8,
    reviewCount: 89,
    area: '东苑',
    type: '日料',
    address: '东苑商业街H区301',
    phone: '13800138013',
    openingHours: '11:00-21:00',
    description: '精致日式料理，新鲜食材，环境优雅',
    distance: '450m',
    isNew: true
  },
  {
    id: 14,
    name: '麻辣拌',
    image: 'https://picsum.photos/id/315/300/300',
    rating: 4.4,
    reviewCount: 134,
    area: '南苑',
    type: '小吃',
    address: '南苑食堂一楼F区',
    openingHours: '10:00-20:00',
    description: '自选食材，麻辣鲜香，价格实惠',
    distance: '220m'
  },
  {
    id: 15,
    name: '煎饼果子',
    image: 'https://picsum.photos/id/331/300/300',
    rating: 4.3,
    reviewCount: 78,
    area: '中心广场',
    type: '快餐',
    address: '中心广场北侧',
    openingHours: '06:30-10:30',
    description: '传统煎饼果子，香脆可口，早餐首选',
    distance: '150m'
  },
  {
    id: 16,
    name: '寿司店',
    image: 'https://picsum.photos/id/493/300/300',
    rating: 4.5,
    reviewCount: 67,
    area: '西苑',
    type: '日料',
    address: '西苑商业街I区202',
    openingHours: '11:00-21:00',
    description: '新鲜寿司，种类丰富，性价比高',
    distance: '520m',
    isNew: true
  },
  {
    id: 17,
    name: '烤肉饭',
    image: 'https://picsum.photos/id/598/300/300',
    rating: 4.2,
    reviewCount: 156,
    area: '北苑',
    type: '快餐',
    address: '北苑食堂一楼G区',
    openingHours: '10:00-20:00',
    description: '炭火烤肉，配上特制酱料，美味实惠',
    distance: '290m'
  },
  {
    id: 18,
    name: '芋圆甜品',
    image: 'https://picsum.photos/id/1005/300/300',
    rating: 4.6,
    reviewCount: 98,
    area: '东苑',
    type: '甜点',
    address: '东苑商业街J区101',
    openingHours: '10:00-21:00',
    description: '手工芋圆，Q弹爽滑，甜品首选',
    distance: '420m'
  },
  {
    id: 19,
    name: '冒菜',
    image: 'https://picsum.photos/id/306/300/300',
    rating: 4.5,
    reviewCount: 123,
    area: '南苑',
    type: '小吃',
    address: '南苑商业街K区101',
    openingHours: '11:00-21:00',
    description: '麻辣冒菜，自选食材，热气腾腾',
    distance: '360m'
  },
  {
    id: 20,
    name: '咖啡时光',
    image: 'https://picsum.photos/id/425/300/300',
    rating: 4.7,
    reviewCount: 56,
    area: '中心广场',
    type: '饮品',
    address: '中心广场西侧',
    phone: '13800138020',
    openingHours: '08:00-22:00',
    description: '现磨咖啡，舒适环境，学习休闲好去处',
    distance: '180m',
    isNew: true
  }
];

export const getRandomShop = (): Shop => {
  const randomIndex = Math.floor(Math.random() * shops.length);
  return shops[randomIndex];
};

export const getTodayRecommend = (): Shop[] => {
  return shops.sort((a, b) => b.rating - a.rating).slice(0, 5);
};

export const getNewShops = (): Shop[] => {
  return shops.filter(shop => shop.isNew);
};

export const getHotShops = (): Shop[] => {
  return shops.filter(shop => shop.isHot);
};

export const getShopsByArea = (area: string): Shop[] => {
  if (area === '全部') return shops;
  return shops.filter(shop => shop.area === area);
};

export const getShopsByType = (type: string): Shop[] => {
  if (type === '全部') return shops;
  return shops.filter(shop => shop.type === type);
};

export const getShopById = (id: number): Shop | undefined => {
  return shops.find(shop => shop.id === id);
};