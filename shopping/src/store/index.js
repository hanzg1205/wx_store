import vue from 'vue'
import vuex from 'vuex'
import index from './modules/index'
import classify from './modules/classify'
vue.use(vuex)

let store = new vuex.Store({
    modules:{
        index,
        classify
    }
})
export default store