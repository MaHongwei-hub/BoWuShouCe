//index.js
//获取应用实例
const app = getApp()
Page({

  //初始数据
  data: {
    menuitems: [{
        text: '个人资料',
        url: '/pages/introduce/introduce?title',
        icon: '/images/user1.png',
        tips: '',
        arrows: '/images/arrows.png'
      },
      {
        text: ' 记事小本',
        url: '/pages/note/note?title',
        icon: '/images/user2.png',
        tips: '',
        arrows: '/images/arrows.png'
      },
      {
        text: '图片小库',
        url: '/pages/photos/photos?title',
        icon: '/images/user3.png',
        tips: '',
        arrows: '/images/arrows.png'
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  //获取用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})