<template>
    <div class="wrap">
        <div></div>
        <div class="conten">
            <p></p>
            <dl>
                <dt>
                    <img
                        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/664b019bff10838e9a6d2594a57c1097.png"
                    />
                </dt>
                <dd>
                    <h3>PEPPA PIG/ 小猪佩奇 儿童牛奶香型洗手液 300ML</h3>
                    <span>规格:默认</span>
                    <p>
                        <span>￥39</span>
                        <span>x1</span>
                    </p>
                </dd>
            </dl>
            <div>
                <span>发货方式</span>
                <span>快递（包邮）：0元</span>
            </div>
            <div>
                <span>订单总计</span>
                <span class="colors">￥<span class="muchs">39</span></span>
            </div>
        </div>
        <div class="youhui">
            <span>
                优惠券
            </span>
            <span>></span>
        </div>
        <div></div>
        <footer>
            <div>
                <span>
                    总计￥
                    <span>39</span>
                </span>
                <span>微信支付</span>
            </div>
            <p>去付款</p>
        </footer>
    </div>
</template>
<script scope>
export default {
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.conten {
    width: 100%;
    padding: 5px 2%;
    background: #fff;
    box-sizing: border-box;
    padding:0 10px;
    padding-top:10px;
}
.conten > p {
    font-size: 12px;
    padding: 5px 0;
    box-sizing: border-box;
    background: #f3f7f7;
}
.conten dl {
    display: flex;
    padding: 2px 2%;
    box-sizing: border-box;
}
.conten dl dt {
    width: 80px;
    height: 80px;
}
.conten dl dt img {
    width: 100%;
    height: 100%;
}
.conten dl dd {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.conten dl dd h3 {
    font-size: 15px;
}
.conten dl dd > span {
    font-weight: 300;
    font-size: 12px;
    color: #aaa;
    margin: 3px 0;
}
.conten dl dd p {
    font-weight: 300;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}
.conten > div {
    width: 100%;
    height: 44px;
    font-size: 14px;
    /* line-height:88rpx; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
}
.youhui{
    width: 100%;
    height: 44px;
    font-size: 14px;
    /* line-height:88rpx; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
}
.colors{
    color:#fc5d7b;
}
.muchs{
    font-size:20px;
}
footer {
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
}
footer > div {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #fc5d7b;
    padding: 0 10px;
    box-sizing: border-box;
}
footer > div span span {
    font-size: 30px;
}
footer > div span:nth-child(2) {
    color: #323a45;
}
footer p {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: center;
    color: #fff;
    background: linear-gradient(217deg, #f86367, #fb2579);
}
</style>