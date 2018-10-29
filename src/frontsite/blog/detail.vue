<template>
  <Theme noPage="true" :title="title">
    <div class="blog_detail" slot="main">
      <div class="blog_wrap">
        <div class="wrap">
          <!-- <div class="title">
            <span v-text="title"></span>
          </div> -->
          <div class="content" v-html="content">
          </div>
          <div class="tool">
              <span>时间: 2018/9/12</span>
              <span>作者: yw</span>
              <img class="back" src="../../assets/back.png" alt="" @click="back">
          </div>
        </div>
      </div>
    </div>
  </Theme>
</template>
<script>
import { getContent } from "@/api/content"

import Theme from "@/components/theme/common"
export default {
  data(){
    return {
      title:"",
      content:"",
      id: ""
    }
  },
  methods:{
    getBlog:function(id){
      getContent(id).then((data)=>{
        if(!data.result[0]) data.result[0] = {}
        this.title = data.result[0].title
        this.content = data.result[0].content
      })
    },
    updateRouter:function(){
      const id = this.$route.params.id
      if(id!= this.id){
        this.getBlog(id)
        this.id = id
      }
    },
    back:function(){
      this.$router.push({
        name: 'blog'
      })
    }
  },
  components:{
    Theme
  },
  created: function(){
    this.updateRouter()
  },
  watch:{
    '$route':function(to,from){
      this.updateRouter()
    }
  }
}
</script>
<style lang="stylus">
.blog_detail
  width: 100%
  /* height: 1024px */
  /* background: url("../../assets/back_star.jpeg") no-repeat */
  /* background: #ccc */
  /* background-size: cover */
  padding: 20px 0
  .blog_wrap
    background: rgba(255,255,255,0.5)
    width: 70%
    padding: 10px 15px
    box-sizing: border-box
    overflow: scroll
    margin-left: 50%
    transform: translateX(-50%)
    /* border: 1px solid #fff */
    text-align: left
    .title
      font-size: 20px
    .tool
      font-size: 14px
      display: flex
      flex-direction: column
      position: relative
      span
        margin-bottom: 5px
      .back
        position: absolute
        cursor: pointer
        right: 0
        bottom: 0
        width: 25px
        height: 25px
        transition: all ease 0.2s
        &:hover
          transform: scale(1.2)
</style>
