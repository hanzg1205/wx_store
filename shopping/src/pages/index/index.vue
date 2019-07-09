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
                    @click="goClassify(item,index)"
                >{{item.cname}}</view>               
            </scroll-view>
        </header>
        <section class="main">
            <!-- 轮播图组件 -->
            <Swiper />

            <div class="h_milk">
                <div class="left">
                    <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/73b9906cea8612b23967553ef93c5c55.png"></image>
                </div>
                <div class="right">
                    <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/daa273d3f039af3e622f7d2d09680552.png"></image>
                    <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/695f4f58282831fe5d1967762032ad15.jpg"></image>
                </div>
            </div>
            <div class="h_banner">
                <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/09540c53ce9c5d5a62181ae250df2131.jpg?x-oss-process=style/small"></image>
            </div>
            <!-- 精选好物 -->
            <div class="sl_list">
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">精选好物</span><span>等你来抢</span></li><p>更多</p></div>
                    <BottomList />
                    <div class="sl_imgBox" @click="clcikImg">
                        <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/218b4c27298b0b1ceb771217bd7017b9.jpg" alt="">
                    </div>
               </div>
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">精选好物</span><span>等你来抢</span></li><p>更多</p></div>
                    <BottomList />
                    <div class="sl_imgBox">
                        <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/218b4c27298b0b1ceb771217bd7017b9.jpg" alt="">
                    </div>
               </div>
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">精选好物</span><span>等你来抢</span></li><p>更多</p></div>
                    <BottomList />
                    <div class="sl_imgBox">
                        <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/218b4c27298b0b1ceb771217bd7017b9.jpg" alt="">
                    </div>
               </div>
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">精选好物</span><span>等你来抢</span></li><p>更多</p></div>
                    <BottomList />
                    <div class="sl_imgBox">
                        <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/218b4c27298b0b1ceb771217bd7017b9.jpg" alt="">
                    </div>
               </div>
               <!-- 为你精选列表 -->
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">为你精选</span><span>等你来抢</span></li><p>更多</p></div>
                    <Item />
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
            tabIndex: state => state.classify.tabIndex,
            tabList: state => state.classify.tabList
        })
    },

    methods: {
        ...mapMutations({
            updateTabIndex: 'classify/updateTabIndex'
        }),
        ...mapActions({
            getTab: 'classify/getTab'
        }),
        goSearch(){
            wx.navigateTo({url: '/pages/search/main'})
        },
        goClassify(item,index){
            wx.navigateTo({url: '/pages/classify/main'})
            this.updateTabIndex({item,index})
        }
    },

    created () {
        this.getTab({parentId: 0});
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
        height: 180rpx;
        box-sizing: border-box;
        padding: 0 15rpx;
    }
    .sl_imgBox >img{
        width:100%;
        height: 100%;
        border-radius: 10px;
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
</style>
