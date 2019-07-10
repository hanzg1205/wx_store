<template>
  <div class="bigbox">
    <div class='addbigbox' v-for="(v,i) in arr" :key='i' @click="selectAddress(v)">
      <div class="addressbox">
        <div class="addlittle">
          <p class='char name'>{{v.cityName}}</p>
          <p class='char phone'>{{v.consigneePhone}}</p>
          <div class="addlebox">
            <div class='addimgbox' v-if="v.state===0">
              <img class='addimg' src="/static/images/defaultadderss.png" alt="">
            </div>
            <p class='char addresstag' v-for="(x,y) in num" :key='y' v-if="v.addressTag==x.id">[{{x.str}}]</p>
            <p class='char address'>{{v.addressDetail}}</p>
          </div>
        </div>
        <div class="addribox">
          <span class="borders"></span>
          <p @click="readactAddress(v.uaid)" class='char redact'>编辑</p>
        </div>
      </div>
    </div>
    <button class='addbtn' @click="goAddress">新增收货地址</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: {
    list: {},
    arr: {},
    num: [
      {
        id: 1,
        str: "家"
      },
      {
        id: 2,
        str: "公司"
      },
      {
        id: 3,
        str: "学校"
      },
      {
        id: 4,
        str: "其他"
      }
    ]
  },
  methods: {
    ...mapActions({
      submit: "newadd/submit"
    }),
    readactAddress(id) {
      if (!this.fromOrder) {
        wx.navigateTo({ url: "./redactAddress/main?id=" + id });
      }
    },
    goAddress() {
      wx.navigateTo({ url: "./redactAddress/main" });
    },
    selectAddress(item) {
      if (this.fromOrder) {
        wx.setStorageSync("onAdressInfo", item);
        wx.redirectTo({ url: "/pages/submission/main" });
      }
    }
  },
  async onShow() {
    this.list = await this.submit();
    this.arr = this.list.data.result;
  },
  async onLoad(options) {
    this.fromOrder = options.fromOrder;
  },
  goAddress() {
    wx.navigateTo({ url: "./redactAddress/main" });
  },
  async created() {
    this.list = await this.submit();
    this.arr = this.list.data.result;
  }
};
</script>

<style scoped>
.addbtn {
  margin: 0 auto;
  border: none;
  margin-top: 60px;
  margin-bottom: 60px;
  background: #33d6c5;
  color: #fff;
  font-size: 18px;
  width: 351px;
  border-radius: 7px;
  height: 50px;
}
</style>