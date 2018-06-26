<template>
    <el-container>
      <el-form
        rel="form"
        :model="form"
        label-width="100px"
        size="small"
        label-position="left">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="拍摄时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-container>
</template>

<script>
  export default{
    data(){
      return {
        form:{
          id: 1,
          title: '周一打卡',
          date: '2018-06-20',
          photos: 4,
          cover: '',
          author: 'cll',
          desc: '这是一个描述',
          rate:'喜爱程度',
          state: 0 //发布状态
        },
        fileList2:[]
      }
    },
    mounted:function(){
      console.log(this.props,this.key)
    },
    methods:{
      onsubmit:function(){

      },
      handlePreview:function(){

      },
      handleRemove:function(){

      }
    }
  }
</script>

<style>

</style>
