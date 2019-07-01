
import { request } from '../utils/request.js';
import { config } from '../utils/config.js';

// 登录
export function login(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/login',
    data
  });
}

// 绑定手机号
export function bindPhone(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/bindPhone',
    data
  });
}

// 反馈建议
export function feedback(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/feedback',
    data
  });
}

// 获取钱包余额
export function getResidentInfo(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/getResidentInfo',
    data
  });
}

// 零钱包
export function getWallet(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/getWallet',
    data
  });
}

// 发送短信
export function sendVerfySms(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/sendVerfySms',
    data
  });
}

// 提现
export function withdraw(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/withdraw',
    data
  });
}

// 登录设备
export function loginDevice(data) {
  return request({
    url: config.URL_RECYCLE + 'user/resident/savePhone',
    data
  });
}