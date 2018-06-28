<template>
  <div class="login">
    <h2 class="logo">装一下B而已咯</h2>
    <van-cell-group class="input-box">
      <van-field
        v-model="loginData.account"
        clearable
        left-icon="zhanghao"
        icon="question"
        placeholder="请输入用户名"
        @click-icon="$toast('question')"/>
      <van-field
        v-model="loginData.password"
        :type="password"
        icon="password-view"
        left-icon="mima"
        placeholder="请输入密码"
        @click-icon="seePwd"/>

      <van-field
        v-model="loginData.captcha"
        center
        clearable
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <van-button slot="button" size="large" type="default" v-html="captcha" @click="getCaptcha()"></van-button>
      </van-field>
    </van-cell-group>
    <van-button size="large" type="primary" class="login-btn" @click="loginRequest()">登录</van-button>
  </div>
</template>

<script>
// import {getCaptcha} from '@/api/login'

export default {
  data () {
    return {
      loginData: {},
      captcha: '',
      password: 'password'
    }
  },
  methods: {
    seePwd () {
      if (this.password === 'text') {
        this.password = 'password'
      } else if (this.password === 'password') {
        this.password = 'text'
      }
    },
    getCaptcha () {
      this.$axios({
        method: 'get',
        url: 'login/captcha'
      }).then(res => {
        this.captcha = res.data
      })
    },
    loginRequest () {
      if (!this.loginData.account || !this.loginData.password || !this.loginData.captcha) {
        this.$toast('登录信息填写不完整')
      } else if (this.loginData.account.length === 0 || this.loginData.account.length === 0 || this.loginData.account.length === 0) {
        this.$toast('登录信息填写不完整')
      } else {
        this.$axios({
          method: 'post',
          url: 'login',
          data: {
            account: this.loginData.account,
            password: this.loginData.password,
            captcha: this.loginData.captcha
          }
        }).then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.$toast(`${res.data.nick_name},${res.data.msg}`)
            this.$router.push({name: 'Main'})
          } else {
            this.$toast(res.data.msg)
            this.getCaptcha()
          }
        })
      }
    }
  },
  mounted () {
    this.$axios({
      method: 'get',
      url: 'login/captcha'
    }).then(res => {
      this.captcha = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
  .login
    position fixed
    width 100%
    height 100%
    background-color #2d3a4b
    .logo
      font-size 30px
      text-align center
      color #ffffff
      margin 30% 0 20% 0
    .login-btn
      margin-top 10%
</style>
