<template>
  <div class="login">
    <div class="top"></div>
    <div class="content">
      <div class="main">
        <div class="logo">
          <span>Crabble</span>
        </div>
        <div class="accout-type">
          <span @click=switchType(0) :class="{active: type===0}">邮箱</span>
          <span @click=switchType(1) :class="{active: type===1}">微信</span>
        </div>
        <div class="accout-input">
          <div class="email-input" v-show="type === 0">
            <div class="input-box">
                <input type="text" name="" value="" placeholder="邮箱" ref="email">
            </div>
            <div class="input-box">
                <input type="password" name="" value="" placeholder="密码" ref="password">
            </div>
            <div class="input-box">
                <button type="button" name="button" @click="login">登录</button>
            </div>
          </div>
          <div class="wx-qrcode" v-show="type === 1">
            <div class="input-box">
              <img src="../assets/logo.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="interact">

      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return {
        type: 0
      }
    },
    created:function(){
    },
    mounted:function(){
    },
    methods:{
      switchType: function(type){
        this.type = type;
      },
      login: function(){
        const email = this.refs.email.value
        const password = this.refs.password.value
      }
    }
  }
</script>

<style lang="stylus">
.login
  transform: translate(-50%,-50%)
  position: fixed
  top: 40%
  left: 50%
  width: 20%
  min-width: 300px
  min-height: 350px
  padding: 5px 30px
  box-sizing: border-box
  border:1px solid #000
  .content
    .main
      padding-bottom: 50px
      .logo
        margin-top: 20px
        margin-bottom:20px
        span
          font-size: 20px
          font-weight: bold
      .accout-type
        width:auto
        margin-bottom:20px
        display: flex
        justify-content: center
        span
          cursor: pointer
          border-bottom: 1px solid #ccc
          padding: 5px 10px
          &.active
            border-bottom: 2px solid rgb(65, 70, 75)
      .accout-input
        .email-input
          min-height: 150px
          .input-box
            input,button
              font-size: 15px
              outline: none
              border: none
              line-height: 1.2
              border-radius: 2px
            input
              margin-top:2px
              padding: 6px 15px
              background: rgb(245,245,245)
            button
              margin-top:10px
              padding: 5px 20px
              background: rgb(65, 70, 75)
              color: #fff
        .wx-qrcode
            img
              width: 150px
              height: 150px
</style>
