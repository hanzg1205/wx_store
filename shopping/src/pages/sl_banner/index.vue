<template>
    <div class="wrap">
        <div class="header">
            <img class="img" :src="bannerList.specialImg" alt="" >
            <div class="sl_lists">
                <p v-for="(item,index) in bannerList.anchors" :key="index" :class="bannerList.anchors.length>1?'one':'only'">{{item.anchorName}}</p>
            </div>
        </div>
        <div class="main">
            <div class="title">
                <span></span><p class="sl_title">{{ bannerList.anchors[0].anchorName}}</p><span></span>
            </div>
            <div class="bottom_list">
                <Babylist :babyList="bannerList"></Babylist>
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
       console.log(this.bannerList.anchors)
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
    .header .only{
        line-height: 100rpx;
        color:red;
        height: 100rpx;
        background: #fff;
        text-indent: 15rpx;
    }
    .one{
        line-height: 100rpx;
        text-align: center;
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
    .sl_lists{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
</style>