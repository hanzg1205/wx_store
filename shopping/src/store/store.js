//引入Vue
import Vue from "vue";
import store from "./store";
//引入Vuex
import Vuex from "vuex";

//引入Vuex仓库里面的 actions（异步函数）
import  actions  from "./actions";

//引入Vuex仓库里面的 mutations（同步函数）
import  mutations  from "./mutations";

//引入Vuex 仓库里面的 getters（对象公开）
import  getters  from "./getters";

//最后引入Vuex 仓库里面的 state (状态对象)
import  state  from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
