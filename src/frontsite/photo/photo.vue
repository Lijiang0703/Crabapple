<template>
  <div class="photo-page">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="search" v-show="false">
        <input type="text" name="" value="">
      </div>
    </div>
    <div class="photos">
      <div class="summary">
        THE BEAUTY IN LIFE SEE FROM THE CAMERA
      </div>
      <dl class="photo-wrap">
        <dt class="photo-item" v-for="item in photos">
          <img src="../../assets/1.jpg" alt="" @click="amplifyImg(item)">
        </dt>
      </dl>
      <div class="next">
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
      photos: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  },
  components:{
    Dialog,
    CopyRight
  },
  methods:{
    amplifyImg(){

    },
    prev(){

    },
    next(){
      
    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'

$space = 100px
$item_width = 24.99%
$search_width = 50%

.photo-page
  /* background: $g-black */
  padding-left: $space
  padding-right: $space
  .header
    padding-bottom: 40px
    padding-top: 40px
    .logo img
      width: 70px
    .search
      width: $search_width
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

  .photos
    padding-top: 50px
    padding-bottom: 50px
    border-top: 1px solid #e2e2e2
    border-bottom: 1px solid #e2e2e2
    text-align: left
    .summary
      text-align: center
      padding-bottom: 30px
    .photo-wrap
      display: flex
      flex-wrap: wrap
      .photo-item
        width: $item_width
        border-color: #e2e2e2
        img
          cursor: pointer
          width: 100%
          display: block
          height: auto
          transition: all ease-in-out 0.3s
          filter: grayscale(100%)
          &:hover
            filter: none
    .next
      text-align: center
      margin-top: 30px
      display: flex
      justify-content: space-between
      span
        border: 1px solid #e2e2e2
        display: inline-block
        padding: 5px 10px
        border-radius: 10px
        font-weight: 400
        transition: all ease 0.2s
        cursor: pointer
        &:hover
          background: $g-black
          color: $site_normal
</style>
