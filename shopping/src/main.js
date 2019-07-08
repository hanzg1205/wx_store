import Vue from "vue";
//引入store对象
// import store from "./store/store";

import App from "./App";

// console.log(store)
//在Vue原型上定义$store的属性方便每个实例都可以用

Vue.config.productionTip = false;

App.mpType = "app";
// Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();
