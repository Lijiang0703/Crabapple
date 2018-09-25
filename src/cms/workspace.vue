<template>
    <div class="workspace">
      <el-row>
        <transition name="slide">
          <el-col
            :span="4"
            class="left"
            v-show="showMenu"
          >
            <el-container>
              <el-header class="header">
                <img src="../assets/logo.png" alt="" class="logosize">
                <span>Crabapple</span>
              </el-header>
              <el-main
                class="main"
              >
                <el-menu
                  default-active = "1"
                  :router = true
                  :unique-opened = true
                  :collapse = "isCollapse"
                  background-color = "rgb(245,245,245)"
                  active-text-color = "#000"
                >
                  <el-menu-item
                    index="1"
                    route="statistic"
                  >
                    <i class="el-icon-menu"></i>
                    <span>数据统计</span>
                  </el-menu-item>
                  <el-menu-item
                    index="2"
                    route="content"
                    >
                    <i class="el-icon-document"></i>
                    <span>内容管理</span>
                  </el-menu-item>
                  <el-menu-item
                    index="3"
                    route="picture"
                    >
                    <i class="el-icon-picture"></i>
                    <span>图片管理</span>
                  </el-menu-item>
                </el-menu>
              </el-main>
              <el-footer></el-footer>
            </el-container>
          </el-col>
        </transition name="slide">
        <el-col :span="20">
          <!-- <el-header
            style="background: rgb(246, 246, 246)"
            height ="50px"
          >
            <div class="toggleicon">
              <i class="el-icon-arrow-left" @click="toggleMenu"></i>
            </div>
          </el-header> -->
          <el-main class="spacewrap">
            <router-view></router-view>
          </el-main>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default{
  data(){
    return {
      isCollapse: false,
      showMenu: true
    }
  },
  methods:{
    toggleMenu:function(){
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'
.workspace
  .left
    height: 100vh;
    background: $common_color
  .header
    background: $active_color
    color: #fff
    display: flex
    justify-content: center
    align-items: center
    span
      display: inline-block
    img.logosize
      margin-right: 10px
      width: 50px
      height: 50px
  .main
    padding: 10px 0
    ul
      border: none
    .el-menu-item.is-active
      border-right: solid 2px $active_color
  /* .slide-enter-active,.slide-leave-active
    transition: width 0.5s */
  .toggleicon
      text-align: left
      height: 100%
      i
        transform: translateY(50%)
  .spacewrap
    padding:0
    height: 100vh
    position: relative
</style>
