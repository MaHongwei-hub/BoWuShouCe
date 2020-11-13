// pages/first/first.js
Page({
  //初始数据
  data: {
    isPopping: false, //是否已经弹出
    animationPlus: {}, //旋转动画
    animationPersonal: {},
    animationHome: {},
    animationMap: {},
    animationNotepad: {},
    animationSearch: {},
    "bnrUrl": [{
      "url": "../../images/2.jpg",
      "content": "云南省博物馆"
    }, {
      "url": "../../images/3.jpg",
      "content": "牛虎铜案"
    }, {
      "url": "../../images/4.jpg",
      "content": "云南省博物馆"
    }],
    "items": [{
        "id": "1",
        "imageUrl": "../../images/T1.jpg",
        "content": "云南省博物馆",
        "url": "https://blog.csdn.net/michael_f2008/article/details/86543134"

      },
      {
        "id": "2",
        "imageUrl": "../../images/tielu.jpg",
        "content": "云南铁路博物馆",
        "url": "https://blog.csdn.net/michael_f2008/article/details/86543134"
      },
      {
        "id": "3",
        "imageUrl": "../../images/T3.jpg",
        "content": "昆明市博物馆",
        "url": "https://blog.csdn.net/michael_f2008/article/details/86543134"
      },
      {
        "id": "4",
        "imageUrl": "../../images/T4.jpg",
        "content": "云南民族博物馆",
        "url": "https://blog.csdn.net/michael_f2008/article/details/86543134"
      }
    ],
  },

  //根据点击的组件跳转到不同的photo页面
  chooseMuseum: function (e) {
    var nowid = e.currentTarget.id
    wx.navigateTo({
      url: '../photo' + nowid + '/photo' + nowid
    })
  },

  //跳转至school页面
  chooseSchool: function () {
    wx.navigateTo({
      url: '/pages/school/school',
    })
  },

  //点击弹出
  plus: function () {
    if (this.data.isPopping) {
      //缩回动画
      popp.call(this);
      this.setData({
        isPopping: false
      })
    } else {
      //弹出动画
      takeback.call(this);
      this.setData({
        isPopping: true
      })
    }
  },

  //跳转至map界面
  map: function () {
    console.log("map")
    wx.navigateTo({
      url: '../map/map'
    })
  },

  //进入主页
  home: function () {
    console.log("home")
    wx.redirectTo({
      url: '../first/first',
    })
  },

  //进入个人中心页面
  personal: function () {
    console.log("personal")
    wx.navigateTo({
      url: '../index/index',
    })
  },

  //进入搜索页面
  search: function () {
    console.log("search")
    wx.switchTab({
      url: '../news2/news2',
    })
  },

  //获取任务日志
  notepad: function () {
    console.log("notepad")
    wx.switchTab({
      url: '../logs/logs',
    })
  },

  //跳转
  turn: function () {
    wx.navigateTo({
      url: '../photo1/photo1',
    })
  }
});