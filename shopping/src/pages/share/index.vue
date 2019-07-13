<template>
    <div class="share">
        <div class="header">
            <h2>{{info.title}}</h2>
            <p>【在售价】{{info.salesPrice}}元</p>
        </div>
        <div class="canvas-box">
            <canvas style="width: 280px; height: 400px;" canvas-id="canvas"></canvas>
        </div>
        <ul class="btn-box">
            <li>
                <button>
                    <image src="/static/images/6.png"></image>
                    <span>保存到相册</span>
                </button>
            </li>
            <li>
                <button open-type="share">
                    <image src="/static/images/7.png"></image>
                    <span>微信好友</span>
                </button>   
            </li>
        </ul>
    </div>   
</template>

<script>

import { mapState } from 'vuex';

const userInfo = {
    avatar: 'https://avatars2.githubusercontent.com/u/8192412?s=40&v=4',
    name: '积纳有品小程序'
}
const qrCode = 'https://upapi.jinaup.com/static/image/QRCode.png';
const toBase64 = 'https://upapi.jinaup.com/api/open/product/image/to/base64/1.0.0';

export default {
    computed: {
        ...mapState({
            info: state => state.order.CommodityDetailsList
        })
    },
    mounted(){
        console.log('000...',this.info)
        // 获取canvas
        var context = wx.createCanvasContext('canvas');
        // 绘制白色背景
        context.rect(0, 0, 280, 400);

        // 绘制用户名和头像
        context.drawImage(userInfo.avatar, 0, 0, 40, 40, 10, 15, 40, 40);
        context.save();
        context.setFontSize(12);
        context.fillText(`${userInfo.name}分享给你一个商品`, 60, 30);
        context.fillText(`邀请码：HAN156658203`, 60, 48);
        context.restore();

        // 绘制商品大图和标题
        context.save();
        context.setFontSize(12);
        // 绘制标题
        let row = 0, pos = 0;
        for (let i=0; i<this.info.title.length; i++){
            let str = this.info.title.slice(pos, i);
            if (context.measureText(str).width > 230 && context.measureText(str).width < 240){
            context.fillText(this.info.title.slice(pos, i), 20, 270+15*row);
            row++;
            pos = i;
            }
        }
        if (pos < this.info.title.length){
            context.fillText(this.info.title.slice(pos, this.info.title.length), 20, 270+15*row);
        }

        // 拿到图片的宽高
        wx.getImageInfo({
            src: this.info.mainImgUrl,
            complete: res => {
                let rx, ry, rw, rh;
                if(res.width/res.height > 180/190){
                    ry = 0;
                    rh = res.height;
                    rw = res.height/190*180;
                    rx = (res.width - rw) / 2;
                }else{
                    rx = 0;
                    rw = res.width;
                    rh = res.height/180*190;
                    ry = (res.height - rh)/2;
                }
                context.drawImage(this.info.mainImgUrl, 0, 0, res.width, res.height, 50, 58, 180, 190);
                context.draw(true);
            }
        })

        // 绘制二维码
        context.save();
        context.setFontSize(15);
        context.fillText('长按识别二维码访问', 15, 380) 
        context.restore();
        context.drawImage(qrCode, 0, 0, 1000, 1000, 180, 300, 90, 90);

        // 绘制商品价格
        context.save();
        context.setFontSize(10);
        context.setFillStyle('#ff0000');
        context.fillText('￥', 15, 350);
        context.setFontSize(18);
        context.fillText(this.info.salesPrice, 30, 350);
        context.setFontSize(12);
        context.setFillStyle('#999');
        context.fillText(`￥${this.info.marketPrice}`, 150-context.measureText(`￥${this.info.marketPrice}`).width, 350);
        context.restore();
        context.draw();
    }    
}
</script>

<style scoped lang="scss">
    canvas {
        width: 100%;
        border: 1px solid #ccc;
        background-color: #fff; 
        margin:20rpx auto;
    }
    .header{
        h2{
            font-weight:600;
            font-size:36rpx;
            width:658rpx;
            margin:0 auto;
        }
        p{
            width:690rpx;
            height:50rpx;
            margin:0 auto;
            margin-top:10rpx;
        }
    }
    .btn-box{
        display: flex;
        justify-content: space-around;
        li{
            width:50%;
            button{
                text-align:center;
                font-size:30rpx;
                display:flex;
                flex-direction:column;
                background: #fff;
                line-height: none;
                margin:0;
                outline: 0;
                padding:0;
                &:after{
                    border: none
                }
                span{
                    margin: 0;
                    padding: 0;
                    line-height: 40rpx;
                }
                image{
                    width:100rpx;
                    height:100rpx;
                    margin:15rpx auto;
                }
            }    
        }
    }
</style>
