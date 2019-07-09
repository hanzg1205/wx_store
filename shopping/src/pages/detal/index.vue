<template>
    <div class="wrap">
        <header>
            <img
                src="https://jnup.oss-cn-beijing.aliyuncs.com/product/664b019bff10838e9a6d2594a57c1097.png"
                alt
            />
        </header>
        <section>
            <div class="tit">
                <p>
                    <span>￥</span>
                    <span>39</span>
                    <span>32.05</span>
                    <img src="../../../static/images/黑卡@2x.png" alt />
                </p>
                <p>分享赚</p>
            </div>
            <div class="title">
                <div>PEPPA PIG/小猪佩奇 儿童牛奶香型洗手液300ML</div>
                <p>快递包邮</p>
            </div>
            <div class="list_div">
                <ul class="list">
                    <li>
                        <span>选择</span>
                        <div @click="truoff">规格<span>默认></span></div>
                    </li>
                    <li>
                        <span>说明</span>
                        <div class="color">null</div>
                    </li>
                    <li>
                        <span>提示</span>
                        <div class="color">西藏自治区,新疆维吾尔自治区不发货。</div>
                    </li>
                </ul>
            </div>
            <div class="pic">
                <img src="https://h5.jinaup.com/product_img/1.jpg" />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/c04ba3116b75b3cf6ba54964dd7bd05cfdc57b8c.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/aba4e940334cbc5e21098279900515e95f44d0b9.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/d8244f406c53c5c3fa27380ad47efac7dcdd3b18.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/50d9ba57cd652b24e66f58f9df0ae1ab10f6ff81.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/ad5b7c9fa2ccea8d4eefd79784ffec327c4759e0.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/ec384b26eba44c0fd9caa714bdc8096797fd6acd.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/9f67c53e8e76795ee80781c5c2e7b27fca201f03.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/2f655d958b773848c0f08c10f2cbaf2c902c770c.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/cedad5798be1333e7d1275611a5c5f5e90516540.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/a21e0ba05c814a634d0a58377d44e69c09fa6d90.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/19cf0a13427d7a622b9a3e021443f8c2b22f2bf3.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/e94d1c593dd52ae419cc97ebd916b97b5abfdaef.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/bd5f389fdc55c1a2213a883fc970f66abd47a503.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/e7ebdffa75664a6b17e8767f96189bdce873574c.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/62b1b7496fbbe161c895d22288f57b663e6a68cb.jpg"
                />
                <img
                    src="https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/69185ce9b26499e00df322c50bc48699c31fb952.jpg"
                />
                <img src="https://h5.jinaup.com/product_img/2.jpg" />
            </div>
        </section>
        <div class="mwrap" v-if="flag">
            <div class="cen">
<p><span>规格</span><span @click="truoff">X</span></p>
<dl>
    <dt><img src="https://jnup.oss-cn-beijing.aliyuncs.com/product/664b019bff10838e9a6d2594a57c1097.png" /></dt>
    <dd>
        <p>￥39</p>
        <p>库存:39</p>
    </dd>
</dl>
<div class="guige padd">
    <p>规格</p>
    <ul>
        <li>默认</li>
    </ul>
</div>
<div class="num padd">
    <span>数量</span>
    <div>
        <span>-</span>
        <span>0</span>
        <span>+</span>
    </div>
</div>
<button>确认</button>
            </div>
        </div>
        <footer>
            <button>分享赚6.95</button>
            <button @click="gomuch">立即购买</button>
        </footer>
    </div>
</template>
<script scope>
export default {
    props: {},
    components: {},
    data() {
        return {
            flag:false,
            num:0
        };
    },
    computed: {},
    methods: {
        truoff(){
            this.flag=!this.flag
        },
        gomuch(){
            wx.navigateTo({
                url:'/pages/placeOrder/main'
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
    display: flex;
    flex-direction: column;   
}
header {
    width: 100%;
    height: 360px;
}
header>img {
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
    /* display: flex; */
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
.tit>p>img {
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
    /* line-height: 30px; */
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
    /* font-size: 13px; */
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
.list li div{
    flex: 1;
    display: flex;
    justify-content: space-between;
}
.color {
    color: rgb(255, 113, 208);
}
.pic img{
    width: 100%;
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
.mwrap{
    width:100%;
height:100%;
background:rgba(0,0,0,.5);
position:fixed;
top:0;
left:0;
z-index:999;

}
.cen{
    position:fixed;
bottom:0;
width:100%;
background:#fff;
}
.cen>p{
display: flex;
justify-content: space-between;
/* box-sizing: border-box; */
align-items: center;
font-size: 15px;
padding:4px 10px;
}
.cen dl{
    display: flex;
padding:2px 2%;
box-sizing: border-box;

}
.cen dl dt{
    width: 80px;
    height: 80px;
}
.cen dl dt img{
width: 100%;
height: 100%;
}
.cen dl dd p{
    margin: 5px 0;
}
.cen dl dd p:nth-child(2){
color:#999da2;
}
.guige{
    margin-top:20px;

}
.guige p{
    color:#999da2;
font-size:15px;

}
.guige ul{
    display: flex;
    flex-wrap:wrap;
    padding: 2px 0;
}
.guige ul li{
    display: flex;
    background:#33d6c5;
color:#fff;
border:1px solid #33d6c5;
padding:3px 8px;
box-sizing:border-box;
margin:5px 10px;
font-size:12px;
border-radius:5px;
}
.num{
display: flex;
justify-content: space-between;
padding:0 2%;
box-sizing:border-box;
margin-bottom:10px;
align-items: center;
}
.num span{
    font-size:15px;
color:#999da2;

}
.num div{
    display: flex;
}
.num div span{
    display:block;
font-size:14px;
text-align:center;
padding:5px 10px;
box-sizing:border-box;
border:1px solid #ccc;
}
.num div span:nth-child(2){
    min-width: 40px;
}
.cen button{
    width:100%;
height:55px;
line-height:55px;
text-align:center;
color:#fff;
background:linear-gradient(217deg,#f86367,#fb2579);
}
.padd{
    box-sizing: border-box;
padding:0 10px;
}
</style>