<template>
    <div class="classify">
        <TabNav />
        <ul class="nav-list">
            <li>
                <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/2ebb4459a22bc7422d25193592916845.png"></image>
                <span>运动健身</span>
            </li> 
            <li>
                <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/02bb67938b9d913f7357cc6f975179f7.png"></image>
                <span>运动健身</span>
            </li> 
            <li>
                <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/2ebb4459a22bc7422d25193592916845.png"></image>
                <span>运动健身</span>
            </li>
            <li>
                <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/02bb67938b9d913f7357cc6f975179f7.png"></image>
                <span>运动健身</span>
            </li> 
            <li>
                <image src="https://jnup.oss-cn-beijing.aliyuncs.com/product/2ebb4459a22bc7422d25193592916845.png"></image>
                <span>运动健身</span>
            </li>  
        </ul>
        <SearchList />
    </div>
</template>

<script>
import TabNav from "@/components/tabNav.vue";
import SearchList from "@/components/searchList.vue";
export default {
    components: {
        TabNav,
        SearchList
    }
}
</script>

<style lang="scss" scoped>
    .classify{
        background: #f7f7f7;
    }
    .nav-list{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        background:#fff;
        margin-bottom: 10rpx;
        li{
            width:25%;
            text-align: center;
            padding:20rpx;
            box-sizing:border-box;
            image{
                width: 100rpx;
                height:100rpx;
            }
            span{
                font-size:24rpx;
                display:block;
                padding:12rpx 0;
                box-sizing:border-box;
            }
        }
    }
</style>

