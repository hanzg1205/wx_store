<template>
    <scroll-view class="scroll-tab" scroll-x  enable-flex="true">
        <view 
            :class="['scroll-view-item',index===tabIndex?'active':'']" 
            v-for="(item,index) in tabList"
            :key="index"
            @click="handleTab(index)"
        >{{item.cname}}</view>
        
    </scroll-view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data(){
        return {
            navList: ['今日推荐','奶粉','尿不湿','运动户外','今日推荐','奶粉','尿不湿','运动户外']
        }       
    },
    computed: {
        ...mapState({
            tabIndex: state => state.index.tabIndex,
            tabList: state => state.index.tabList
        })
    },
    methods: {
        ...mapMutations({
            updateTabIndex: 'index/updateTabIndex'
        }),
        handleTab(index){           
            if(index === 0){
                wx.reLaunch({url: '/pages/index/main'})
            }else{
                console.log(index)
            }
            this.updateTabIndex(index)
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

