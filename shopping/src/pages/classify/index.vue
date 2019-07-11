<template>
    <div class="classify">

        <TabNav :handleTabFn="handleTabFn"/>

        <ul class="nav-list">
            <li v-for="(item,index) in tabItem.childs" :key="index" @click="classifyTab(item)">
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
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    data(){
        return {
            
        }
    },
    components: {
        TabNav,
        ClassifyList
    },
    computed: {
        ...mapState({
            tabItem: state => state.classify.tabItem,
            classifyList: state => state.classify.classifyList,
            sortType: state => state.classify.sortType,
            cid: state => state.classify.cid
        })
    },
    methods: {
        ...mapActions({
            getclassifyList: 'classify/getclassifyList'
        }),
        ...mapMutations({
            updateCid: 'classify/updateCid'
        }),
        handleTabFn(){
            this.getclassifyList({
                pageIndex: 1,
                cid: this.cid,
                sortType: this.sortType
            });
        },
        classifyTab(item){
            this.updateCid(item.cid);
            this.handleTabFn();
        }
    },
    onShow(){
        this.handleTabFn()
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

