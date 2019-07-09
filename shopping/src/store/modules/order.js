import { getTab,getCommodity,getCommodityDetails,getDetailsImg,getTips,getGomuch } from "@/api";
const state={
    tabIndex: 0,
    tabList: [],
    CommodityList:[],//订单列表
    CommodityDetailsList:[],//商品详情
    DetailsImgsList:[],//商品详情img
    TipsList:[]//商品详情提示
};
const actions={
    async getTab({commit},payload){
        // console.log('payload...',payload)
        let data = await getTab(payload);
        // console.log('data...',data);
        commit('getTabList', data.result)
    },

    //订单列表
    async getCommodity({commit},payload){
        // console.log('payload...getCommodity',payload)
        let data = await getCommodity(payload);
        // console.log('data...getCommodity',data);
        data.result.forEach((item)=>{
            var newDate = new Date();
        newDate.setTime(item.createTime);
        // console.log(newDate.toLocaleString())
        item.createTime=newDate.toLocaleString()
        })
        commit('getCommodityList', data.result)
    },

    //商品详情
    async getCommodityDetails({commit},payload){
        console.log('payload...orderdetail',payload)
        let data = await getCommodityDetails(payload);
        console.log('data...orderdetail',data);
        commit('getCommodityDetailsList', data.result)
    },

    //商品详情图片
    async getDetailsImg({commit},payload){
        console.log('payload...DetailsImg',payload)
        let data = await getDetailsImg(payload);
        console.log('data...DetailsImg',data);
        commit('getDetailsImgsList', data.result)
    },

    //商品详情图片Tips
    async getTips({commit},payload){
        console.log('payload...getTips',payload)
        let data = await getTips(payload);
        console.log('data...getTips',data);
        commit('getTipsList', data.result)
    },

    //提交订单
    async getGomuch({commit},payload){
        console.log('payload...getTips',payload)
        let data = await getTips(payload);
        console.log('data...getTips',data);
        commit('getTipsList', data.result)
    }
};
const mutations={
    updateTabIndex(state,payload){
        state.tabIndex = payload
    },
    getTabList(state, payload){
        state.tabList = payload;
    },
    //订单列表
    getCommodityList(state, payload){
        state.CommodityList = payload;
    },
    //商品详情
    getCommodityDetailsList(state, payload){
        state.CommodityDetailsList = payload;
    },
    //商品详情图片
    getDetailsImgsList(state, payload){
        state.DetailsImgsList = payload;
    },
    //商品详情图片
    getTipsList(state, payload){
        state.TipsList = payload;
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}