import vue from "vue";
import vuex from "vuex";
import index from "./modules/index";
import Mycoupon from "./modules/zh_Myconpon";
vue.use(vuex);

let store = new vuex.Store({
  modules: {
    index: index,
    Mycoupon: Mycoupon
  }
});
export default store;
