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
              <div class="play-video">
                <img src="../../assets/play_icon.svg" @mouseover="updateIcon" @click="playVideo"/>
              </div>
              <div class="wishes">
                <span class="active">the<span class="normal">Short</span>film</span>
              </div>
              <div class="prologue">
                <span>PROLOGUE</span>
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
            <Gradient></Gradient>
            <div class="p-grid">
              <div class="column-title">
                <h2>Photos</h2>
              </div>
              <div class="grid">
                <div class="grid-item" v-for="item in photos">
                  <div class="photo-wrap">
                    <div class="wrap">
                      <div class="photo">
                        <img src="../../assets/1.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <More></More> -->
              </div>
            </div>
            <Gradient :top="false"></Gradient>
            <div class="self-introduction">
              <div class="column-title">
                <h2>Introduction</h2>
              </div>
              <div class="introduction">
                <div class="intro-item interest">
                  <div class="">
                    我思う、ゆえに我あり。
                    我思う、ゆえに我あり。
                  </div>
                  <p class="strong">interest</p>
                </div>
                <div class="intro-item skill">
                  <div class="">
                    君が微笑むと、光が世界に満ちる
                    君が微笑むと、光が世界に満ちる
                  </div>
                  <p class="strong">技能</p>
                </div>
                <div class="intro-item days">
                  <div class="">
                    我思う、ゆえに我あり。
                    君が微笑むと、光が世界に満ちる
                  </div>
                  <p class="strong">days</p>
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
                   <img src="../../assets/email.svg"/>
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
  },
  methods:{
    updateIcon(){

    },
    playVideo(){

    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'
.right-content
  position: absolute
  left: 0
  padding-left: $navwidth
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
    left: $navwidth
    right: 0
    z-index: -2
  .back-mask
    background: rgba(0,0,0,0.8)
    z-index: -1
    width: 100%
    height: 100%
  .front
    display: flex
  .content
    .column-title
      color: $site_normal
      font-size: 38px
      margin-bottom: $padding-v
    .banner,.p-grid,.self-introduction,.motto,.ending,.footer
      padding-left: $content_padding
      padding-right: $content_padding
    .banner
      height: 100vh
      padding-top: 100px
      padding-bottom: 100px
      box-sizing: border-box
      .play-video
        margin-top: 80px
        margin-bottom: $padding-v
        cursor: pointer
      .wishes
        .normal
          font-size: 30px
          line-height: 30px
      .prologue
        font-size: 100px
        line-height: 100px
        color: $site_strong
        font-weight: bolder
    .self-introduction
      /* background: $g-black-op */
      .introduction
        display: flex
        padding-bottom: $padding-v
        .intro-item
          padding: 0 20px
          flex-grow: 1
          align-items: center
          p
            margin-top: 30px
            font-size: 20px
    .p-grid
      background: $g-black
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
            .wrap
              position: absolute
              width: 100%
              height: 100%
              left: 0
              top: 0
              padding: 10px
              box-sizing: border-box
              .photo
                width: 100%
                height: 100%
                overflow: hidden
              img
                cursor: pointer
                width: 100%
                height: auto
                transform: scale(1)
                transition: all ease-in-out 0.3s
                &:hover
                    transform: scale(1.1)
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
