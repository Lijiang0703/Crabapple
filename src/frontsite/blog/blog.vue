<template>
  <Theme :title="title">
    <div class="blog-wrap" slot="main">
      <dl class="blog-list">
        <dt class="blog-item" v-for="item in blogs">
          <p class="title">blog的标题</p>
          <p>
            <span>2018.10.10</span>
            <span>yw</span>
          </p>
          <div class="content">
            <p>这是一个简介</p>
          </div>
        </dt>
      </dl>
    </div>
  </Theme>
</template>
<script>
import Theme from "@/components/theme/common"

export default {
  data(){
    return {
      title: "RECORD THE LEARNING",
      blogs:[
        {},{}
      ]
    }
  },
  components: {
    Theme
  }
}
</script>
<style lang="stylus">
</style>
