import { getTab, getclassifyList } from "@/api";
const state={
    tabIndex: 0, // tab当前按钮下标
    tabList: [],  // tab类型
    tabItem: [],  // 当前类型
    classifyList: [] // 当前类型下的数据列表
};
const actions={
    async getTab({commit},payload){
        // console.log('payload...',payload)
        let data = await getTab(payload);
        console.log('data...',data);
        commit('getTabList', data.result)
    },
    async getclassifyList({commit}, payload){
        let data = await getclassifyList(payload);
        console.log('getclassifyList...',data);
        commit('getClassify',data.result)
    }
};
const mutations={
    updateTabIndex(state,payload){
        console.log('payload0000000',payload)
        state.tabIndex = payload.index;
        state.tabItem = payload.item;
    },
    getTabList(state, payload){
        state.tabList = payload;     
    },
    getClassify(state, payload){
        state.classifyList = payload;
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}