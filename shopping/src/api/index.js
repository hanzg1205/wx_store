import request from '@/utils/request';

// 获取tab类型数据
export let getTab = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/category/query/1.0.0');
}

// 获取分类数据
export let getclassifyList = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/category/productList/1.0.0',params)
}