import vue from 'vue'
import vuex from 'vuex'
import index from './modules/index'
import order from './modules/order'
vue.use(vuex)

let store = new vuex.Store({
    modules:{
        index,
        order
    }
})
export default store