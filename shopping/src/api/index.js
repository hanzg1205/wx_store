import request from '@/utils/request';

// 获取tab类型数据
export let getTab = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/category/query/1.0.0');
}

// 获取分类数据
export let getclassifyList = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/category/productList/1.0.0',params)
}
export let getDatas =() => {
    return request.post('https://upapi.jinaup.com/api/open/page/home/list/1.0.0');
}
export let getLists = params =>{
    return request.post('https://upapi.jinaup.com//api/open/page/home/products/1.0.0',params);
}
export let getBanner = params =>{
    return request.post('https://upapi.jinaup.com/api/open/sepcial/query/1.0.0',params);
}
//我的订单(全部商品)
export let getCommodity = params => {
    return request.post('https://upapi.jinaup.com/api/open/order/query/1.0.0',params);
}

//商品详情
export let getCommodityDetails = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/info/1.0.0',params);
}

//商品详情图片
export let getDetailsImg = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/detailPicture/1.0.0',params);
}

//商品详情提示
export let getTips = params => {
    return request.post('https://upapi.jinaup.com/api/open/shipping/templates/info/1.0.0',params);
}

//支付
export let getGomuch = params => {
    return request.post('https://upapi.jinaup.com/api/open/order/prepare/1.0.0',params);
}

// 获取订单详情
export let getDatail = params => {
    return request.post('https://upapi.jinaup.com/api/open/order/query/detail', params)
  }
// 获取搜索列表
export let getSearchList = params => {
    return request.post('https://upapi.jinaup.com/api/open/search/query/1.0.0',params)
}
