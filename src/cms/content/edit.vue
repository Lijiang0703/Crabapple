<template>
    <el-container class="c_edit">
      <el-header style="padding: 0">
        <InfoTopbar></InfoTopbar>
      </el-header>
      <el-main>
        <el-form
          rel="form"
          :model="form"
          label-width="100px"
          size="small"
          label-position="left">
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="正文" class="editor">
            <quillEditor
            v-model= "form.content"
            :options = "editorOptions"
            @blur= "change"
            >
            </quillEditor>
          </el-form-item>
          <el-form-item label="作者">
            <el-autocomplete
              v-model="form.author"
              :fetch-suggestions="querySearch"
              placeholder="作者">
            </el-autocomplete>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <el-row>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button type="success" @click="onTempSave">暂存</el-button>
          <el-button type="danger" @click="onCancel">取消</el-button>
        </el-row>
      </el-footer>
    </el-container>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import { quillEditor } from 'vue-quill-editor'
  import InfoTopbar from '@/components/infoTopbar'

  import { create } from '@/api/content'

  export default{
    data(){
      return {
        form:{
          id: 1,
          title: '周一打卡',
          date: '2018-06-20',
          photos: 4,
          content: "",
          cover: '',
          author: 'cll',
          desc: '这是一个描述',
          rate:'喜爱程度',
          state: 0 //发布状态
        },
        fileList2:[],
        editorOptions:{
          placeholder: "write your blog"
        },
        authors:[
          {
            value: "cll"
          },
          {
            value: 'yw'
          }
        ]
      }
    },
    mounted:function(){
      console.log(this.props,this.key)
    },
    components:{
      quillEditor,
      InfoTopbar
    },
    methods:{
      change: function(){

      },
      querySearch(queryString, cb) {
        var authors = this.authors;
        var results = queryString ? authors.filter(function(author){
          return author.value.toLowerCase().indexOf(queryString.toLowerCase())=== 0
        }) : authors;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      onSubmit:function(){
        // console.log(form.content)
        const form = this.form
        const blog = {
          title: form.title,
          content: form.content,
          author: form.author
        }
        create(blog).then((res)=>{
          console.log(res)
        })
      },
      onTempSave:function(){

      },
      onCancel:function(){

      },
      handlePreview:function(){

      },
      handleRemove:function(){

      }
    }
  }
</script>

<style lang="stylus">
.c_edit
  .editor.el-form-item__content
    height: 300px
  .quill-editor
    height: 70%
  .el-footer
    margin-top: 30px
</style>
