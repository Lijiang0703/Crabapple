<template>
  <div class="info-topbar">
    <i :class="icon"></i>
    <span v-text="info"></span>
  </div>
</template>
<script>
export default {
  name: 'info-topbar',
  props:{
    info: {
      type: String,
      default: '新建'
    },
    icon: {
      type: String,
      default: 'el-icon-edit'
    }
  }
}
</script>
<style lang="stylus">
@import '~@/common/css/base'
.info-topbar
  padding: 10px 20px
  /* font-size: 18px */
  background: $common_color
  color: $active_color
  text-align: left
  i
    border: 1px solid #ccc
    border-radius: 50%
    padding: 5px
    color: $white
    background: $active_color
</style>
