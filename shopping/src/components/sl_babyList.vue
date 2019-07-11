<template>
    <div class="baby_list" >
        <dl v-for="(item,index) in babyList" :key="index" :class="indexs%2===0?'list_item':'flex_list_item'" @click="clickBaby(item)">
            <dt>
                <img :src="item.mainImgUrl" alt="">
            </dt>
            <dd>
                <p>{{item.title}}</p>
                <li><span>￥</span>{{item.salesPrice}}</li>
                <p class="sl_last">赚 <span>￥{{item.memberDiscountPrice}}</span> </p>
            </dd>
        </dl>
    </div>
</template>
<script>
import { mapState , mapActions } from 'vuex'
export default {
    props:['babyList','indexs'],
    created(){
        console.log('daaa',this.babyList.length)
    },
    methods:{
        ...mapActions({
            getDetail:'order/getCommodityDetails'
        }),
        clickBaby(item){ 
            this.getDetail({pid:item.pid})
            wx.navigateTo({ url: "../detal/main" })
        }
    },
    onShow(){
        const query = wx.createSelectorQuery();
        query.select('.img').boundingClientRect(function (res) {
            // console.log(res.top)cons
            console.log(res)
        }).exec();
    },
    onPageScroll(e){
        console.log(e)
    }

}
</script>

<style scoped>
    .baby_list{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 0 15rpx;
        justify-content: space-between;
    }
    .flex_list_item{
        width: 100%;
        height: 250rpx;
        display: flex;
        background: #fff;
        margin-top: 10rpx;
        border-radius: 10rpx 10rpx 0 0;
        overflow: hidden;
    }
    .list_item{
        width: 32.5%;
        height: 400rpx;
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-top: 10rpx;
        border-radius: 10rpx 10rpx 0 0;
        overflow: hidden;
    }
    .list_item dt {
        width: 100%;
        height: 50%;
    }
    .list_item dt img{
        width: 100%;
        height: 100%;
    }
    .list_item dd {
        width: 100%;
        flex: 1;
        align-items: flex-end;
        justify-content: space-around;
    }
    .flex_list_item dd{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
    }
    .list_item dd p , .flex_list_item dd p{
        box-sizing: border-box;
        padding: 0 5rpx;
        width: 100%;
        font-size: 24rpx;
        color: #323a45;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .list_item dd li , .flex_list_item dd li{
        color:#fc5d7b;
    }
    .list_item dd li span{
        font-size: 25rpx;
    }
    .list_item dd li{
        font-size: 40rpx;
        font-weight: 400;
        padding: 10rpx 0;
    }
    .list_item .sl_last{

        font-weight: 400;
        color: #fc5d7b;
        font-size: 25rpx;
    }
    .flex_list_item dt{
        width: 40%;
        height: 80%;
        text-align: center;
        margin: auto 0;
    }
    .flex_list_item dt img{
        width: 80%;
        height: 100%;
    }
</style>
