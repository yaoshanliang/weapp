// 当前环境
export const env = 'dev';

// 接口地址
const proxy = {
  dev: 'http://laravel.dev.com',// 开发环境
  test: 'https://laravel.iat.net.cn',// 测试环境
  prod: 'https://laravel.iat.net.cn'// 正式环境
}

export const config = {

  // 前缀
  prefix: proxy[env] + '/weapp/',

};