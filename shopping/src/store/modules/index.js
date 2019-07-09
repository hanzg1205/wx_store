import { getTab , getDatas} from "@/api";
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
    listData:[]

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
    }
};
const mutations={
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
        payload.forEach((item)=>{
            if(item.type=="sixProduct"){
                state.listShop.push(item.items)
            }
            if(item.type=="adOne"){
                state.downPic.push(item.pictUrl)
            }
        })
        console.log('liatshop',state.listShop)
        state.listShop.forEach((item)=>{
            console.log('111',item)
            state.downPic.forEach((items)=>{
                state.listData.push({children:items,data:item})
                
            })
        })  
        console.log('12345678',state.listData)
    }
    [
        {
            children:'http',
            data:[{},{},{},{}]
        }
    ]
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}