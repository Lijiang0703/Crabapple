<template>
  <div class="pic-edit">
    <el-container>
      <el-header style="padding: 0">
        <InfoTopbar></InfoTopbar>
      </el-header>
      <el-main>
        <el-form ref="form" :model="picData" label-position="left" :rules="rules" class="form">
          <el-form-item label="标题:">
            <el-input :model="picData.title" placeholder="name"></el-input>
          </el-form-item>
          <el-form-item label="图片地址/上传图片:">
            <el-upload
              :file-list="picData.pictures"
              action="http://upload.qiniup.com"
              :data="picData.uploadData"
              :before-upload="handleBeforeUpload"
              :on-success="handleSuccess"
              :on-error="handleError"
              list-type="pictures">
              <el-button size="small" type="primary">upload</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="描述:">
            <el-input type="textarea" :model="picData.describe" placeholder="describe"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="confirm">确定</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import getToken from "../../api/upload"
import InfoTopbar from '@/components/infoTopbar'

export default {
  data(){
    return {
      picData:{
        title: "",
        // address: "",
        describe: "",
        pictures:[],

        uploadData: {
        } //上传时带的参数
      },
      rules:{
        title: [
          {required: true, trigger: 'blur',message: '请输入标题'}
        ],
        describe: [
          {required: true, trigger: 'blur',message: '请输入标题'}
        ],
        pictures:[],
        uploadData: []
      }
    }
  },
  components:{
    InfoTopbar
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
    confirm(){
      //需要去更新数据
      this.$message({
        type: 'info',
        message: '创建成功！'
      })
      this.$router.push({
        name: 'picture'
      })
    },
    cancel(){
      //如果图片上传了，需要把数据库里的数据删除，或者把信息存储到本地
      this.$message({
        type: 'info',
        message: '新增取消！'
      })
      this.$router.push({
        name: 'picture'
      })
    }
  }
}
</script>
<style lang="stylus">
@import '~@/common/css/base'
.pic-edit
  form
    width: 50%
    padding: 10px
    margin-top: 10px
    margin-left: 50%
    transform: translateX(-50%)
    box-shadow: 0 0 5px $shadow_color
    label
      font-size: 16px
    textarea
      height: 150px
</style>
