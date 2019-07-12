<template>
    <div class="wrap">
        <header>
            <img :src="CommodityDetailsList.mainImgUrl" alt />
        </header>
        <section>
            <div class="tit">
                <p>
                    <span>￥</span>
                    <span>{{CommodityDetailsList.salesPrice}}</span>
                    <span>{{CommodityDetailsList.vipPrice}}</span>
                    <img src="../../../static/images/黑卡@2x.png" alt />
                </p>
                <p>分享赚{{CommodityDetailsList.earnMoney}}</p>
            </div>
            <div class="title">
                <div>{{CommodityDetailsList.title}}</div>
                <p>快递包邮</p>
            </div>
            <div class="list_div">
                <ul class="list">
                    <li>
                        <span>选择</span>
                        <div @click="truoff">
                            规格
                            <span>默认></span>
                        </div>
                    </li>
                    <li>
                        <span>说明</span>
                        <div class="color">{{CommodityDetailsList.description}}</div>
                    </li>
                    <li>
                        <span>提示</span>
                        <div class="color">{{TipsList?TipsList:''}}</div>
                    </li>
                </ul>
            </div>
            <div class="pic">
                <block v-for="(items, index) in DetailsImgsList" :key="index">
                    <img :src="items.imgUrl" mode="widthFix" />
                </block>
            </div>
        </section>
        <div class="mwrap" v-if="flag">
            <div class="cen">
                <p>
                    <span>规格</span>
                    <span @click="truoff">X</span>
                </p>
                <dl>
                    <dt>
                        <img :src="CommodityDetailsList.mainImgUrl" />
                    </dt>
                    <dd>
                        <p>￥{{CommodityDetailsList.salesPrice}}</p>
                        <p>库存:39</p>
                    </dd>
                </dl>
                <div class="guige padd">
                    <p>规格</p>
                    <ul>
                        <block
                            v-for="(item, index) in CommodityDetailsList.supplierProductSkuVoList"
                            :key="index"
                        >
                            <li
                                :class="ind==index?'active':''"
                                @click="active(index)"
                            >{{item.skuName}}</li>
                        </block>
                    </ul>
                </div>
                <div class="num padd">
                    <span>数量</span>
                    <div>
                        <span @click="clcikType('sub')">-</span>
                        <span>{{count}}</span>
                        <span @click="clcikType('add')">+</span>
                    </div>
                </div>
                <button @click="isShow()">确认</button>
            </div>
        </div>
        <footer>
            <button>分享赚{{CommodityDetailsList.earnMoney}}</button>
            <button @click="gomuch">立即购买</button>
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
            flag: false,
            num: 0,
            ind: 0,
            id:0,
            count:1 ,
            item:''
        };
    },
    computed: {
        ...mapState({
            CommodityList: state => state.order.CommodityList,
            CommodityDetailsList: state => state.order.CommodityDetailsList,
            DetailsImgsList: state => state.order.DetailsImgsList,
            TipsList: state => state.order.TipsList
        })
    },
    methods: {
        async generateData() {
            await this.getCommodityDetails({
                pid: this.$mp.query.id
            });
             this.getDetailsImg({
                 pid: this.CommodityDetailsList.pid,
                basePid: this.CommodityDetailsList.basePid,
                userIdentity: this.CommodityDetailsList.userIdentity
            });
            this.getTips({
                sstid: this.CommodityDetailsList.sstid
            });
            // console.log('fgetCommodityDetails',this.CommodityDetailsList)
            this.state.id=this.$mp.query.id
        },
        ...mapActions({
            getCommodityDetails: "order/getCommodityDetails",
            getDetailsImg: "order/getDetailsImg",
            getTips: "order/getTips"
        }),
        truoff() {
            this.flag = !this.flag;
        },
        gomuch() {
           var that=this
           wx.setStorage({
               key:'list',
               data:{
                   count:that.count,
                   data:that.CommodityDetailsList.supplierProductSkuVoList[this.ind],
                   CommodityDetailsList:this.CommodityDetailsList
               }
           })
            wx.navigateTo({
                url: "/pages/placeOrder/main?id="+JSON.stringify(this.CommodityDetailsList)
            });
            console.log(this.CommodityDetailsList.supplierProductSkuVoList[this.ind])
        },
        active(index) {
            this.ind = index;
            this.item=this.CommodityDetailsList.supplierProductSkuVoList[index]
            console.log('active',this.item)
            
        },
        clcikType(type){
            console.log(type)
            if(type=='add'){
                this.count++
            }else{
                if(this.count>0){
                    this.count--
                }else{
                    this.count=0
                }
            }
        },
        isShow(){
            this.flag = !this.flag
        }
    },
    created() {
       
    },
    mounted() {
        this.generateData();
    }
};
</script>
<style scoped lang="">
.wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
}
header {
    width: 100%;
    height: 360px;
}
header > img {
    width: 100%;
    height: 100%;
}
section {
    margin-bottom: 50px;
}
section > div {
    margin-top: 10px;
}
.tit {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 0 0 10px;
    align-items: center;
}
.tit p:nth-child(2) {
    border: 1px solid rgb(255, 139, 220);
    padding: 3px 10px;
    color: rgb(255, 139, 220);
    border-radius: 10px 0 0 10px;
}
.tit p span {
    color: rgb(255, 122, 199);
    font-size: 22px;
}
.tit p span:nth-child(2) {
    font-weight: 400;
}
.tit p span:nth-child(3) {
    margin: 0 8px;
    color: chocolate;
    font-size: 15px;
}
.tit > p > img {
    width: 20px;
    height: 10px;
}
.title {
    box-sizing: border-box;
    padding: 10px 10px;
}
.title div {
    font-size: 18px;
}
.title p {
    margin: 10px 0;
    font-size: 14px;
    color: #aaa;
}
.list_div {
    box-sizing: border-box;
    padding: 0 10px;
}
.list {
    width: 100%;
    height: 100%;
}
.list li {
    width: 100%;
    display: flex;
    font-size: 14px;
    margin: 12px 0;
    color: rgb(107, 107, 107);
}
.list li span {
    margin-right: 10px;
}
.list li div {
    flex: 1;
    display: flex;
    justify-content: space-between;
}
.color {
    color: rgb(255, 113, 208);
}
.pic img {
    width: 100%;
    display: block;
}
footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    display: flex;
}
footer button {
    width: 50%;
    background: linear-gradient(217deg, #f86367, #fb2579);
    color: #fff;
    border-radius: 0;
    border: none;
}
.mwrap {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
.cen {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
}
.cen > p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    padding: 4px 10px;
}
.cen dl {
    display: flex;
    padding: 2px 2%;
    box-sizing: border-box;
}
.cen dl dt {
    width: 80px;
    height: 80px;
}
.cen dl dt img {
    width: 100%;
    height: 100%;
}
.cen dl dd p {
    margin: 5px 0;
}
.cen dl dd p:nth-child(2) {
    color: #999da2;
}
.guige {
    margin-top: 20px;
}
.guige p {
    color: #999da2;
    font-size: 15px;
}
.guige ul {
    display: flex;
    flex-wrap: wrap;
    padding: 2px 0;
}
.guige ul li {
    display: flex;
    border: 1px solid #aaa;
    padding: 3px 8px;
    box-sizing: border-box;
    margin: 5px 10px;
    font-size: 12px;
    border-radius: 5px;
}
.active {
    color: #fff;
    border: 1px solid #33d6c5;
    background: #33d6c5;
}
.num {
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    box-sizing: border-box;
    margin-bottom: 10px;
    align-items: center;
}
.num span {
    font-size: 15px;
    color: #999da2;
}
.num div {
    display: flex;
}
.num div span {
    display: block;
    font-size: 14px;
    text-align: center;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
.num div span:nth-child(2) {
    min-width: 40px;
}
.cen button {
    width: 100%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color: #fff;
    background: linear-gradient(217deg, #f86367, #fb2579);
}
.padd {
    box-sizing: border-box;
    padding: 0 10px;
}
</style>