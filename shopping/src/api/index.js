import request from '@/utils/request';

// 获取tab类型数据
export let getTab = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/category/sub/1',params);
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

