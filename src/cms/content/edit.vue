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
          <el-form-item label="标签">
            <!-- <el-autocomplete
              v-model="form.tags"
              placeholder="">
            </el-autocomplete> -->
            <el-input v-model="form.tags"></el-input>
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

  import { createContent,updateContent,getContent } from '@/api/content'
  import { getUrlQuery } from '@/common/js/util'
  import _ from 'lodash'

  export default{
    data(){
      return {
        form:{},
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
    props:{
      id: {
        type: [String,Number],
        default: ""
      }
    },
    mounted: function(){
      this.getData()
    },
    components:{
      quillEditor,
      InfoTopbar
    },
    methods:{
      getData: function(){
        const id = this.$route.params.id
        const local = window.localStorage.getItem('blogs') || "{}"
        const tempBlog = JSON.parse(local)[id]

        if(tempBlog){
          this.$confirm('是否应用本地修改内容','提示',{
             confirmButtonText: '确定',
             cancelButtonText: '取消',
             type: 'info'
          }).then(()=>{
            this.$message({
              type: 'info',
              message: '应用成功!'
            });
            this.form = tempBlog
          }).catch(()=>{
            this.$message({
              type: 'info',
              message: '取消本地修改!'
            });
            this.getContentById(id)
          })
        }else{
          this.getContentById(id)
        }
      },
      getContentById:function(id){
        if(id)
          getContent(id).then((res)=>{
            this.form = res.result[0]
          })
      },
      change: function(){ //文本change
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
        const form = this.form
        const blog = _.pick(form,['title','content','author','tags','id'])
        if(blog.id){
          // 是否要全部更新
          updateContent(blog).then((res)=>{
            //同时取消本地的修改
            this.removeTempSave(blog.id)
            this.back()
          })
        }
        else{
          createContent(blog).then((res)=>{
            this.back()
          })
        }
      },
      onTempSave:function(){
        const form = _.pick(this.form,['title','content','author','tags','id'])
        const local = window.localStorage.getItem('blogs') || "{}"
        const tempBlog = JSON.parse(local)

        tempBlog[form.id] = form
        window.localStorage.setItem('blogs',JSON.stringify(tempBlog))
        this.$message({
          type: 'info',
          message: '暂存成功!'
        })
        this.back()
      },
      removeTempSave:function(id){
        const local = window.localStorage.getItem('blogs')
        if(local){
          let tempBlog = JSON.parse(local)
          const temp = tempBlog[id]

          if(temp){
            _.unset(tempBlog,[id])
            console.log(tempBlog)
            window.localStorage.setItem('blogs',JSON.stringify(tempBlog))
          }
        }
      },
      onCancel:function(){
        this.back()
      },
      back:function(){
        this.$router.push({
          name: 'content'
        })
      }
    },
    watch:{
      '$route':function(to,from){
        // 复用组件
        if(to.name == "c_edit")
          this.getData()
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
