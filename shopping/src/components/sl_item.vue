<template>
    <div class="sl_bottomList">
        <dl class="bottom_item" @click="detail(item.jumpUrl)" v-for="(item,index) in item" :key="index">
            <dt>
                <img :src="item.imgUrl" alt="">
            </dt>
            <dd>
                <p>{{item.title}}</p>
                <span>￥{{item.salesPrice}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import { mapState , mapActions} from 'vuex'
export default {
    props:["item"],
    methods:{
        detail(item){
            let pid = item.split("businessId=")[1].split("&")[0]*1;
            wx.navigateTo({ url: "/pages/detal/main?id=" + pid });
        }
    }
}
</script>
<style scoped>
.sl_bottomList{
    box-sizing: border-box;
    padding: 0 15rpx;
    width: 100%;
    height:602rpx;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
.bottom_item{
    width: 30%;
    height: 50%;
}
.bottom_item dt{
    width: 100%;
    height: 180rpx;
    text-align: center;
}
.bottom_item img{
    width: 180rpx;
    height: 100%;
}
.bottom_item p{
    font-size: 28rpx;
    color: #323a45;
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.bottom_item span{
    font-size: 28rpx;
    color: #fc5d7b;
}
</style>

