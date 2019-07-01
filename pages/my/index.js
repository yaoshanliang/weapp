// pages/my.js
import { config } from '../../utils/config.js';
import { getUserInfo } from '../../utils/util.js';
import { getResidentInfo } from '../../services/user.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '122',
    pic: '',
    balanceAmount: 0
  },
  //事件处理函数
  onJump: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.page
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let t = this;
    app.userInfoReadyCallback = userInfo => {
      getResidentInfo().then((res) => {
        if (res.result == 0) {
          t.setData({
            balanceAmount: res.data.balanceAmount
          })
        }

      });
      t.setData({
        nickName: getUserInfo('nickName'),
        pic: getUserInfo('avatarUrl'),
      })
    }
    app.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})