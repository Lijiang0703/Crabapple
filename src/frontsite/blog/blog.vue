<template>
  <Theme :title="title" :noPage="noPage" :showMenuNav="showMenuNav" class="blogpage" @toggleMenu="menuToggle">
    <div class="front-blog" slot="main">
      <div class="blog-wrap" :class="{center: !infoToggle}">
        <dl class="blog-list">
          <dt class="blog-item" v-for="(item,index) in blogs" v-if="item.content">
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
              <input type="button" value="Read More" @click="toDetail(item.id)"/>
            </div>
          </dt>
        </dl>
        <div class="more">
          <input type="button" value="Get More" @click="next"/>
        </div>
      </div>
      <div class="info-wrap" v-show="infoToggle">
        <div class="authors">
          <div class="author-info">
            <img src="../../assets/logo.png" alt="">
            <span>中二少女的blog</span>
          </div>
        </div>
        <div class="tags">
          <dl class="tag-item">
            <img src="../../assets/tag.svg" alt="">
            <span>js</span>
          </dl>
          <dl class="tag-item">
            <img src="../../assets/tag.svg" alt="">
            <span>css</span>
          </dl>
          <dl class="tag-item">
            <img src="../../assets/tag.svg" alt="">
            <span>网络</span>
          </dl>
          <dl class="tag-item">
            <img src="../../assets/tag.svg" alt="">
            <span>vue</span>
          </dl>
          <dl class="tag-item">
            <img src="../../assets/tag.svg" alt="">
            <span>react</span>
          </dl>
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
      showMenuNav: true,
      blogs:[
        {},{}
      ],
      infoToggle: false
    }
  },
  components: {
    Theme
  },
  created(){
      getContent(null,{
        published: true
      }).then((res)=>{
        const data = res.result
        this.blogs = data
      })
  },
  methods:{
    menuToggle:function(){
      this.infoToggle = !this.infoToggle
    },
    toDetail:function(id){
      //跳转到详情页
      this.$router.push({
        name: "blog_detail",
        params:{
          id: id
        }
      })
    },
    next:function() {

    }
  }
}
</script>
<style lang="stylus">
@import '~@/common/css/base'
.blogpage
  background: rgba(0,0,0,0.1)
.front-blog
  /* background: rgba(0,0,0,0.1) */
  display: flex
  position: relative
  .blog-wrap
    padding: 30px 0
    width: 70%
    &.center
      margin-left: 50%
      transform: translateX(-50%)
    .blog-list
      .blog-item
        /* background: $simple_color */
        background: rgba(255,255,255,0.5)
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
          text-align: center
          font-weight: bolder
        .info
          font-size: 14px
          line-height: 14px
          display: flex
          align-items: center
          color: $high_simple_color
          font-weight: 500
          justify-content: center
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
  .info-wrap
    width: 20%
    position: absolute
    right: 50px
    padding: 20px 15px
    .authors
      /* display: none */
      padding: 10px 15px
      border-bottom: 2px dashed #ccc
      .author-info
        display: flex
        flex-direction: column
        align-items: center
        img
          width: 60px
          height: 60px
          border-radius: 50%
          margin-bottom: 10px
        span
          font-size: 16px
          display: block
    .tags
      display: flex
      flex-wrap: wrap
      padding: 20px 15px
      .tag-item
        display: flex
        align-items: center
        padding: 5px
        img
          width: 20px
          height: 20px
        /* span  */

</style>
