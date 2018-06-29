<template>
  <van-tabbar v-model="activeIndex">
    <van-tabbar-item icon="home" to="home">首页</van-tabbar-item>
    <van-tabbar-item icon="records" to="record">记录</van-tabbar-item>
    <van-tabbar-item icon="chat" to="admin">管理</van-tabbar-item>
    <van-tabbar-item icon="contact" to="my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      activeIndex: this.active
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
