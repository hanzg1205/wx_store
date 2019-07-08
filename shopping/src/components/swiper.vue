<template>
    <swiper v-if="imgUrls.length > 0" :indicator-dots="indicatorDots" autoplay="true" circular="true" interval="2000" class="swiper">
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <image :src="item" mode="scaleToFill"></image>
          </swiper-item>
        </block>
    </swiper>   
</template>

<script>
export default {
    data () {
        return {
            imgUrls: [
                'https://jnup.oss-cn-beijing.aliyuncs.com/product/2defe8aa432c89162ce0251a69ef7d02.jpg',
                'https://jnup.oss-cn-beijing.aliyuncs.com/product/d86697416051ac31d0c91a7cd4cae65e.jpg',
                'https://jnup.oss-cn-beijing.aliyuncs.com/product/9ed292f334e1fd8a145ef5897b2e315d.jpg',
                'https://jnup.oss-cn-beijing.aliyuncs.com/product/df3587b37927f0c0f2105183fd9dba1d.jpg'
            ],
            indicatorDots: true
        }
    },
}
</script>

<style scoped lang="scss">
    .swiper{
        padding:0 15rpx;
        margin:15rpx 0;
        height:300rpx;
        swiper-item{
            border-radius:10rpx;
            overflow: hidden;
            image{
                width:100%;
                height:100%;
            }
        }
    }
</style>
