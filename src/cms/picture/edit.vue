<template>
  <div class="pic-edit">
    <div class="title">
      <span>新建</span>
    </div>
    <el-form ref="form" :model="picData">
      <el-form-item label="title">
        <el-input :model="picData.title" placeholder="name"></el-input>
      </el-form-item>
      <el-form-item label="图片地址/上传图片">
        <el-upload
          :file-list="picData.pictures"
          action="http://upload.qiniup.com"
          :data="picData.uploadData"
          :before-upload="handleBeforeUpload"
          :on-success="handleSuccess"
          :on-error="handleError"
          list-type="pictures">
          <el-button>upload</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" :model="picData.describe" placeholder="describe"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="confirm">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import getToken from "../../api/upload"
export default {
  data(){
    return {
      picData:{
        title: "",
        address: "",
        describe: "",
        pictures:[],

        uploadData: {
        } //上传时带的参数
      }
    }
  },
  components:{

  },
  mounted(){
    console.log(1)
  },
  methods:{
    handleBeforeUpload(){
      const $this = this
      return getToken().then((res)=>{
        const token = res.data.token
        $this.picData.uploadData.token = token
      })
    },
    handleSuccess(res){
      console.log(res)
      // this.picData.pictures.push()
    },
    handleError(res){
      console.log(res)
    },
    confirm(){},
    cancel(){}
  }
}
</script>
<style>

</style>
