<template>
  <div class="simple-date">
    <div class="time">
      <div class="number-wrap">
        <div class="years">
          <span>18</span>
        </div>
        <h3>years</h3>
      </div>
      <div class="number-wrap">
        <div class="months">
          <span>09</span>
        </div>
        <h3>months</h3>
      </div>
      <div class="number-wrap">
        <div class="days">
          <span>09</span>
        </div>
        <h3>days</h3>
      </div>
    </div>
    <div class="course">
      <div class="">
        <span>我思う、ゆえに我あり。</span>
        <span>君が微笑むと、光が世界に満ちる</span>
      </div>
      <div class="">
        <span>頑固、桃 一かはちか</span>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props:{

  },
  methods:{

  }
}
</script>
<style lang="stylus">
@import '~@/common/css/base'
.simple-date
  color: $site_normal
  background: $g-black
  padding-bottom: 50px
  .time
    display: flex
    padding-top: 50px
    padding-bottom: 50px
    width: 100%
    justify-content: center
  .number-wrap
    margin-left: 20px
    margin-right: 20px
    div
      font-size: 60px
      font-weight: 400
</style>
