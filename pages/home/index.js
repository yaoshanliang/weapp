import { config } from '../../utils/config';
import { getUserId, setValue, getValue } from '../../utils/common';
import { login } from '../../services/user';

Page({
  data: {

  },
  onLoad(options) {
    var t = this;
    if (getUserId() == '') {
      wx.getUserInfo({
        success: function (res) {
          let user = res;
          let userInfo = res.userInfo;
          wx.login({
            success: function (res) {
              console.log(res);
              if (res.code) {
                login({ code: res.code, ...userInfo}).then((res) => {
                  if (res.code === 0) {
                    setValue('userInfo', res.data);
                    setValue('userInfoTimestamp', Date.parse(new Date()) / 1000);
                  } else {
                    wx.showToast({
                      icon: 'none',
                      title: res.msg
                    })
                  }
                })
              } else {
                wx.showToast({
                  icon: 'none',
                  title: res.errMsg,
                })
              }
            }
          });
        },
        fail: function (res) {
          wx.redirectTo({
            url: '/pages/authorize/index',
          })
        }
      })
    }
  },
});
