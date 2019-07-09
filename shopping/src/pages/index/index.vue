<template>
    <div class="wrapper">
        <header class="header">
            <div class="search" @click="goSearch">
                <image src="/static/images/search.png"></image>
            </div>
            <!-- tab切换分类 -->
            <scroll-view class="scroll-tab" scroll-x  enable-flex="true">
                <view class="scroll-view-item active">今日推荐</view>
                <view 
                    class="scroll-view-item"
                    v-for="(item,index) in tabList"
                    :key="index"
                    @click="goClassify(index)"
                >{{item.cname}}</view>               
            </scroll-view>
        </header>
        <section class="main">
            <!-- 轮播图组件 -->
            <Swiper />
            <div class="h_milk">
                <div class="left">
                    <image v-for="(item,index) in leftThreePic" :key="index" :src="item.imgUrl"></image>
                </div>
                <div class="right">
                    <image v-for="(item,index) in rightThreePic" :key="index" :src="item.imgUrl"></image>
                </div>
            </div>
            <!-- 精选好物 -->
            
            <div class="sl_list">
                <div class="sl_bottoList" v-for="(item,index) in downPic" :key="index">
                    <div class="h_banner">
                        <image :src="item.pictUrl" ></image>
                    </div>
                    <div class="sl_item">
                            <div class="sl_title"><li><span class="sl_title_span">精选好物</span><span>等你来抢</span></li><p>更多</p></div>
                            <BottomList :item="item.children.items" />
                    </div>
                </div>
               <!-- 为你精选列表 -->
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">为你精选</span><span>等你来抢</span></li><p>更多</p></div>
                    <Item :getBottomData="getBottomData"/>
               </div>
            </div>
        </section>  
    </div>
</template>

<script>
import TabNav from "@/components/tabNav.vue";
import Swiper from "@/components/swiper.vue";
import Item from '@/components/sl_bottomItem' ;
import BottomList from '@/components/sl_item';
import { mapMutations, mapActions, mapState } from "vuex";
export default {
    data () {
        return {
            pageIndex:1
        }
    },

    components: {
        TabNav,
        Swiper,
        BottomList,
        Item
    },

    computed:{
        ...mapState({
            tabIndex: state => state.index.tabIndex,
            tabList: state => state.index.tabList,
            leftThreePic:state => state.index.leftThreePic,
            rightThreePic:state => state.index.rightThreePic,
            downPic:state => state.index.downPic,
            getBottomData:state => state.index.getBottomData
        })
    },

    methods: {
        ...mapMutations({
            updateTabIndex: 'index/updateTabIndex',
        }),
        ...mapActions({
            getTab: 'index/getTab',
            getData:'index/getData',
            getList:'index/getList'
        }),
        goSearch(){
            wx.navigateTo({url: '/pages/search/main'})
        },
        goClassify(index){
            wx.navigateTo({url: '/pages/classify/main'})
            this.updateTabIndex(index)
        },
        
    },
    onReachBottom(){
        // console.log('123444')
        this.getList({pageIndex:++this.pageIndex})
    },

    created () {
        this.getData(),
        this.getTab({parentId: 0})
        this.getList({pageIndex:1})
    }
}
</script>

<style scoped lang="scss">
    .header{
        .search{
            image{
                width:100%;
                height:66rpx;
                display:block;
                padding:0 20rpx;
                box-sizing:border-box;
            }
        }
    }
    .h_milk{
        padding:0 15rpx;
        height: 376rpx;
        display: flex;
        justify-content: space-between;
        margin:30rpx 0 0;
        .left{
            width:40%;
            image{
                width:100%;
                height:100%;
                display: block;
            }
        }
        .right{
            width:60%;
            margin-left:15rpx;
            image{
                width:100%;
                height:180.5rpx;
                display: block;
                &:last-child{
                    margin-top:15rpx;
                }
            }
        }
    }
    .h_banner{
        width:100%;
        height:176rpx;
        margin:15rpx 0;
        padding:0 15rpx;
        box-sizing: border-box;
        image{
            width:100%;
            height:100%;
            border-radius: 10rpx;
        }
    }
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main{
        width: 100%;
        flex: 1;
    }
    .sl_list{
        width: 100%;
        height: auto;
    }
    .sl_title{
        box-sizing: border-box;
        width: 100%;
        height: 100rpx;
        display: flex;
        padding: 0 15rpx;
        align-items: center;
        justify-content: space-between;
    }
    .sl_title li span{
        font-size: 30rpx;
        padding-left: 20rpx;
    }
    .sl_title li .sl_title_span{
        border-right: #ccc solid 1rpx;
        font-size: 40rpx;
        padding-right: 20rpx;
    }
    .sl_title p{
        font-size: 35rpx;
        color: #fc5d7b;
    } 
    .sl_imgBox{
        width: 100%;
        height: 220rpx;
        box-sizing: border-box;
        padding: 20rpx 15rpx;
    }
    .sl_imgBox >img{
        width:100%;
        height: 100%;
        border-radius: 10rpx;
    }
    .scroll-tab{
        width:100%;
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
    .sl_bottoList{
        width: 100%;
        height: auto;
    }
</style>
