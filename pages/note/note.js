//note.js
var util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    initData(this);
  },

  /**
   * 编辑事件
   */
  edit(e) {
    var id = e.currentTarget.dataset.id;
    // 跳转 navigateTo
    wx.navigateTo({
      url: '../addNote/addNote?id=' + id
    })
  },

  /**
   * 添加事件
   */
  add() {
    wx.navigateTo({
      url: '../addNote/addNote',
    })
  },
  /**
   * 删除事件
   */
  removeNote(e) {
    const that = this;
    var val = null;
    wx.showModal({
      title: '提示',
      content: '是否要删除所有项',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '删除中',
            mask: true
          })
          // 删除功能
          //e.content=null;
          //e.time=null;
          e.content = '    ';
          delValue(e);
          wx.navigateBack();
        }
      }
    })
  }

})

/**
 * 处理初始化页面列表数据
 */
function initData(page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item, i) => {
      var t = new Date(Number(item.time));
      item.time = util.dateFormate(t);
    })
    page.setData({
      lists: arr
    })
  }
}

/**
 * 删除存储值
 */
function delValue(page) {
  var arr = wx.getStorageSync('txt');
  var data = [],
    flag = true;
  if (flag) {
    data.push(page);
  }
  wx.setStorageSync('txt', data);
}