<template>
    <div class="wrap">
        <div>
            <div class="sin">
                <div @click="add">
                    <div class="left">
                        <p>
                            <span>阿尔法</span>
                            <span>14556555555</span>
                        </p>
                        <p>
                            <img src="../../../static/images/locationIcon.png" alt />
                            <span>天津市阿尔法阿尔法阿尔法</span>
                        </p>
                    </div>
                    <span>></span>
                </div>
                <div class="bottom">
                    <ul>
                        <li v-for="(item,index) in 18" :key="index"></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="conten">
            <!-- <block v-for="(item, index) in arr" :key="index"> -->
            <p></p>
            <dl>
                <dt>
                    <img
                        :src="imgList[0].valueVo.imgUrl?imgList[0].valueVo.imgUrl:titleList.mainImgUrl"
                    />
                </dt>
                <dd>
                    <h3>{{titleList.title}}</h3>
                    <span>规格:{{list.data.skuName}}</span>
                    <p>
                        <span>￥{{list.data.salesPrice}}</span>
                        <span>x{{list.count}}</span>
                    </p>
                </dd>
            </dl>
            <div>
                <span>发货方式</span>
                <span>快递（包邮）：0元</span>
            </div>
            <div>
                <span>订单总计</span>
                <span class="colors">
                    ￥
                    <span class="muchs">{{pirce}}</span>
                </span>
            </div>
            <!-- </block> -->
        </div>
        <div class="youhui">
            <span>优惠券</span>
            <span>></span>
        </div>
        <div class="zhifu">
            <div>
                <img src="../../../static/images/7.png" alt />
                <span>微信支付</span>
            </div>
            <img src="../../../static/images/true2.png" alt />
        </div>
        <footer>
            <div>
                <span>
                    总计￥
                    <span>{{pirce}}</span>
                </span>
                <span>微信支付</span>
            </div>
            <p>去付款</p>
        </footer>
    </div>
</template>
<script scope>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
    props: {},
    components: {},
    data() {
        return {
            arr:[],
            list:[],
            imgList:null,
            pirce:0,
            titleList:null
        };
    },
    computed: {
        ...mapState({

        })
    },
    methods: {
        ...mapActions({
            getadd:"order/getadd",
            getTips: "order/getTips"

        }),
        add() {
            wx.navigateTo({ url: "/pages/zh_shouhuo/main" });
        }
    },
    created() {
        // this.state.arr=this.$mp.query.id
        // this.arr=this.$mp.query.id
    },
    onLoad(options){
        console.log('option',options.id)
    },
    onShow(){
        let that = this
        
        wx.getStorage({
            key:'list',
            success(res){
                let data = JSON.parse(res.data.data.attributeValueJson)
                that.imgList=data
                that.list=res.data
                let dataPirce =(res.data.count*res.data.data.salesPrice).toFixed(2);
                that.pirce=dataPirce,
                that.titleList=res.data.CommodityDetailsList
            }
        })
    },
    mounted() {
        this.arr=this.$mp.query.id
        this.getadd(this.arr)
    }
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
    padding: 0 10px;
    padding-top: 10px;
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
.youhui {
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
.zhifu {
    width: 100%;
    height: 44px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
}
.zhifu img {
    width: 20px;
    height: 20px;
}
.zhifu div {
    display: flex;
    align-items: center;
}
.zhifu div span {
    margin-left: 7px;
}
.colors {
    color: #fc5d7b;
}
.muchs {
    font-size: 20px;
}
.sin {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* height: 44px; */
    /* font-size: 14px; */
    /* display: flex; */
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 10px;
    background: #eee;
}
.sin > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    padding-top: 13px;
}
.sin img {
    width: 13px;
    height: 13px;
    margin-right: 3px;
}
.left p {
    padding: 3px 0;
}
.left p:nth-child(1) {
    font-weight: 700;
    font-size: 16px;
}
.left p:nth-child(2) {
    font-size: 14px;
    margin-top: 3px;
}
.bottom {
    width: 100%;
    padding-top: 20px;
}
.bottom ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.bottom ul li {
    width: 16px;
    height: 3px;
}
.bottom ul li:nth-child(odd) {
    background: #fc5d7b;
}
.bottom ul li:nth-child(even) {
    background: #5d9afc;
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