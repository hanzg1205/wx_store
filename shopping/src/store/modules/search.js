import { getSearchList } from "@/api";
const state = {
    searchList: [], // 搜索列表
    queryType: 0, // 0. 综合 1.最新  2.价格 
    querySort: 'asc' // asc 升序  desc 降序
}

const actions = {
    async getSearchList({commit}, payload){
        let data = await getSearchList(payload);
        console.log("search...",data);
        commit('getSearch', data.result)
    }
}

const mutations = {
    getSearch(state, payload){
        state.searchList = payload;
    },
    updateQueryType(state, payload){
        state.queryType = payload;
    },
    updateQuerySort(state, payload){
        state.querySort = payload;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}