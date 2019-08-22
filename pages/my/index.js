import { getUserInfo } from '../../services/user';

Page({
  data: {
    userInfo: {}
  },
  onShow() {
    getUserInfo().then((res) => {
      this.setData({
        userInfo: res.data
      })
    })
  },
});