<template>
    <div class="wrap">
        <div class="header">
            <img class="img" src="https://jnup.oss-cn-beijing.aliyuncs.com/topic/e886275e847f6f8b5293eab5b4dac5e9.jpg" alt="">
            <p>蓓臣Babytry专区</p>
        </div>
        <div class="main">
            <div class="title">
                <span></span><p>蓓臣Babytry专区</p><span></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .wrap{
        width: 100%;
        height: auto;
    }
    .header{
        width:100%;
        height: auto;
    }
    
    .header .img{
        width: 100%;
        height: 500rpx;
    }
    .header p{
        line-height: 100rpx;
        color:red;
        height: 100rpx;
        background: #fff;
        text-indent: 15rpx;
    }
    .main{
        flex: 1;
        background: #eee;
    }
    .title{
        width: 100%;
        height: 150rpx;
        line-height: 150rpx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title p{
        width: 50%;
        text-align: center;
    }
    .title span{
        width: 20rpx;
        height: 20rpx;
        background: #999;
        display: inline-block;
        transform: rotate(45deg);
    }
    .title span:first-child::before{
        content: "";
        width: 100rpx;
        height: 2rpx;
        background: #999;
        display: inline-block;
    }
</style>