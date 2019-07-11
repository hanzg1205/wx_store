import { getTab , getDatas , getLists , getBanner} from "@/api";
const state={
    tabIndex: 0,
    tabList: [],
    //轮播图数据
    swiperList:[],
    //三张banner图
    leftThreePic:[], //左
    rightThreePic:[], //右
    //首页商品列表
    listShop:[],
    //首页商品banner
    downPic:[],
    //首页上拉加载数据
    getBottomData:[],
    //点击轮播图数据
    bannerList:[]
};
const actions={
    async getTab({commit},payload){
        console.log('payload...',payload)
        let data = await getTab(payload);
        console.log('data...',data);
        commit('getTabList', data.result)
    },

    async getData({commit},payload){
        let data = await getDatas(payload)
        console.log('精选好物',data)
        commit('getData',data.result)
    },

    async getList({commit},payload){
        let data = await getLists(payload)
        commit('getBottomData',data.result)
    },

    async bannerData({commit},payload){
        let data = await getBanner(payload)
        console.log('1111',data)
        commit('getBanners',data.result)
       
    }
};
const mutations={
    getBanners(state,payload){
        state.bannerList=payload
    },
    updateTabIndex(state,payload){
        state.tabIndex = payload
    },
    getTabList(state, payload){
        state.tabList = payload;
    },
    getData(state,payload){
        console.log('payload...',payload)
        state.swiperList = payload[0].items
        state.leftThreePic.push(payload[1].items[0])
        state.rightThreePic.push(payload[1].items[1],payload[1].items[2]),

        payload.forEach((item,index)=>{
            if(index != 0 && index != 1 && index !=2 && index % 2 == 1){
                state.downPic.push(item)
            }
            if(index != 0 && index != 1 && index !=2 && index % 2 == 0){
                state.listShop.push(item)
            }
        })
        state.downPic.forEach((item,index)=>{
            return item.children = state.listShop[index]
        })
    },
    getBottomData(state,payload){
       state.getBottomData=[...state.getBottomData,...payload]
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}