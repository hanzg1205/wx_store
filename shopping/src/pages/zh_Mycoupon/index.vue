<template>
  <div class="Couponlist">
    <header>
      <span
        v-for="(item,index) in types"
        :key="index"
        :class="active===index?'active':''"
        @click="tabChange(index)"
      >{{item}}</span>
    </header>
    <!-- <ConponList :list="showList"></ConponList> -->
  </div>
</template>

<script>
// import ConponList from "@/components/conpon/conponList";
// import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      types: ["未使用", "已使用", "已过期"],
      active: 0
    };
  },
  methods: {
    tabChange(e) {
      this.active = e
    }
  }
};
</script>

<style lang="scss" scoped>
.Couponlist {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 84rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #484848;
  line-height: 84rpx;
  font-size: 30rpx;
  box-sizing: border-box;
  span {
    border-bottom: 4rpx solid transparent;
  }
}
header span.active {
  border-bottom: 4rpx solid #33d6c5;
}
</style>