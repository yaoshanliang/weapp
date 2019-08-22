import { request } from '../utils/request';
import { config } from '../utils/config';

// 登录
export function login(param) {
  return request({
    url: config.prefix + 'user/login',
    data: param
  });
}

// 用户信息
export function getUserInfo(param) {
  return request({
    url: config.prefix + 'user/info',
    data: param
  });
}

// 更新用户信息
export function updateUserInfo(param) {
  return request({
    url: config.prefix + 'user/info',
    method: 'POST',
    data: param
  });
}