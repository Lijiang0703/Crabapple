<!-- 统一内容页的风格 -->
<template>
  <div class="commone-theme-page">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="search" v-show="false">
        <input type="text" name="" value="">
      </div>
    </div>
    <div class="mian-wrap">
      <div class="summary" v-text="title"></div>
      <slot name="main"></slot>
      <div class="page" v-if="!noPage">
        <!-- 考虑到图片的数量和大小 采用分页的方式-->
        <span @click="prev">prev</span>
        <span @click="next">next</span>
      </div>
    </div>
    <div class="footer">
      <CopyRight></CopyRight>
    </div>
  </div>
</template>

<script>
import CopyRight from "@/components/copyright"
import Dialog from "@/components/Dialog"

export default {
  data(){
    return {
    }
  },
  props:{
    title: {
      type: String,
      default: ""
    },
    noPage: {
      type: Boolean,
      default: false
    }
  },
  components:{
    Dialog,
    CopyRight
  },
  methods:{
    prev(){
      this.$emit('prev')
    },
    next(){
      this.$emit('next')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/css/base'
@media screen and (min-width: 1024px)
  .commone-theme-page
    padding: 0 100px
    .search
      width: 50%
@media screen and (max-width: 1023px) and (min-width: 768px)
  .commone-theme-page
    padding: 0 50px
    .search
      width: 80%
    .footer
      font-size: 16px
@media screen and (max-width: 767px)
  .commone-theme-page
    padding: 0 20px
    .search
      width: 100%
    .footer
      font-size: 14px


.commone-theme-page
  .header
    padding-bottom: 40px
    padding-top: 40px
    .logo img
      width: 70px
    .search
      transform: translateX(-50%)
      margin-left: 50%
      input
        width: 100%
        background-image: url("../../assets/search.svg")
        background-repeat: no-repeat
        background-position: 5px center
        background-size: 20px 20px
        padding: 10px 30px 10px
        font-size: 18px
        line-height: 18px
        outline: 0
        border: 1px solid $site_normal
        border-radius: 5px
        text-decoration: none

  .mian-wrap
    padding-top: 50px
    padding-bottom: 50px
    border-top: 1px solid
    border-bottom: 1px solid $border_color
    text-align: left
    .summary
      text-align: center
      padding-bottom: 30px
      font-family:'Malapropism'
    .page
      text-align: center
      margin-top: 30px
      display: flex
      justify-content: center
      span
        margin-right: 10px
        border: 1px solid $border_color
        display: inline-block
        padding: 5px 10px
        border-radius: 10px
        font-weight: 400
        transition: all ease 0.2s
        cursor: pointer

        &:last-child
          &:hover
            background: $site_strong
            color: $white
        &:first-child
          &:hover
            background: $g-black
            color: $site_normal

</style>
