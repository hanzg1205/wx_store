<template>
  <div class="bigbox">
    <button class='addbtn' @click="goAddress">新增收货地址</button>
  </div>
</template>

<script>
export default {
  data: {},
  methods: {
    goAddress() {
      wx.navigateTo({ url: "/pages/zh_shouhuo/redactAddress/main" });
    }
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