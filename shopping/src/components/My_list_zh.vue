<template>
      <div class="zh_list" @click="ab">
          <div class="zh_list_left">
            <cover-view>
              <cover-image :src="item.src"></cover-image>
            </cover-view>
            <p>{{item.title}}</p>
          </div>
          <div class="zh_list_right">
            >
          </div>
        </div>
</template>

<script>
export default {
  name: "Mylist",
  data() {
    return {};
  },
  props: ["item", "index"],
  methods: {
    ab() {
      this.$emit("ab", this.index);
    }
  }
};
</script>

<style>
.zh_list {
  background: #fff;
  display: flex;
  height: 96rpx;
  justify-content: space-between;
}
.zh_list_left {
  display: flex;
}
.zh_list_left > cover-view {
  width: 36rpx;
  height: 36rpx;
  margin: 30rpx;
}
.zh_list_left > p {
  font-size: 28rpx;
  margin: 30rpx 30rpx 0 0;
}
.zh_list_right {
  width: 16rpx;
  height: 24rpx;
  margin: 34rpx 36rpx 0 0;
}
</style>
