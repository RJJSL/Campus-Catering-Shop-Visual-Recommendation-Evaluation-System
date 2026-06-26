export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/shops/index',
    'pages/profile/index',
    'pages/login/index',
    'pages/shop-detail/index',
    'pages/review-add/index',
    'pages/shop-upload/index',
    'pages/dish-upload/index',
    'pages/dish-detail/index',
    'pages/admin/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FF6B35',
    navigationBarTitleText: '校园美食',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#86909C',
    selectedColor: '#FF6B35',
    backgroundColor: '#FFFFFF',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/shops/index',
        text: '店铺'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的'
      }
    ]
  }
})