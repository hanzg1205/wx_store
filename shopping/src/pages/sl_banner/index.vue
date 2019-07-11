<template>
    <div class="wrap">
        <div class="header">
            <img class="img" :src="bannerList.specialImg" alt="" :style="bannerList.shareImgHeight<=1600?{height:bannerList.shareImgHeight/2+'rpx'}:{height:bannerList.shareImgHeight/10+'rpx'}">
            <div id="sl_lists">
                <p v-for="(item,index) in bannerList.anchors" :key="index" :class="flag?'one':'none'">{{item.anchorName}}</p>
            </div>
        </div>
        <div class="main">
            <div v-for="(item,index) in bannerList.anchors" :key="index">
                <div class="title">
                    <span></span><p class="sl_title">{{ item.anchorName}}</p><span></span>
                </div>
                <div class="bottom_list">
                    <Babylist :babyList="item.products" :indexs="index+1"></Babylist>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Babylist from '@/components/sl_babyList'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            top:'',
            flag:true
        }
    },
    components:{
        Babylist
    },
    computed:{
        ...mapState({
            bannerList:state=>state.index.bannerList
        })
    },
    created(){
       console.log('1234567890',this.bannerList)
    },
    mounted(){
        let that = this ;
        const query = wx.createSelectorQuery()
            query.select('.one').boundingClientRect()
            query.selectViewport().scrollOffset()
            query.exec(function(res){
            that.top=res[0].top       // #the-id节点的上边界坐标
            // res[1].scrollTop // 显示区域的竖直滚动位置
        })
    },
    onPageScroll(e){
        console.log(this.top)
        if(e.scrollTop>=this.top-50){
           this.flag=false
        }else{
            this.flag=true
        }
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
    }
    .header .only{
        line-height: 100rpx;
        color:red;
        height: 100rpx;
        background: #fff;
        text-indent: 15rpx;
    }
    .one , .none{
        line-height: 100rpx;
        text-align: center;
        color:red;
        text-indent: 15rpx;
        background: #fff;
    }
    .none{
        width: 100%;
        position: fixed;
        top:0;
        left:0;
        text-align: left;
        z-index:999
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
    #sl_lists{
        display: flex;
        width: 100%;
    }
</style>