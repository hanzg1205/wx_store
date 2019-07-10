<template>
    <div class="wrap">
        <div class="header">
            <img class="img" :src="bannerList.specialImg" alt="">
            <p>蓓臣Babytry专区</p>
        </div>
        <div class="main">
            <div class="title">
                <span></span><p class="sl_title">蓓臣Babytry专区</p><span></span>
            </div>
            <div class="bottom_list">
                <Babylist></Babylist>
            </div>
        </div>
    </div>
</template>
<script>
import Babylist from '@/components/sl_babyList'
import {mapState,mapActions} from 'vuex'
export default {
    components:{
        Babylist
    },
    computed:{
        ...mapState({
            bannerList:state=>state.index.bannerList
        })
    },
    created(){
       console.log(this.bannerList)
    }
}
</script>
<style scoped>
    .wrap{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
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
        width: 100%;
        height: auto;
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
    .title .sl_title{
        width: 40%;
        text-align: center;
    }
    .title span{
        width: 20rpx;
        height: 20rpx;
        background: #999;
        display: inline-block;
        transform: rotate(45deg);
        position: relative;
    }
</style>