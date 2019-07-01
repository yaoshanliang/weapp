
export function getStorage(key) {
  return wx.getStorageSync(key) || '';
}

export function setStorage(key, value) {
  return wx.setStorageSync(key, value);
}

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
export function formatTime(timeStamp) {
  var date = new Date(timeStamp);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' 
  + [hour, minute].map(formatNumber).join(':');
}

export function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}