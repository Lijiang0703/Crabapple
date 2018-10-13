<template>
    <el-container class="content">
      <el-header class="top_head" height="50px">
        <Topbar
        :commandList = "moreConfig"
        @create= "create"
        @publish= "publish"
        @remove= "remove"
        @command= "handleCommand">
        </Topbar>
      </el-header>
      <el-main>
        <div class="filter">
        </div>
        <div class="contentlist">
          <el-table
            :data="contentList"
            :stripe=true
            :highlight-current-row = true
            border
            ref="multiBlogs"
            @row-dblclick="select"
            @selection-change="handleSelectionChange"
            class="content_table">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              sortable
              label="标题"
              width="150">
              <template slot-scope="scope">
                <span v-text="scope.row.title"></span>
                <i class="el-icon-star-on published" v-if="scope.row.published"></i>
              </template>
            </el-table-column>
            <el-table-column
              prop= "createAt"
              :formatter = "parseDate"
              sortable
              label="日期">
            </el-table-column>
            <el-table-column
              prop ="tags"
              label="分类"
              width="150">
            </el-table-column>
            <el-table-column
              prop ="desc"
              label="描述">
            </el-table-column>
          </el-table>
          <!-- <el-dialog title="内容编辑" :visible.sync="showDialog"> -->
            <!-- <contentEdit :form="currentData"></contentEdit> -->
          <!-- </el-dialog> -->
        </div>
        <div class="page">
          <el-pagination
            @current-change = "handleCurrentChange"
            :current-page = "currentpage"
            :total="100"
            :pager-count="5"
            background
            layout="prev,pager,next,jumper"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
</template>

<script>
// import contentEdit from "@/cms/contentEdit"
import Topbar from "@/components/topbar"
import { getContent,removeContent,updateContent } from '@/api/content'

export default{
  data(){
    return {
      contentList :[],
      currentpage: 0,
      showDialog: false,
      currentData: {},
      moreConfig: [
        {
          name: "取消发布",
          command: 1
        }
      ],
      selections: []
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData:function(page,size){
      getContent(null,{
        page: page,
        size: size
      }).then((res)=>{
        const data = res.result
        this.contentList = data
      })
    },
    parseDate(row,column){
      const date = new Date(row.createdAt)
      return date.toLocaleString()
    },
    select:function(selection,row){
      this.$router.push({
        name: 'c_edit',
        params: {
          id: selection.id
        }
      })
    },
    handleCurrentChange:function(current){
      console.log(current)
      this.getData(current)
    },
    handleSelectionChange(val){
      this.selections = val
    },
    create(){
      this.$router.push({
        name: 'c_edit'
      })
    },
    publish:function(unPublish){
      const ids = _.map(this.selections,selection=>{
        return selection.id
      })
      const $this = this;
      updateContent({
        data:{
          published: !unPublish
        },
        ids: ids
      }).then((res)=>{
        //更新数据
        for(let i=0;i<$this.contentList.length;i++){
          const blog = $this.contentList[i]
          if(!ids.length) break;
          const index = ids.indexOf(blog.id)
          if(index!=-1){
              blog.published = !unPublish
              ids.splice(index,1)
          }
        }
        $this.$refs.multiBlogs.clearSelection()
        $this.selections = []
      })
    },
    remove(){

    },
    handleCommand(command){
      switch (command) {
        case 1:
          this.publish(true)
          break;
        default:
          break;
      }
    }
  },
  watch:{
    '$route':function(to,from){
      if(from.name == "c_edit")
        this.getData()
    }
  },
  components:{
    // contentEdit,
    Topbar
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'
.content
  .content_table
    text-align: left
    tr
      cursor: pointer
      .published
        color: $site_strong
        font-size: 16px
        margin-left: 10px
  .page
    position:absolute
    bottom:20px
    left:50%
    transform: translateX(-50%)
.content_dialog
  width: 500px
</style>
