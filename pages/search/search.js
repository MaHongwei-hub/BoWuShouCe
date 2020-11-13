//search.js
//定义使用变量
var text = ''
const relic = wx.cloud.database().collection("relic")
let name = "";
Page({
  //初识数据
  data: {
    end: '',
    genre: '',
    year: '',
    museum: '',
    remarks: '',
  },
  //页面跳转
  location(e) {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  //获取传递参数值
  getName(e) {
    this.name = e.detail.value
  },
  //传出值
  input_p(e) {
    text = e.detail.value
  },
  //查询
  see() {
    var that = this
    relic.where({
      name: {
        $regex: '.*' + this.name + '.*',
        $options: '1'
      }
    }).get({
      success: res => {
        console.log('匹配', res)
        if (res.data.length == 0) {
          wx.showModal({
            title: '提示',
            content: '暂时没找到对应答案',
            showCancel: false,
            success: function (res) {}
          })
          return;
        } else {
          that.setData({
            obj: res.data
          })
        }
      }
    })
  },
  //收藏至笔记小本中
  collect(e) {
    wx.navigateTo({
      url: '../addNote/addNote',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('--------------1111')
  },
})