import { env } from '../utils/config';

// 获取用户信息
export function getUserInfo(key = '') {
  const userInfo = wx.getStorageSync('userInfo');
  if (userInfo) {
    if (key) {
      return userInfo[key];
    } else {
      return userInfo;
    }
  } else {
    return ''
  }
}

// 获取token
export function getToken() {
  let res = wx.getStorageSync(env + '_userInfo');

  if (res.data) {
    return res.data.token;
  }
  return undefined;
}

// 获取userId
export function getUserId() {
  let timestampStorage = wx.getStorageSync( env + '_userInfoTimestamp');
  let timestamp = 0;
  if (timestampStorage.APDataStorage) {
    timestamp = timestampStorage.APDataStorage;
  }
  if (timestampStorage.data) {
    timestamp = timestampStorage.data;
  }
  if (!timestamp) {
    return '';
  } else {
    let diff = ((Date.parse(new Date()) / 1000) - timestamp) / (60 * 60);
    if (diff > 10) {
      console.log(diff, ' token过期');
      return '';
    }
  }

  let res = wx.getStorageSync(env + '_userInfo');
  if (res.data) {
    return res.data.id;
  }
  return '';
}

// 设置key、value
export function setValue(key, value) {
  wx.setStorageSync(
    env + '_' + key, value
  );
}

// 根据key获取value
export function getValue(key) {
  let res = wx.getStorageSync(env + '_' + key);
  if (res.data || res.data == 0) {
    return res.data;
  }
  return '';
}
