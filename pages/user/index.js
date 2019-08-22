import { getUserInfo, updateUserInfo } from '../../services/user';

Page({
  data: {
    item: {
      nickname: '',
    }
  },

  onShow() {
    getUserInfo().then((res) => {
      let item = {
        id: res.data.id,
        nickname: res.data.nickname
      }
      this.setData({
        item
      })
    })
  },

  inputChange(event) {
    console.log(event);
    let item = this.data.item;
    let field = event.target.dataset.field;
    item[field] = event.detail;
    this.setData({
      item
    })
  },
  goToSave() {
    let item = this.data.item;
    if (item.id) {
      updateUserInfo({
        ...item
      }).then((res) => {
        if (res.code == 0) {
          wx.showToast({
            title: res.message,
            success: function() {
              setTimeout(function () {
                wx.navigateBack({});
              }, 1000)
            }
          })
        } else {
          wx.showToast({
            icon: 'none',
            title: res.message,
          })
        }
      });
    } 
  },
})