import request from "@/utils/request";
export let getConponList = params => {
  request.post("http://test.api.jinaup.com/api/open/user/coupon/userCouponInfoList/1.0.0", params);
};
