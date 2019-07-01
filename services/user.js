import { request } from '../utils/request';
import { config } from '../utils/config';

// 登录
export function login(param) {
  return request({
    url: config.URL_PRD + 'user/resident/login',
    data: param
  });
}

// 获取用户信息
export function getUserInfo(param) {
  return request({
    url: config.URL_PRD + 'resident/getResident.smvc',
    data: param
  });
}

// 根据支付宝id获取用户信息
export function getUserInfoProgramUserId(param) {
  return request({
    url: config.URL_PRD + 'getResidentInfoByAlipayUserId.smvc',
    data: param
  });
}
// 手机号注册居民
export function registeUser(param) {
  return request({
    url: config.URL_PRD + 'phoneRegisterResident.smvc',
    data: param
  });
}
// 获取验证码
export function getPhoneValid(param) {
  return request({
    url: config.URL_PRD + 'phoneValid.smvc',
    data: param
  });
}

// 获取验证码
export function getCheckCode(param) {
  return request({
    url: config.URL_PRD + 'verificationcode/sendVarificationCode.smvc',
    data: param
  });
}
// 获取验证码后确定
export function verifyCodeValidate(param) {
  return request({
    url: config.URL_PRD + 'verificationcode/verificationCodeCheck.smvc',
    data: param
  });
}

// 修改绑定的手机号
export function updatePhone(param) {
  return request({
    url: config.URL_PRD + 'resident/changePhone.smvc',
    data: param
  });
}