// 当前环境
export const env = 'test';

// 接口地址
const proxy = {
  'dev': {
    'cloudFile': 'http://120.26.218.105:12020',
    'management': 'http://222.92.212.126:18089',
    'prd': 'http://192.168.1.229:20116',
  },
  'test': {
    'cloudFile': 'https://zt1.ffboss.com',
    'management': 'https://zt1.ffboss.com',
    'prd': 'https://zt1.ffboss.com',
  },
  'prod': {
    'cloudFile': 'https://z.uufen.cn',
    'management': 'https://z.uufen.cn',
    'prd': 'https://z.uufen.cn',
    'prdMall': 'https://zt5.ffboss.com',
  }
}

export const config = {

  // 下载文件路径
  URL_DOWNLOAD: proxy[env].cloudFile + '/cloudFile/common/downloadFile?id=',

  // 上传文件路径 
  URL_UPLOAD: proxy[env].cloudFile + '/cloudFile/common/uploadFile',

  // 云平台
  URL_MANAGEMENT: proxy[env].management,

  // 产品
  URL_PRD: proxy[env].prd + '/cloud/zszy/prd/zfbxcx/api/',

  // 枚举
  URL_ENUM: proxy[env].prd + '/cloud/ccx/api/',

  // 商城
  URL_MALL: proxy[env].prdMall + '/cloud/zszy/mall/hd/api/',

  // 枚举
  URL_MALLENUM: proxy[env].prdMall + '/cloud/ccx/api/',

};

export function getTenantId() {
  switch (env) {
    case 'dev':
      return 'd621e677c6d24de8a83623516b5e8ca3';
      break;
    case 'test':
      return '2b0fe8671be24893a1c5ea1e97af5094';
      break;
    case 'prod':
      return '0340b7347b0e4244b4e1c704dec63a3b';
      break;
  }
}