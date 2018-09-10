<template>
  <div class="d-gradient">
    <div class="back" :class="{top: top, bottom: !top}">
    </div>
  </div>
</template>
<script>
export default{
  props:{
    top: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="stylus">
.d-gradient
  .back
    height: 206px
    &.top
      background: url('../../assets/thriller-gradient-bottom.png') repeat-x
    &.bottom
      background: url('../../assets/thriller-gradient-2.png') repeat-x
</style>
