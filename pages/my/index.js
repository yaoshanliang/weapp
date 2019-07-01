import {
  config
} from '../../utils/config';
import {
  getUserId,
  setValue
} from '../../utils/common';
Page({
  data: {},
  onLoad() {
    if (getUserId() == "") {
      setValue('authorizeFromUrl', '/pages/my/index'); // 当前路径
      setValue('authorizeToUrl', '/pages/my/index'); // 授权成功后的跳转路径
      wx.redirectTo({
        url: '/pages/authorize/index'
      });
      return;
    } else {

    }
  },
});