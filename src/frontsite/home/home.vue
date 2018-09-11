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
              <div class="paly-video">
                <i>play</i>
              </div>
              <div class="wishes">
                <span>theShortfilm</span>
              </div>
              <div class="prologue">
                <span>PROLOGUE</span>
              </div>
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
              <div class="introduction">
                <div class="interest">

                </div>
                <div class="skill">

                </div>
                <div class="days">

                </div>
              </div>
            </div>
            <div class="motto">

            </div>
            <Gradient></Gradient>
            <SDate></SDate>
            <div class="ending">

            </div>
            <div class="footer">
              <div class="copyright">
                 © 2018 Crabble - Blog. All Rights Reserved.
                 <span class="strong">Thanks</span>
                 <div class="email">
                   <i>email</i>
                 </div>
              </div>
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
import SDate from "@/components/S-date"
export default{
  data(){
    return {
      photos:[
        {
          src: "../../assets/P1010164.JPG"
        },
        {},
        {},
        {}
      ]
    }
  },
  components:{
    Nav,
    More,
    Gradient,
    SDate
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
    .p-grid,.footer
      padding-left: $content_padding
      padding-right: $content_padding
    .p-grid
      .grid
        display: flex
        flex-wrap: wrap
        justify-content: center
        .grid-item
          width: 50%
          box-sizing: border-box
          .photo-wrap
            margin-left: 5px
            margin-right: 5px
            /* 正方形或者其他比例的 */
            height: 0
            width: 100%
            padding-bottom: 76.9%
            position: relative
            img
              position: absolute
              width: 100%
              height: 100%
              left: 0
              top: 0
              padding: 10px
              box-sizing: border-box
    .footer
      padding-top: 30px
      padding-bottom: 30px
      border-top: 1px solid rgba(255,255,255,0.1)
      background-color: $g-black
      text-align: left
      font-family: "PT Serif", Arial, Tahoma, sans-serif
      position: relative
      display: flex
      .copyright
        width: 100%
        .email
          float: right
</style>
