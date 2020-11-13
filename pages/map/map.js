// map.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      latitude: 24.824825,
      longtitude: 102.850969,
      name: "我的位置",
      desc: "我现在的位置"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let plugin = requirePlugin('routePlan');
    let key = 'UIXBZ-HEUL6-3DASQ-MKX35-SOOYT-R7FKF'; //使用在腾讯位置服务申请的key
    let referer = '快乐地图'; //调用插件的app的名称
    let endPoint = JSON.stringify({ //终点
      'name': '云南省博物馆',
      'latitude': 24.949454,
      'longitude': 102.753515
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})