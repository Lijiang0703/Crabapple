<template>
  <div class="picturetown">
    <div class="">
      <el-header>
        <Topbar
          @create= "create"
          @publish= "publish"
          @remove= "remove"></Topbar>
      </el-header>
      <el-main>
        <div class="picture-list">
          <div class="wrap">
            <div class="">
              <img src="" alt="">
            </div>
            <div class="mask">
              <div class="mask-content">
                <i class="el-icon-edit"></i>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </div>

  </div>
</template>
<script>
import Topbar from "@/components/topbar"

export default {
  components:{
    Topbar
  },
  methods:{
    create(){

    },
    publish(){

    },
    remove(){
      
    }
  }
}
</script>
<style>

</style>
