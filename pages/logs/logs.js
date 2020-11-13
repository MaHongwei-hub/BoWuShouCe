//logs.js
const util = require('../../utils/util.js')

Page({
  //数据初始
  data: {
    logs: []
  },
  //加载
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})