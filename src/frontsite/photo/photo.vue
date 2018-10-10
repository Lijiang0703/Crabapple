<template>
  <Theme :title="title">
    <dl class="photo-wrap" slot="main">
      <dt class="photo-item" v-for="item in photos">
        <img src="../../assets/1.jpg" alt="" @click="amplifyImg(item)">
      </dt>
    </dl>
  </Theme>
</template>

<script>
import Theme from "@/components/theme/common"

export default {
  data(){
    return {
      title: "THE BEAUTY IN LIFE SEE FROM THE CAMERA",
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
    // Dialog,
    // CopyRight
    Theme
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

<style lang="stylus" scoped>
@import '~@/common/css/base'
@media screen and (min-width: 1024px)
  .photo-item
    width: 24.99%
@media screen and (max-width: 1023px) and (min-width: 768px)
  .photo-item
    width: 49.99%
@media screen and (max-width: 767px)
  .photo-item
    width: 99.99%
.photo-wrap
  display: flex
  flex-wrap: wrap
  .photo-item
    border-color: $border_color
    img
      cursor: pointer
      width: 100%
      display: block
      height: auto
      transition: all ease-in-out 0.3s
      filter: grayscale(100%)
      &:hover
        filter: none
</style>
