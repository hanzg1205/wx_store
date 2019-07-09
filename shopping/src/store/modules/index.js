import { getTab } from "@/api";
const state={
    tabIndex: 0,
    tabList: []
};
const actions={
    async getTab({commit},payload){
        console.log('payload...',payload)
        let data = await getTab(payload);
        console.log('data...',data);
        commit('getTabList', data.result)
    }
};
const mutations={
    updateTabIndex(state,payload){
        state.tabIndex = payload
    },
    getTabList(state, payload){
        state.tabList = payload;
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}