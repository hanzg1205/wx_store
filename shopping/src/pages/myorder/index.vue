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
            <div class="box" v-if="list.length==0">
                <div @click="detail(this)">
                    <div class="conten">
                        <p>
                            <span>2019-07-08 10:10:42</span>
                            <span>已取消</span>
                        </p>
                        <div class="inner">
                            <dl>
                                <dt>
                                    <img src="../../../static/images/位图@2x.png" />
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
                        </div>
                    </div>
                    <div class="much">
                        共
                        <span>1</span>件商品 合计：￥
                        <span>39</span>
                    </div>
                </div>
                <div>
                    <div class="conten">
                        <p>
                            <span>2019-07-08 10:10:42</span>
                            <span>已取消</span>
                        </p>
                        <div class="inner">
                            <dl>
                                <dt>
                                    <img src="../../../static/images/位图@2x.png" />
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
                        </div>
                    </div>
                    <div class="much">
                        共
                        <span>1</span>件商品 合计：￥
                        <span>39</span>
                    </div>
                </div>
            </div>
            <p v-else class="none">暂时没有订单</p>
        </section>
    </div>
</template>
<script scope>
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
            ind: 0
        };
    },
    computed: {},
    methods: {
        tabChange(index) {
            this.ind = index;
        },
        detail(th){
            console.log('this_span')
            wx.navigateTo({
                url:'/pages/detal/main'
            })
        }
    },
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
</style>