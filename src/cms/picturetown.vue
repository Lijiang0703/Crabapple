<template>
  <div class="picture-town">
    <el-container class="picture-body">
      <el-header class="top_head" height="50px">
      <Topbar
        @create= "create"
        @publish= "publish"
        @remove= "remove">
      </Topbar>
    </el-header>
      <el-main @keyup.delete="remove" @keyup.enter="publish">
        <div class="picture-list">
          <div class="wrap" v-for="(item,index) in dataList" :class="{select: item.selected}" @dbclick="edit(index)">
            <div class="pic" @click="check(index)">
              <img :src="item.url" alt="">
              <i class="el-icon-success published" @click="publish"></i>
            </div>
            <!-- <div class="mask">
              <div class="mask-content">
                <i class="el-icon-edit" @click="edit"></i>
              </div>
            </div> -->
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Topbar from "@/components/topbar"
import {getPics,removePic} from "@/api/pic"

export default {
  data(){
    return {
      dataList: []
    }
  },
  components:{
    Topbar,
  },
  methods:{
    check(index){
      const list = this.dataList[index]
      list.selected = !list.selected

      this.dataList.splice(index,1,list) //数组变化的监听
    },
    create(){
      this.$router.push({
        name: 'pic_edit'
      })
    },
    publish(){ //批量发布

    },
    remove(){ //批量删除
      removePic().then(()=>{

      })
    },
    edit(index){
      this.$router.push({
        name: 'pic_edit'
      })
    }
  },
  mounted(){
    getPics().then((res)=>{
      if(res.code == 200){
        const data = res.data
        this.dataList = data;
      }
    })
  }
}
</script>
<style lang="stylus">
@import '~@/common/css/base'

.picture-town
  .picture-body
    .picture-list
      display: flex
      .wrap
        margin: 5px
        padding: 5px
        box-sizing: border-box
        box-shadow: 0 0  5px #ccc
        position: relative
        cursor: pointer
        &.select
          box-shadow: 0 0  5px red
        .pic
          width: 200px
          height: 200px
          position: relative
          img
            width: 100%
            height: 100%
          .published
            z-index: 10
            font-size: 20px
            position: absolute
            top: 0
            right: 5px
            display: inline-block
            color: green
            transition: all ease 0.3s
            &:hover
              transform: scale(1.5)
        .mask
          display: none
          transition: all ease-in-out 5s
        &:hover
          .mask
            display: block
            background: #ccc
            position: absolute
            width: 100%
            height: 100%
            left: 0
            top: 0
            .mask-content
              background: white
              margin-top: 50%
              transform: translateY(-50%)
              i
                cursor: pointer
                display: inline-block
                font-size: 30px
                line-height: 50px
                width: 50px
                height: 50px
                border-radius: 50%
                box-shadow: 0 0 5px #ccc
                border: 1px solid #ccc
</style>
