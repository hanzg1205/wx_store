<template>
    <div class="sl_list">
        <dl class="sl_item">
            <dt>
                <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/d461f3bf6c29c1985904cfe8d3c44f8a.jpg" alt="">
            </dt>
            <dd>
                <li>【优粒可】四川宜宾茵红李子 新鲜水果半边红李子 5斤装</li>
                <div class="sl_center">
                    <span>包邮</span>
                    <span>包税</span>
                </div>
                <div class="sl_bottom">
                    <li class="top">
                        <span class="sl_span">￥</span>
                        <p class="sl_price">40.8</p>
                        <p class="sl_left">￥35.44</p>
                        <img src="/static/images/黑卡@2x.png" alt=""  class="img">
                        <p class="list_title">赚￥5.36</p>
                   </li>
                </div>
            </dd>
        </dl>
        <dl class="sl_item">
            <dt>
                <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/d461f3bf6c29c1985904cfe8d3c44f8a.jpg" alt="">
            </dt>
            <dd>
                <li>【优粒可】四川宜宾茵红李子 新鲜水果半边红李子 5斤装</li>
                <div class="sl_center">
                    <span>包邮</span>
                    <span>包税</span>
                </div>
                <div class="sl_bottom">
                    <li class="top">
                        <span class="sl_span">￥</span>
                        <p class="sl_price">40.8</p>
                        <p class="sl_left">￥35.44</p>
                        <img src="/static/images/黑卡@2x.png" alt=""  class="img">
                        <p class="list_title">赚￥5.36</p>
                   </li>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.sl_list{
    width:100%;
    height: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15rpx;
}
.sl_item{
    width: 100%;
    height: 226rpx;
    display:flex;
}
.sl_item dt{
    width: 30%;
    height: 90%;
}
.sl_item dt img{
    width: 100%;
    height: 100%;
}
.sl_item dd{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.sl_item dd li{
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 28rpx;
    text-overflow: ellipsis;
    overflow: hidden;
}
.sl_center span{ 
    width: 30rpx;
    height: 30rpx;
    border:solid 1rpx #fc5d7b;
    color:#fc5d7b;
    margin-left: 20rpx;
    font-size: 25rpx;
}
.sl_bottom{
    display: flex;
}
.top{
    display: flex;
    margin-left: 10rpx;
    align-items: flex-end;
}
.sl_bottom .top .img{
    width: 50rpx;
    height: 25rpx;
}
.list_title{
    margin-left: 10rpx;
    background: #ffe8ed;
    height: 30rpx;
    color: #fc5d7b;
    font-size: 25rpx;
    line-height: 30rpx;
}
.sl_price{
    font-size: 40rpx;
    color: #fc5d7b;
}
.sl_span{
   color: #fc5d7b;
}
.sl_left{
    padding:0 10rpx;
}
</style>




