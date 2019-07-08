import Vue from 'vue'
import App from './App'
import store from '@/store'
Vue.prototype.$store=store
Vue.config.productionTip = false
App.mpType = 'app'

// console.log(store)
//在Vue原型上定义$store的属性方便每个实例都可以用

Vue.config.productionTip = false;

App.mpType = "app";
// Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();
