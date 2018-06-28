<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'custom-iconfont';
  src: url('../static/css/iconfont.ttf') format('truetype');
}

.van-icon {
  font-family: 'vant-icon', 'custom-iconfont' !important;
}

.van-icon-zhanghao:before {
  content: '\e61b';
}
.van-icon-mima:before {
  content: '\e65e';
}
.van-icon-yanzhengma:before {
  content: '\e68a';
}
</style>
