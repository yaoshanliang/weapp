import { getUserInfo } from '../../services/user';

Page({
  data: {
    userInfo: {}
  },
  onLoad() {
    getUserInfo().then((res) => {
      this.setData({
        userInfo: res.data
      })
    })
  },
});