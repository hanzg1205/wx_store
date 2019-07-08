<template>
    <scroll-view class="scroll-tab" scroll-x  enable-flex="true">
        <view 
            :class="['scroll-view-item',index===idx?'active':'']" 
            v-for="(item,index) in navList"
            :key="index"
            @click="handleTab(index)"
        >{{item}}{{options}}</view>
        
    </scroll-view>
</template>

<script>
export default {
    data(){
        return {
            navList: ['今日推荐','奶粉','尿不湿','运动户外','今日推荐','奶粉','尿不湿','运动户外'],
            idx:0
        }       
    },
    props: {
        options: {
            type: Number,
            default: 100
        }
    },
    watch: {
        options(){
            console.log('5555')
        }
    },
    methods: {
        handleTab(index){           
            if(index === 0){
                wx.reLaunch({url: '/pages/index/main'})
            }else{
                console.log(index)
            }
            this.idx = index;
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

