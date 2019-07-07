import { config, getTenantId } from '../../utils/config';
import { getUserId, setValue, getValue } from '../../utils/common';
import { getProjectId, getWhetherDisabled, getArticle } from '../../services/index';
import { login } from '../../services/user';

Page({
  data: {
    authorizeShow: false,
    bannerList: [],
    commentList: [
      {
        "headUrl": "/resources/images/head-1.jpeg",
        "title": "回收员上门很迅速，操作熟练，好评！",
        "username": "柠檬不萌",
        "category": "废纸板",
        "date": "2019-04-30",
      }, {
        "headUrl": "/resources/images/head-2.jpeg",
        "title": "不用自己再搬下去啦，很方便。",
        "username": "忆梦小姐",
        "category": "电视机",
        "date": " 2019-04-30",
      }
    ],
    iconDisabled: {}
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
                login({ code: res.code, ...user, tenantId: getTenantId() }).then((res) => {
                  if (res.result === 0) {
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
                console.log('登录失败！' + res.errMsg)
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


    var t = this;
    let projectId = '';
    let bannerList = [];
    let articleList = [];
    let iconDisabled = {};

    wx.getLocation({
      type: 1,
      success(res) {
        console.log(res);
        getProjectId({ longitudeDone: res.longitude, latitudeDone: res.latitude }).then((res) => {
          projectId = res.data.projectId;
          setValue("projectId", projectId);
          getArticle({ param: projectId, activityType: 1 }).then((res) => {
            bannerList = res.data;
            bannerList.map((item) => {
              item.pictureUrl = config.URL_DOWNLOAD + item.imageId
            });
            t.setData({
              bannerList,
            });
          });
          getArticle({ param: projectId, activityType: 2 }).then((res) => {
            articleList = res.data;
            articleList.map((item) => {
              item.pictureUrl = config.URL_DOWNLOAD + item.imageId
            })
            t.setData({
              articleList,
            });
          });
          getWhetherDisabled({ projectId }).then((res) => {
            iconDisabled = res.data;
            t.setData({
              iconDisabled,
            });
          });
        })
      },
      fail: (res) => {
        wx.showToast({
          icon: 'fail',
          title: '授权失败'
        })
      }
    })
  },

  goToArticle: function (event) {
    console.log(event.target.dataset.canJump);
    if (event.target.dataset.canJump) {
      wx.navigateTo({
        url: '/pages/webview/index?url=' + 'http://zszy.ffboss.com/h5/web/#/ljfl/ng/pageNewsDetail?id=' + event.target.dataset.id
      });
    }
  },
  goToPath: function (event) {
    if (this.data.iconDisabled[event.target.dataset.index]) {
      wx.navigateTo({
        url: event.target.dataset.path
      });
    } else {
      wx.showToast({
        type: 'fail',
        content: '该服务暂未开通'
      })
    }
  },
  goToRecycle: function () {
    if (this.data.housingEstateId) {
      wx.navigateTo({
        url: '/pages/recycle/index'
      });
    } else {
      wx.navigateTo({
        url: '/pages/address/add'
      });
    }
  },
  goToAddress: function () {
    setValue('addressFrom', '/pages/home/index');
    if (this.data.housingEstateId) {
      wx.navigateTo({
        url: '/pages/address/list?from=/pages/home/index'
      });
    } else {
      wx.navigateTo({
        url: '/pages/address/add'
      });
    }
  },

  goToWebView: function (event) {
    if (event.target.dataset.url) {
      wx.navigateTo({
        url: '/pages/webview/index?url=' + event.target.dataset.url
      });
    }
  },
  alertInfo: function () {
    wx.alert({
      title: '',
      content: '请至附近智能回收箱投递回收',
      buttonText: '我知道了',
      success: () => {
      },
    });
  }
});
