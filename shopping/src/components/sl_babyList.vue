<template>
    <div class="baby_list">
        <dl class="list_item">
            <dt>
                <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/cd63013cb30822c7096ae93e55f83518.jpg" alt="">
            </dt>
            <dd>
                <p>蓓臣/Babytry 宝宝牙胶捏捏乐浮雕软胶积木套装</p>
                <li><span>￥</span>45</li>
                <p class="sl_last">赚 <span>￥6.95</span> </p>
            </dd>
        </dl>
        <dl class="list_item">
            <dt>
                <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/cd63013cb30822c7096ae93e55f83518.jpg" alt="">
            </dt>
            <dd>
                <p>蓓臣/Babytry 宝宝牙胶捏捏乐浮雕软胶积木套装</p>
                <li><span>￥</span>45</li>
                <p class="sl_last">赚 <span>￥6.95</span> </p>
            </dd>
        </dl>
        <dl class="list_item">
            <dt>
                <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/cd63013cb30822c7096ae93e55f83518.jpg" alt="">
            </dt>
            <dd>
                <p>蓓臣/Babytry 宝宝牙胶捏捏乐浮雕软胶积木套装</p>
                <li><span>￥</span>45</li>
                <p class="sl_last">赚 <span>￥6.95</span> </p>
            </dd>
        </dl>
        <dl class="list_item">
            <dt>
                <img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/cd63013cb30822c7096ae93e55f83518.jpg" alt="">
            </dt>
            <dd>
                <p>蓓臣/Babytry 宝宝牙胶捏捏乐浮雕软胶积木套装</p>
                <li><span>￥</span>45</li>
                <p class="sl_last">赚 <span>￥6.95</span> </p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .baby_list{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 0 15rpx;
        justify-content: space-between;
    }
    .list_item{
        width: 32.5%;
        height: 400rpx;
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-top: 10rpx;
        border-radius: 10rpx 10rpx 0 0;
        overflow: hidden;
    }
    .list_item dt {
        width: 100%;
        height: 50%;
    }
    .list_item dt img{
        width: 100%;
        height: 100%;
    }
    .list_item dd{
        width: 100%;
        flex: 1;
        align-items: flex-end;
        justify-content: space-around;
    }
    .list_item dd p{
        box-sizing: border-box;
        padding: 0 5rpx;
        width: 100%;
        font-size: 24rpx;
        color: #323a45;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .list_item dd li{
        color:#fc5d7b;
    }
    .list_item dd li span{
        font-size: 25rpx;
    }
    .list_item dd li{
        font-size: 40rpx;
        font-weight: 400;
        padding: 10rpx 0;
    }
    .list_item .sl_last{
        font-weight: 400;
        color: #fc5d7b;
        font-size: 25rpx;
    }
</style>
