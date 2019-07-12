<template>
  <div class="zh_main">
    <div class="zh_header">
      <div class="zh_header_Box">
        <div class="zh_header_Box_top">
          <cover-view  v-if="flag">
            <cover-image :src='userlog'></cover-image>
          </cover-view>
          <button class="pic" open-type='getUserInfo' @tap='onGetusers' v-if="!flag">
              获取账户信息
          </button>
        </div>
        <div class="zh_header_Box_botm">
          <div class="zh_header_Box_botm_name">{{name}}</div>
          <div class="zh_header_Box_botm_codeNum">邀请码：{{user_porn}}<span @click='copy'>复制</span></div>
        </div>
      </div>   
    </div>
    <div class="zh_perBox">
      <div class="zh_dlBox">
        <p>我的订单</p>
        <div class="zh_dl">
          <dl v-for="item in orderList" :key="item.orderId" @click="goMyorder(item.orderId)">
            <dt>
                <cover-view>
                  <cover-image :src="item.icon"></cover-image>
                </cover-view>
            </dt>
            <dd>
              {{item.title}}
            </dd>
          </dl>
        </div>
      </div>
      <div class="zh_listBox">
      <Mylist 
      v-for="(item,index) in list" 
      :key='index'
      :item='item'
      :index="index"
      @ab="tab_cut(index)"
      />
      </div>
    </div> 
  </div>
</template>

<script>
import Mylist from "@/components/My_list_zh";
export default {
  data() {
    return {
      userlog: "",
      user_porn: "",
      name: "",
      flag: false,
      list: [
        {
          src: "/static/images/yhj.png",
          title: "我的优惠卷"
        },
        {
          src: "/static/images/dz.png",
          title: "收货地址"
        },
        {
          src: "/static/images/kf.png",
          title: "联系客服"
        },
        {
          src: "/static/images/sm.png",
          title: "实名认证"
        }
      ],
      orderList: [
        {
          orderId: 1,
          icon: "/static/images/dfk.png",
          title: "代付款"
        },
        {
          orderId: 2,
          icon: "/static/images/dfh.png",
          title: "代发货"
        },
        {
          orderId: 3,
          icon: "/static/images/dsh.png",
          title: "代收货"
        }
      ]
    };
  },

  components: {
    Mylist
  },

  methods: {
    tab_cut(e) {
      if (e == 0) {
        wx.navigateTo({ url: "/pages/zh_Mycoupon/main" });
      } else if (e == 1) {
        wx.navigateTo({ url: "/pages/zh_shouhuo/main" });
      } else if (e == 2) {
        wx.navigateTo({ url: "/pages/zh_cofu/main" });
      } else {
        wx.navigateTo({ url: "/pages/zh_Shimin/main" });
      }
    },
    onGetusers() {
      wx.getUserInfo({
        withCredentials: false,
        success: res => {
          this.name = res.userInfo.nickName;
          this.userlog = res.userInfo.avatarUrl;
          this.user_porn = "0000";
          this.flag = true;
        }
      });
    },
    goMyorder(orderId){
      wx.navigateTo({ url:"/pages/myorder/main?orderId=" + orderId })
    }
  },

  created() {}
};
</script>

<style scoped>
.zh_main {
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: column; */
  position: relative;
  background: rgba(243, 247, 247, 1);
}
/* .mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.mask > .boxs {
  position: fixed;
  width: 65%;
  height: 100rpx;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
} */
.zh_header {
  width: 100%;
  height: 220rpx;
  background: skyblue;
}
.zh_header_Box {
  display: flex;
}
.zh_header_Box_top cover-view {
  width: 128rpx;
  height: 128rpx;
  margin: 38rpx;
  border-radius: 50%;
}
.zh_header_Box_top .pic {
  width: 128rpx;
  height: 128rpx;
  margin: 38rpx;
  border-radius: 50%;
  padding: 10rpx;
  font-size: 25rpx;
}
.zh_header_Box_botm {
  margin: 22rpx 20rpx 0 20rpx;
}
.zh_header_Box_botm_name {
  font-size: 40rpx;
  line-height: 2;
}
.zh_header_Box_botm_codeNum {
  font-size: 28rpx;
}
.zh_header_Box_botm_codeNum > span {
  margin-left: 10rpx;
  line-height: 2;
  font-size: 20rpx;
  background: #35cdd0;
  color: #fff;
  padding: 6rpx 10rpx;
  box-sizing: border-box;
  border-radius: 10rpx;
  opacity: 0.7239;
}
.zh_perBox {
  width: 100%;
  position: absolute;
  top: 180rpx;
}
.zh_dlBox {
  width: 96%;
  margin: 0 2%;
  height: 220rpx;
  background: #fff;
  border-radius: 10rpx;
}

.zh_dlBox > p {
  line-height: 2;
  padding-left: 20rpx;
  box-sizing: border-box;
}
.zh_dlBox > .zh_dl {
  display: flex;
  justify-content: space-around;
}
.zh_dlBox > .zh_dl dt {
  position: relative;
}
.zh_dlBox > .zh_dl dt > cover-view {
  width: 80rpx;
  height: 80rpx;
  box-sizing: border-box;
}
.zh_dlBox > .zh_dl dd {
  font-size: 24rpx;
  color: #70757d;
  text-align: center;
}
.zh_listBox {
  width: 96%;
  margin: 0 2%;
  margin-top: 20rpx;
}
</style>
