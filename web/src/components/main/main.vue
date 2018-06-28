<template>
  <div class="main">
    <div>
      <component :is="subgroup"></component>
    </div>
    <van-tabbar v-model="active" @change="tabbarChange">
      <van-tabbar-item icon="home">首页</van-tabbar-item>
      <van-tabbar-item icon="records">记一笔</van-tabbar-item>
      <van-tabbar-item icon="chat">管理</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Home from '@/components/home/home'
import Record from '@/components/record/record'
import Admin from '@/components/admin/admin'
import My from '@/components/my/my'

export default {
  data () {
    return {
      active: 0,
      subgroup: 'Home'
    }
  },
  methods: {
    tabbarChange (el) {
      console.log(el)
      if (el === 0) {
        this.subgroup = 'Home'
      } else if (el === 1) {
        this.subgroup = 'Record'
      } else if (el === 2) {
        this.subgroup = 'Admin'
      } else if (el === 3) {
        this.subgroup = 'My'
      }
    }
  },
  components: {
    My,
    Record,
    Admin,
    Home
  }
}
</script>

<style lang="stylus" scoped>

</style>
