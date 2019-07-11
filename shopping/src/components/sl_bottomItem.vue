<template>
    <div class="sl_list">
        <dl class="sl_item" v-for="(item,index) in getBottomData" :key="index" @click="clcikItem(item)">
            <dt>
                <img :src="item.productVo.mainImgUrl" alt="">
            </dt>
            <dd>
                <li>{{item.productVo.shortTitle}}</li>
                <div class="sl_center">
                   <span v-if="item.productVo.isFreeShipping&&item.productVo.isFreeTax">包邮</span>
                   <span v-if="item.productVo.isFreeShipping||item.productVo.isFreeTax">包税</span>
                </div>
                <div class="sl_bottom">
                    <li class="top">
                        <span class="sl_span">￥</span>
                        <p class="sl_price">{{item.productVo.salesPrice}}</p>
                        <p class="sl_left">￥{{item.productVo.vipPrice}}</p>
                        <img src="/static/images/黑卡@2x.png" alt=""  class="img">
                        <p class="list_title">赚￥{{item.productVo.earnMoney}}</p>
                   </li>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
import { mapState , mapActions } from 'vuex'
export default {
    props:['getBottomData'],
    created(){
        console.log(this.getBottomData)
    },
    methods:{
        ...mapActions({
            getDetail:'order/getCommodityDetails'
        }),
        clcikItem(item){
            // console.log(item.productVo。.pid)
            this.getDetail({pid:item.productVo.pid})
            wx.navigateTo({ url: "../detal/main" });
        }
    }
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
    color:#a87831;
}
</style>




