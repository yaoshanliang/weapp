const app = getApp();

Page({

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  getUserInfo() {
    let that = this;
    app.userInfoReadyCallback = userInfo => {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }
    app.getUserInfo();
  }
})