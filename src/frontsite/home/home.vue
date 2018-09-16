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
                <svg t="1536661658929" @mouseover="updateIcon" @click="playVideo" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7742" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><defs></defs><path d="M957.44 326.656c-8.192-53.248-52.224-95.232-105.472-101.376-234.496-27.648-443.392-27.648-678.912 0-53.248 7.168-97.28 49.152-105.472 101.376C56.32 388.096 51.2 450.56 51.2 512s5.12 123.904 15.36 183.296c8.192 53.248 52.224 95.232 105.472 101.376 117.76 14.336 228.352 20.48 338.944 20.48s222.208-7.168 338.944-20.48c54.272-6.144 97.28-48.128 105.472-101.376 10.24-61.44 15.36-122.88 15.36-184.32 2.048-61.44-3.072-123.904-13.312-184.32z m-40.96 362.496c-5.12 34.816-34.816 62.464-70.656 66.56-231.424 27.648-437.248 27.648-668.672 0-35.84-4.096-64.512-31.744-70.656-67.584C97.28 630.784 92.16 571.392 92.16 512s5.12-118.784 15.36-178.176c5.12-34.816 34.816-62.464 70.656-67.584C409.6 238.592 614.4 238.592 846.848 266.24c35.84 4.096 64.512 31.744 70.656 66.56 10.24 59.392 15.36 118.784 15.36 178.176-1.024 59.392-6.144 118.784-16.384 178.176zM548.864 434.176c-17.408-12.288-38.912-23.552-60.416-31.744-1.024 0-2.048-1.024-3.072-1.024-3.072-1.024-5.12-1.024-7.168-1.024-11.264-2.048-23.552 0-32.768 6.144-12.288 7.168-20.48 17.408-24.576 30.72-7.168 23.552-11.264 49.152-11.264 75.776 0 23.552 3.072 48.128 10.24 75.776 0 2.048 1.024 4.096 2.048 5.12 0 1.024 0 1.024 1.024 2.048 8.192 19.456 27.648 31.744 48.128 31.744 6.144 0 13.312-1.024 19.456-4.096 17.408-7.168 39.936-17.408 59.392-31.744 17.408-12.288 33.792-25.6 52.224-43.008 18.432-20.48 18.432-50.176 0-70.656-18.432-19.456-34.816-32.768-53.248-44.032z m22.528 86.016c-15.36 15.36-29.696 26.624-45.056 37.888-17.408 12.288-35.84 20.48-52.224 27.648-5.12 2.048-10.24 0-13.312-4.096 0-1.024-1.024-2.048-1.024-2.048-6.144-24.576-9.216-46.08-9.216-65.536 0-22.528 3.072-44.032 9.216-64.512v-1.024c1.024-3.072 3.072-4.096 4.096-5.12 3.072-1.024 6.144-2.048 8.192-1.024 1.024 0 3.072 1.024 4.096 1.024 17.408 7.168 34.816 16.384 49.152 26.624 15.36 10.24 29.696 21.504 44.032 37.888 5.12 2.048 5.12 8.192 2.048 12.288z" fill="#ccc8bd" p-id="7743"></path></svg>
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
              <CopyRight></CopyRight>
            </div>
          </div>
        </div>
      </div>
      <div class="game">
        <!-- 分为猫粮和罐头，其中一个是随机获取食物数量 -->
      </div>
      <Dialog v-show="false">
        <div slot="main">
          <img src="../../assets/1.jpg"/>
        </div>
      </Dialog>
    </div>
</template>

<script>
import Nav from "@/components/Nav"
import More from "@/components/tools/more"
import Gradient from "@/components/tools/gradient"
import SDate from "@/components/S-date"
import Dialog from "@/components/Dialog"
import CopyRight from "@/components/copyright"

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
    SDate,
    Dialog,
    CopyRight
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
      border-top: 1px solid rgba(255,255,255,0.1)
      background-color: $g-black
      position: relative
      display: flex
</style>
