<template>
  <div class="more">
    <div :class="{wrap: showBorder }" @click="getMore">
      <span v-if="showText">more</span>
      <span class="ellipsis">...</span>
    </div>
  </div>
</template>
<script>
export default{
  props:{
    showText:{
      type: Boolean,
      default: false
    },
    showBorder:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    getMore(){
      this.$emit('more')
    }
  }
}
</script>
<style lang="stylus">
.more
  .wrap
    border: 1px solid #fff
  .ellipsis
    font-weight: bolder
    font-size: 30px
    letter-spacing: 6px
</style>
