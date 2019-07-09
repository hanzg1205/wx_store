<template>
    <scroll-view class="scroll-tab" scroll-x  enable-flex="true">
        <view  class="scroll-view-item"  @click="goHome">今日推荐</view>
        <view 
            :class="['scroll-view-item',index===tabIndex?'active':'']" 
            v-for="(item,index) in tabList"
            :key="index"
            @click="handleTab(item,index)"
        >{{item.cname}}</view>
        
    </scroll-view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data(){
        return {
            
        }       
    },
    props: {
        handleTabFn: {
            type: Function,
            default: ()=>{}
        }
    },
    computed: {
        ...mapState({
            tabIndex: state => state.classify.tabIndex,
            tabList: state => state.classify.tabList           
        })
    },
    methods: {
        ...mapMutations({
            updateTabIndex: 'classify/updateTabIndex'
        }),
        goHome(){
            wx.reLaunch({url: '/pages/index/main'})
        },
        handleTab(item,index){           
            this.updateTabIndex({item,index});
            console.log(this)
            this.handleTabFn();
        }
    }
}
</script>

<style lang="scss" scoped>
    .scroll-tab{
        width:100%;
        // display:flex;
        white-space:nowrap;
        height:100rpx;
        background:#fff;
        .scroll-view-item{
            font-size:32rpx;
            display:inline-block;
            height:100rpx;
            line-height: 100rpx;
            text-align:center;
            color:#484848;
            box-sizing:border-box;
            margin:0 20rpx;
        }
        .active{
            border-bottom:6rpx solid #56d2bf;
            line-height:94rpx;
            font-weight:500;
            color:#56d2bf;
        }
    }
</style>

