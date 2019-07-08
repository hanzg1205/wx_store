<template>
    <div class="wrapper">
        <header class="header">
            <div class="search" @click="goSearch">
                <image src="/static/images/search.png"></image>
            </div>
            <TabNav />
        </header>
        <section class="main">
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
        </section>
    </div>
</template>

<script>
import TabNav from "@/components/tabNav.vue";
import Swiper from "@/components/swiper.vue";
export default {
    data () {
        return {
        
        }
    },

    components: {
        TabNav,
        Swiper
    },

    methods: {
        goSearch(){
            wx.navigateTo({url: '/pages/search/main'})
        }
    },

    created () {
    
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
            width:44%;
            image{
                width:100%;
                height:100%;
                display: block;
            }
        }
        .right{
            width:56%;
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
</style>
