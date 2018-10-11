<template>
  <Theme :title="title" :noPage="noPage">
    <div class="front-blog" slot="main">
      <div class="blog-wrap">
        <dl class="blog-list">
          <dt class="blog-item" v-for="item in blogs" v-if="item.content">
            <div class="tags" v-if="item.tags">
              <div class="tag">
                <p class="triangle"></p>
                <span class="name" v-text="item.tags"></span>
              </div>
            </div>
            <p class="title" v-text="item.title"></p>
            <p class="info">
              <img src="../../assets/date.svg" alt="">
              <span v-text="item.updatedAt"></span>
              <span> | </span>
              <img src="../../assets/user.svg" alt="">
              <span v-text="item.author"></span>
            </p>
            <div class="content">
              <p v-html="item.content"></p>
            </div>
            <div class="btn-detail">
              <input type="button" value="Read More"/>
            </div>
          </dt>
        </dl>
        <div class="more">
          <input type="button" value="Get More"/>
        </div>
      </div>
    </div>
  </Theme>
</template>
<script>
import Theme from "@/components/theme/common"
import { getContent } from "@/api/content"
export default {
  data(){
    return {
      title: "RECORD THE LEARNING",
      noPage: true,
      blogs:[
        {},{}
      ]
    }
  },
  components: {
    Theme
  },
  created(){
      getContent().then((res)=>{
        const data = res.result
        this.blogs = data
      })
  }
}
</script>
<style lang="stylus">
@import '~@/common/css/base'
.front-blog
  .blog-wrap
    padding: 30px 0
    width: 60%
    /* margin-left: 50%
    transform: translateX(-50%) */
    .blog-list
      .blog-item
        /* background: $simple_color */
        width: 100%
        position: relative
        padding: 30px 40px
        margin-bottom: 40px
        box-shadow: 0 0 10px $shadow_color
        border: 1px solid $border_color
        transition: all ease 0.3s
        box-sizing: border-box
        /* &:hover
          box-shadow: 0 0 10px rgba(0,0,0,0.6)
          border-radius: 5px
          transform: scaleX(1.05) */
        .tags
          position: absolute
          top: 15px
          right: 0
          z-index: 9
          overflow: hidden
          .tag
            display: flex
            flex-wrap: nowrap
            .triangle
              width: 0
              height: 0
              border-left: 14px dashed transparent
              border-top: 14px dashed $g-black
              border-bottom: 14px dashed $g-black
            .name
              background: $g-black
              padding-left: 10px
              padding-right: 15px
              font-size: 14px
              line-height: 28px
              color: $white
              font-weight: bold
              display: inline-block
        .title
          font-size: 28px
          line-height: 28px
          margin-top: 20px
          margin-bottom: 20px
          color: $g-black
          /* font-weight: bolder */
        .info
          font-size: 14px
          line-height: 14px
          display: flex
          align-items: center
          color: $high_simple_color
          font-weight: 500
          *
            display: inline-block
            margin-right:10px
          img
            width: 14px
            margin-right: 5px
        .content
          padding: 15px 0
          font-size: 16px
          border-bottom: 1px solid $border_color
          border-top: 1px solid $border_color
          margin: 10px 0
          overflow: scroll
          font-family: 'Avenir', Helvetica, Arial, sans-serif
          color: $common_text_color
        .btn-detail
          margin-right: 10px
          text-align: right
          input
            cursor: pointer
            border-radius: 2px
            padding: 5px 10px
            font-size: 14px
            line-height: 14px
            background: $logo_gray
            color: $white
            outline: none
            border: none
    .more
      text-align: center
      margin-top: 40px
      input
        cursor: pointer
        border-radius: 4px
        padding: 10px 15px
        font-size: 16px
        line-height: 16px
        background: $logo_gray
        color: $white
        outline: none
        border: none
        transition: all ease 0.3s
        &:hover
          background: $logo_gray_high
</style>
