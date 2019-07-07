//app.js
App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  },
  getUserInfo() {
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        login({
          authCode: 1,
        }).then((res) => {
          if (res.result === 0) {
            setValue('userInfo', res.data);
            setValue('userInfoTimestamp', Date.parse(new Date()) / 1000);
            if ((authorizeToUrl == '/pages/home/index') || (authorizeToUrl == '/pages/box/index') || (authorizeToUrl == '/pages/my/index')) {
              wx.reLaunch({ url: authorizeToUrl });
            } else {
              wx.redirectTo({ url: authorizeToUrl });
            }
          } else {
            wx.showToast({
              icon: 'fail',
              title: '登录失败',
              duration: 3000,
              success: () => {
                wx.reLaunch({ url: '/pages/home/index' });
              }
            })
          }
        });
      },
      fail: function (res) {
        wx.showToast({
          icon: 'fail',
          title: '授权失败'
        })
      }
    })
  }
})