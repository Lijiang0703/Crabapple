<template>
    <div class="nav">
      <div class="logo">
        <img />
        <span class="logo-text">. 雲 . 黑ねこ</span>
      </div>
      <div class="menus">
        <ul>
          <li v-for="item in menus">
            <a :href="item.url" v-text="item.title" class="menu-text" :class="{strong : item.strong}"></a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default{
  data(){
    return {
      direct: "left",
      menus:[
        {
          url: "start",
          title: "Start"
        },
        {
          url: "start",
          title: "Review"
        },
        {
          url: "start",
          title: "Screen"
        },
        {
          url: "start",
          title: "Buy now",
          strong: true
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'
.nav
  position: fixed
  width: 250px
  height: 100%
  top: 0
  background: $g-black
  .logo
    margin: 80px 40px
    .logo-text
      color: $site_normal
  .menus
    li
      padding-bottom: 15px
  .menu-text
    text-align: left
    font-weight: 400
    font-size: 15px
    line-height: 15px
    &.strong
      color: $site_strong
</style>
