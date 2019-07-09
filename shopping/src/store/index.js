import vue from "vue";
import vuex from "vuex";
import index from "./modules/index";
import Mycoupon from "./modules/zh_Myconpon";
import Address from "./modules/zh_Address";
import newadd from "./modules/newAdd";
import order from './modules/order'
vue.use(vuex);

let store = new vuex.Store({
  modules: {
    index,
    Mycoupon,
    Address,
    newadd,
    order
  }
});
export default store;
