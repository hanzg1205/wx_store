import request from "@/utils/request";

//优惠券接口
export let getConponList = params => {
  request.post(
    "http://test.api.jinaup.com/api/open/user/coupon/userCouponInfoList/1.0.0",
    params
  );
};
//获取用户收货地址列表
export let userAddress = code => {
  request.post(
    "https://upapi.jinaup.com/api/open/user/address/list/1.0.0",
    code
  );
};
// 修改用户收货地址
export let changeUserAddress = userData => {
  return request.post(
    'http://test.api.jinaup.com/api/open/user/address/editAddress/1.0.0',
    userData
  );
};
//添加用户收货地址
export let addNewAddress = params => {
  return request.post(
    'https://upapi.jinaup.com/api/open/user/address/addAddress/1.0.0',
    params
  );
};
//实名
export let Authidentity = params => {
  return request.post(
    'https://upapi.jinaup.com/api/open/user/auth/identityBase64/1.0.0',
    params
  );
};