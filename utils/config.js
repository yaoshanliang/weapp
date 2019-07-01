// 当前环境
export const env = 'prod';

// 接口地址
const proxy = {
  'dev': {
    'cloudFile': 'https://ljfl.envcloud.com.cn',
    'management': 'https://ljfl.envcloud.com.cn',
    'recycle': 'http://192.168.1.13:8803',
  },
  'test': {
    'cloudFile': 'https://hs.ffboss.com',
    'management': 'https://hs.ffboss.com',
    'recycle': 'https://hs.ffboss.com',
  },
  'prod': {
    'cloudFile': 'http://hs.ffboss.com',
    'management': 'http://hs.ffboss.com',
    'recycle': 'http://hs.ffboss.com',
  }
}

export const config = {

  // 下载文件路径
  URL_DOWNLOAD: proxy[env].cloudFile + '/cloudFile/common/downloadFile?id=',

  // 上传文件路径
  URL_UPLOAD: proxy[env].cloudFile + '/cloudFile/common/uploadFile',

  // 云平台
  URL_MANAGEMENT: proxy[env].management,

  // 自助回收项目
  URL_RECYCLE: proxy[env].recycle + '/cloud/ljfl/prd/xcx/api/',

};

export function getTenantId() {
  switch (env) {
    case 'dev':
      return 'd621e677c6d24de8a83623516b5e8ca3';
      break;
    case 'test':
      return 'd621e677c6d24de8a83623516b5e8ca3';
      break;
    case 'prod':
      return '656ee26d59e849cab7d58cbc30fc7d0a';
      break;
  }
}