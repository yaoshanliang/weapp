import { request } from '../utils/request';
import { config } from '../utils/config';

// 获取projectId
export function getProjectId(param) {
  return request({
    url: config.URL_PRD + 'recycle/zone/getProjectId',
    data: param
  });
}

// 控制显示
export function getWhetherDisabled(param) {
  return request({
    url: config.URL_PRD + 'recycle/typeObject/show',
    data: param
  });
}

// 获取文章
export function getArticle(param) {
  return request({
    url: config.URL_PRD + 'recycle/config/list',
    data: param
  });
}

// 获取文章详情
export function getArticleDetail(param) {
  return request({
    url: config.URL_PRD + 'recycle/config/getById',
    data: param
  });
}