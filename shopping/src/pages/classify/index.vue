<template>
    <div class="classify">

        <TabNav :handleTabFn="handleTabFn"/>

        <ul class="nav-list">
            <li v-for="(item,index) in tabItem.childs" :key="index">
                <image :src="item.imgUrl"></image>
                <span>{{item.cname}}</span>
            </li>         
        </ul>
        <ClassifyList :classifyList="classifyList" :handleTabFn="handleTabFn"/>
    </div>
</template>

<script>
import TabNav from "@/components/tabNav.vue";
import ClassifyList from "@/components/classifyList.vue";
import { mapActions, mapState } from "vuex";
export default {
    data(){
        return {
            
        }
    },
    components: {
        TabNav,
        ClassifyList
    },
    methods: {
        ...mapActions({
            getclassifyList: 'classify/getclassifyList'
        }),
        handleTabFn(){
            this.getclassifyList({
                pageIndex: 1,
                cid: this.tabItem.cid,
                sortType: this.sortType
            });
        }
    },
    created(){
        
        
    },
    computed: {
        ...mapState({
            tabItem: state => state.classify.tabItem,
            classifyList: state => state.classify.classifyList,
            sortType: state => state.classify.sortType
        })
    },
    onShow(){
        this.handleTabFn()
    },
    mouted(){
        console.log('classifyList....',classifyList)
    }
    
}
</script>

<style lang="scss" scoped>
    .classify{
        background: #f7f7f7;
    }
    .nav-list{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        background:#fff;
        margin-bottom: 10rpx;
        li{
            width:25%;
            text-align: center;
            padding:20rpx;
            box-sizing:border-box;
            image{
                width: 100rpx;
                height:100rpx;
            }
            span{
                font-size:24rpx;
                display:block;
                padding:12rpx 0;
                box-sizing:border-box;
            }
        }
    }
</style>

