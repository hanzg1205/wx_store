<template>
    <div class="wrapper">
        <header class="header">

        </header>
        <section class="main">
            <div class="sl_list">
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
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">精选好物</span><span>等你来抢</span></li><p>更多</p></div>
                    <BottomList />
                    <div class="sl_imgBox">
                        <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/218b4c27298b0b1ceb771217bd7017b9.jpg" alt="">
                    </div>
               </div>
               <div class="sl_item">
                    <div class="sl_title"><li><span class="sl_title_span">为你精选</span><span>等你来抢</span></li><p>更多</p></div>
                    <Item />
               </div>
            </div>
        </section>  
    </div>
</template>

<script>
import Item from '@/components/sl_bottomItem' 
import BottomList from '@/components/sl_item'
export default {
    data () {
        return {
        
        }
    },

    components: {
        BottomList,
        Item
    },

    methods: {
        
    },

    created () {
    
    }
}
</script>

<style scoped>
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
</style>
