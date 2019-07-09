import request from '@/utils/request';

// 获取tab类型数据
export let getTab = params => {
    return request.post('https://upapi.jinaup.com/api/open/product/category/sub/1',params);
}
export let getDatas =() => {
    return request.post('https://upapi.jinaup.com/api/open/page/home/list/1.0.0');
}