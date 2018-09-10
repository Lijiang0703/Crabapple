<template>
    <div class="home">
      <div class="front">
        <Nav style=""></Nav>
        <div class="right-content">
          <div class="baseback">
            <div class="back-mask"></div>
          </div>
          <div class="content">
            <div class="banner">

            </div>
            <div class="p-grid">
              <div class="column-title">
                <h2>Photos</h2>
              </div>
              <div class="grid">
                <div class="grid-item" v-for="item in photos">
                  <div class="photo-wrap">
                    <img src="../../assets/1.jpg" alt="">
                  </div>
                </div>
              </div>
              <More></More>
            </div>
            <div class="self-introduction">
              <div class="column-title">
                <h2>Introduction of </h2>
              </div>
            </div>
            <div class="motto">

            </div>
            <Gradient></Gradient>
            <div class="timeline">
              <div class="time">
                <div class="number-wrap">
                  <div class="years">
                    <span>2018</span>
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
            </div>
            <div class="ending">

            </div>
            <div class="footer">

            </div>
          </div>
        </div>
      </div>
      <div class="game">
        <!-- 分为猫粮和罐头，其中一个是随机获取食物数量 -->
      </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav"
import More from "@/components/tools/more"
import Gradient from "@/components/tools/gradient"
export default{
  data(){
    return {
      photos:[
        {
          src: "../../assets/P1010164.JPG"
        },
        {}
      ]
    }
  },
  components:{
    Nav,
    More,
    Gradient
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'

.right-content
  position: absolute
  left: 0
  padding-left: 250px
  box-sizing: border-box
  width: 100%
  color: $site_normal
  .baseback
    background-image: url(../../assets/cat_back.png)
    background-size: cover
    background-repeat: no-repeat
    background-color: $g-black
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: -2
  .back-mask
    background: rgba(0,0,0,0.7)
    z-index: -1
    width: 100%
    height: 100%
  .front
    display: flex
  .content
    .column-title
      color: $site_normal
      font-size: 38px
    .p-grid
      .grid
        display: flex
        .grid-item
          flex-wrap: wrap
          .photo-wrap
            img
              width: 300px
              height: 300px

    .timeline
      color: $site_normal
      background: $g-black
      .number-wrap
        div
          font-size: 60px
          font-weight: 400
</style>
