import {
  getTab,
  getCommodity,
  getCommodityDetails,
  getDetailsImg,
  getTips,
  getGomuch,
  getDatail
} from "@/api";
const state = {
  tabIndex: 0,
  tabList: [],
  CommodityList: [], //订单列表
  CommodityDetailsList: [], //商品详情
  DetailsImgsList: [], //商品详情img
  TipsList: [], //商品详情提示
  GomuchList: [], //提交订单

  detailData: [],
  createTimes: [],
  payTimes: [],
  allMoney: ""
};
const actions = {
  async getTab({ commit }, payload) {
    // console.log('payload...',payload)
    let data = await getTab(payload);
    // console.log('data...',data);
    commit("getTabList", data.result);
  },

  //订单列表
  async getCommodity({ commit }, payload) {
    // console.log('payload...getCommodity',payload)
    let data = await getCommodity(payload);
    // console.log('data...getCommodity',data);
    data.result.forEach(item => {
      var newDate = new Date();
      newDate.setTime(item.createTime);
      // console.log(newDate.toLocaleString())
      item.createTime = newDate.toLocaleString();
    });
    commit("getCommodityList", data.result);
  },

  //商品详情
  async getCommodityDetails({ commit }, payload) {
    // console.log("payload...orderdetail", payload);
    let data = await getCommodityDetails(payload);
    // console.log("data...orderdetail", data);
    let pic = getDetailsImg({
      data: data.result.pid,
      basePid: data.result.basePid,
      userIdentity: data.result.userIdentity
    });
    // console.log("picpic", pic);
    commit("getCommodityDetailsList", data.result);
  },

  //商品详情图片
  async getDetailsImg({ commit }, payload) {
    // console.log("payload...DetailsImg", payload);
    let data = await getDetailsImg(payload);
    // console.log("data...DetailsImg", data);
    commit("getDetailsImgsList", data.result);
  },

  //商品详情图片Tips
  async getTips({ commit }, payload) {
    // console.log("payload...getTips", payload);
    let data = await getTips(payload);
    // console.log("data...getTips", data);
    commit("getTipsList", data.result);
  },

  //提交订单
  async getGomuch({ commit }, payload) {
    // console.log("payload...getGomuch", payload);
    let data = await getGomuch(payload);
    // console.log("data...getGomuch", data);
    commit("getGomuchList", data.result);
  },

  //提交订单页 数据
  async getadd({ commit }, payload) {
    let data = getCommodityDetails(payload);
    // console.log("payload...getadd", data);
    // let data = await getGomuch(payload);
    // // console.log("data...getGomuch", data);
    // commit("getGomuchList", data.result);
  },


  async getDatail({commit},payload){
    let result=await getDatail(payload);
    console.log("resultssssssssssssssssssss",result.data.result)
    commit("updata",{data:result.data.result})
    commit("getLocalTime",{data:result.data.result})
    return result
}
};
const mutations = {
  updateTabIndex(state, payload) {
    state.tabIndex = payload;
  },
  getTabList(state, payload) {
    state.tabList = payload;
  },
  //订单列表
  getCommodityList(state, payload) {
    state.CommodityList = payload;
  },
  //商品详情
  getCommodityDetailsList(state, payload) {
    state.CommodityDetailsList = payload;
  },
  //商品详情图片
  getDetailsImgsList(state, payload) {
    state.DetailsImgsList = payload;
  },
  //商品详情图片Tips
  getTipsList(state, payload) {
    state.TipsList = payload;
  },
  //提交订单
  getGomuchList(state, payload) {
    state.GomuchList = payload;
  },

//
  updata(state,payload){
    state.detailData=payload.data
},
getLocalTime(state,payload){
    let createTime=payload.data.createTime
    let payTime=payload.data.payTime
    //支付金额
    let sumMoney=payload.data.totalAmount*payload.data.products.length
    +payload.data.totalDeliveryMoney+payload.data.totalTaxationAmount-payload.data.totalDiscountAmount
    state.allMoney=sumMoney

    state.payTimes=getTime(payTime)
    state.createTimes=getTime(createTime)
}
};


function getTime(x){
  var d = new Date(x);
  var Y = d.getFullYear();
  var M = d.getMonth()+1;
  if (M<=9) {
    M = '0'+M;
  }else{
    M = M;
  }
  var day = d.getDate();
  if (day<=9) {
    day = '0'+day
  }else{
    day = day;
  }
  var hour = d.getHours();
  if (hour<10) {
    hour = '0' + hour;
  }else{
    hour = hour ;
  }
  var min = d.getMinutes();
  if (min<10) {
    min = '0' + min;
  } else {
    min = min;
  }
  let timeArr=[Y+'-'+M+'-'+day, hour+':'+min]
  return timeArr
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
