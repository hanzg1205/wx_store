<template>
    <div class="wrap">
        <header>
            <span
                @click="tabChange(index)"
                v-for="(item, index) in types"
                :key="index"
                :class="ind==index?'active':''"
            >{{item}}</span>
        </header>
        <section>
            <div class="box">
                <div
                v-for="(item, index) in CommodityList" :key="index"
                >
                <div  v-for="(items, indexs) in item.products" :key="indexs"
                 @click="detail(items.pid)"
                >
                    <div class="conten">
                        <p>
                            <span>{{item.createTime}}</span>
                            <span>已取消</span>
                        </p>
                        <div class="inner">
                            <dl>
                                <dt>
                                    <img :src=items.mainImgUrl  />
                                </dt>
                                <dd>
                                    <h3>{{items.productTitle}}</h3>
                                
                                    <span>规格:{{items.skuName}}</span>
                                    <p>
                                        <span>￥{{items.salesPrice}}</span>
                                        <span>x{{items.productNumber}}</span>
                                    </p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="much">
                        共
                        <span>{{items.productNumber}}</span>件商品 合计：￥
                        <span>{{items.productNumber*items.salesPrice}}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="null" v-if="CommodityList.length<=0">
                <div class="infos">
                    <image class="zanwu" src="/static/images/暂无.png" />
                    <p class="kong">暂时没有订单哦～</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script scope>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    components: {},
    data() {
        return {
            types: ["全部", "代付款", "代发货", "待收货"],
            ind: 0,
            time:''
        };
    },
    computed: {
        ...mapState({
            CommodityList: state => state.order.CommodityList
        })
    },
    methods: {
        ...mapActions({
            getCommodity: "order/getCommodity"
        }),
        tabChange(index) {
            console.log('index...',index);
            this.ind = index;
            this.getCommodity({
                pageIndex: 1,
                orderStatus: index
            })
        },
        detail(th) {
            wx.navigateTo({
                url: "/pages/detal/main?"+"id="+th
            });
        },
        Time(item){
            return item
        }
    },
    created() {
        // this.getCommodity({
        //     pageIndex: 1,
        //     orderStatus: 0
        // })
    },
    onLoad(options){
        this.ind = options.orderId;
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
header {
    width: 100%;
    height: 88rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border-top: 1px solid #eee; */
}
header span {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 10px;
    border-bottom: 1rpx solid #fff;
}
.active {
    /* color: #197dbf; */
    box-sizing: border-box;
    font-weight: 500;
    border-bottom: 3rpx solid #197dbf !important;
}
section {
    width: 100%;
    /* height: 100%; */
    flex: 1;
    background: rgb(243, 243, 243);
    box-sizing: border-box;
    padding: 0 10px;
    /* display: flex;
    flex-direction: column; */
    overflow-y: scroll;
    /* overflow: hidden; */
}

.box {
    height: auto;
    /* overflow-y: scroll; */
}
.box > div {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px 0;
}
.conten {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid rgb(236, 236, 236);
    box-sizing: border-box;
    padding: 0 10px;
}
.conten p {
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
    /* line-height: 30px;  */
    font-size: 14px;
    font-weight: 300;
}
.inner {
    padding: 10px 0;
}
.inner dl {
    display: flex;
    justify-content: space-between;
}
.inner dl dt {
    width: 90px;
    height: 90px;
}
.inner dl dt img {
    width: 90px;
    height: 90px;
}
.inner dl dd {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* font-weight: 300; */
}
.inner dl dd h3 {
    font-size: 15px;
}
.inner dl dd > span {
    font-weight: 300;
    font-size: 12px;
    color: #aaa;
}
.inner dl dd p {
    font-weight: 300;
    font-size: 12px;
}
.much {
    height: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 14px;
}
.none {
    padding: 100rpx 0;
    text-align: center;
    font-size: 30rpx;
    color: #666;
}
.null {
  flex: 1;
  display: flex;
  padding-top: 169px;
  justify-content: center;
  background: rgba(243, 247, 247, 1);
}
.kong {
  font-size: 16px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 157, 162, 1);
  margin-top: 37px;
}
.zanwu {
  width: 119px;
  height: 104px;
  display: block;
  margin: 0 auto;
}
</style>