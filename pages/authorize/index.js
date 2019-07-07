import { login } from '../../services/user';
import { getTenantId } from '../../utils/config.js';
import { setValue, getValue } from '../../utils/common';

Page({

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  getUserInfo() {
    wx.getUserInfo({
      success: function (res) {
        let user = res;
        let userInfo = res.userInfo;
        wx.login({
          success: function (res) {
            console.log(res);
            if (res.code) {
              login({ code: res.code, ...user, tenantId: getTenantId() }).then((res) => {
                if (res.result === 0) {
                  setValue('userInfo', res.data);
                  setValue('userInfoTimestamp', Date.parse(new Date()) / 1000);
                  wx.reLaunch({ url: '/pages/home/index' });
                } else {
                  wx.showToast({
                    icon: 'none',
                    title: res.msg,
                  })
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
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