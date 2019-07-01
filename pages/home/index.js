import { config } from '../../utils/config';
import { getUserId, setValue, getValue } from '../../utils/common';
import { getProjectId, getWhetherDisabled, getArticle } from '../../services/index';

Page({
  data: {
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
      }, {
        "headUrl": "/resources/images/head-3.jpeg",
        "title": "原来旧衣服也能卖钱，以后旧衣服有去处了。",
        "username": "喧城老友",
        "category": "旧衣服",
        "date": " 2019-04-29",
      }, {
        "headUrl": "/resources/images/head-4.jpeg",
        "title": "上门回收真的方便。",
        "username": "青山隐隐",
        "category": "废报纸",
        "date": " 2019-04-29",
      }, {
        "headUrl": "/resources/images/head-5.jpeg",
        "title": "下单后回收员很快就联系了，约好时间也不用在家里等，很好！",
        "username": "Tsundere",
        "category": " 废纸板",
        "date": " 2019-04-28",
      },
    ],
    tipHidden: true,
    iconDisabled: {}
  },
  onLoad(options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',      
      backgroundColor: '#47D196',
    })

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
    if (getUserId() == "") {
      setValue('authorizeFromUrl', '/pages/home/index');// 当前路径
      setValue('authorizeToUrl', event.target.dataset.path);// 授权成功后的跳转路径
      wx.navigateTo({ url: '/pages/authorize/index' })
    } else {
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
  iknow: function () {
    setValue('tipHidden', 1);
    this.setData({
      tipHidden: true
    })
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
