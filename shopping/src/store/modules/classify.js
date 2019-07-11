import { getTab, getclassifyList } from "@/api";
const state={
    tabIndex: 0, // tab当前按钮下标
    tabList: [],  // tab类型
    tabItem: [],  // 当前类型
    classifyList: [], // 当前类型下的数据列表
    sortType: 1, // 1.综合 2.最新 3.升序 4.降序
    cid: '', // 类型下标
};
const actions={
    // 获取tab类型数据
    async getTab({commit},payload){
        let data = await getTab(payload);
        commit('getTabList', data.result)
    },
    // 获取类型下列表
    async getclassifyList({commit}, payload){
        let data = await getclassifyList(payload);
        commit('getClassify',data.result)
    }
};
const mutations={
    // 更改tab下标
    updateTabIndex(state,payload){
        state.tabIndex = payload.index 
        state.tabItem = payload.item 
    },
    updateCid(state,payload){
        state.cid = payload
    },
    getTabList(state, payload){
        state.tabList = payload;     
    },
    getClassify(state, payload){
        state.classifyList = payload;
    },
    // 更改sortType 排序
    updateSortType(state, payload){
        state.sortType = payload;
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}