<template>
    <scroll-view class="scroll-tab" scroll-x  enable-flex="true">
        <view class="scroll-view-item active">今日推荐</view>
        <view class="scroll-view-item">奶粉</view>
        <view class="scroll-view-item">尿不湿</view>
        <view class="scroll-view-item">运动户外</view>
        <view class="scroll-view-item">今日推荐</view>
        <view class="scroll-view-item">奶粉</view>
        <view class="scroll-view-item">尿不湿</view>
        <view class="scroll-view-item">运动户外</view>
    </scroll-view>
</template>

<script>
export default {
 
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

