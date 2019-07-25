import { request } from '../utils/request';
import { config } from '../utils/config';

// 获取projectId
export function getProjectId(param) {
  return request({
    url: config.prefix + 'recycle/zone/getProjectId',
    data: param
  });
}

// 控制显示
export function getWhetherDisabled(param) {
  return request({
    url: config.prefix + 'recycle/typeObject/show',
    data: param
  });
}

// 获取文章
export function getArticle(param) {
  return request({
    url: config.prefix + 'recycle/config/list',
    data: param
  });
}

// 获取文章详情
export function getArticleDetail(param) {
  return request({
    url: config.prefix + 'recycle/config/getById',
    data: param
  });
}