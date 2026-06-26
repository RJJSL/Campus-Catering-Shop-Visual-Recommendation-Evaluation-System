const BASE_URL = 'http://localhost:3000/api';

export const request = async (url: string, options: RequestInit = {}) => {
  const token = Taro.getStorageSync('token');
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(options.headers as Record<string, string>)
    },
    ...options
  };

  try {
    const response = await fetch(`${BASE_URL}${url}`, defaultOptions);
    const data = await response.json();
    
    if (data.code === 401) {
      Taro.removeStorageSync('token');
      Taro.removeStorageSync('userInfo');
      Taro.navigateTo({ url: '/pages/login/index' });
      throw new Error('登录已过期');
    }
    
    return data;
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
};

export const api = {
  users: {
    login: (data: { openid: string; nickname?: string; avatar?: string }) => 
      request('/users/login', { method: 'POST', body: JSON.stringify(data) }),
    getInfo: () => request('/users/info'),
    update: (data: { nickname?: string; avatar?: string; phone?: string }) => 
      request('/users/update', { method: 'PUT', body: JSON.stringify(data) })
  },
  shops: {
    list: (params?: { area?: string; type?: string; page?: number; size?: number }) => {
      const query = new URLSearchParams(params as Record<string, string>).toString();
      return request(`/shops?${query}`);
    },
    get: (id: number) => request(`/shops/${id}`),
    create: (data: Record<string, any>) => 
      request('/shops', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: number, data: Record<string, any>) => 
      request(`/shops/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: number) => request(`/shops/${id}`, { method: 'DELETE' }),
    recommend: () => request('/shops/recommend/today'),
    new: () => request('/shops/list/new'),
    hot: () => request('/shops/list/hot'),
    search: (keyword: string) => request(`/shops/search?keyword=${keyword}`)
  },
  dishes: {
    list: (params?: { shopId?: number; page?: number; size?: number }) => {
      const query = new URLSearchParams(params as Record<string, string>).toString();
      return request(`/dishes?${query}`);
    },
    get: (id: number) => request(`/dishes/${id}`),
    create: (data: Record<string, any>) => 
      request('/dishes', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: number, data: Record<string, any>) => 
      request(`/dishes/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: number) => request(`/dishes/${id}`, { method: 'DELETE' })
  },
  reviews: {
    list: (params?: { shopId?: number; userId?: number; page?: number; size?: number }) => {
      const query = new URLSearchParams(params as Record<string, string>).toString();
      return request(`/reviews?${query}`);
    },
    get: (id: number) => request(`/reviews/${id}`),
    create: (data: Record<string, any>) => 
      request('/reviews', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: number, data: Record<string, any>) => 
      request(`/reviews/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: number) => request(`/reviews/${id}`, { method: 'DELETE' }),
    like: (id: number, userId: number) => 
      request(`/reviews/${id}/like`, { method: 'POST', body: JSON.stringify({ user_id: userId }) })
  },
  favorites: {
    list: (userId: number) => request(`/favorites/${userId}`),
    toggle: (data: { user_id: number; shop_id?: number; dish_id?: number }) => 
      request('/favorites', { method: 'POST', body: JSON.stringify(data) }),
    check: (userId: number, shopId?: number, dishId?: number) => {
      const query = new URLSearchParams({
        ...(shopId ? { shopId: shopId.toString() } : {}),
        ...(dishId ? { dishId: dishId.toString() } : {})
      }).toString();
      return request(`/favorites/${userId}/check?${query}`);
    }
  },
  upload: (filePath: string) => {
    return new Promise((resolve, reject) => {
      Taro.uploadFile({
        url: `${BASE_URL}/upload`,
        filePath,
        name: 'file',
        success: (res) => {
          try {
            resolve(JSON.parse(res.data));
          } catch (e) {
            reject(e);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
};