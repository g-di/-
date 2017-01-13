Page({
  data: {
    art: {
    },
  },
  onReady () {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  }
})