<template>
    <el-container class="content">
      <el-header class="top_head" height="50px">
        <Topbar
        @create= "create"
        @publish= "publish"
        @remove= "remove">
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
            height="250"
            @row-dblclick="select"
            class="content_table">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop ="title"
              sortable
              label="标题">
            </el-table-column>
            <el-table-column
              prop ="date"
              sortable
              label="日期">
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
            layout="prev,pager,next,jumper"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
</template>

<script>
// import contentEdit from "@/cms/contentEdit"
import Topbar from "@/components/topbar"
import { getContent,removeContent } from '@/api/content'

export default{
  data(){
    return {
      contentList :[
        {
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
        {
          id: 2,
          title: '周二打卡',
          date: '2018-06-12',
          photos: 4,
          cover: '',
          author: 'cll',
          desc: '这是一个描述',
          rate:'喜爱程度',
          state: 0 //发布状态
        },
        {
          id: 2,
          title: '周三打卡',
          date: '2018-06-01',
          photos: 4,
          cover: '',
          author: 'cll',
          desc: '这是一个描述',
          rate:'喜爱程度',
          state: 0 //发布状态
        }
      ],
      currentpage: 0,
      showDialog: false,
      currentData: {}
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData:function(){
      getContent(null,{
        page: 1,
        size: 20
      }).then((res)=>{
        const data = res.result
        this.contentList = data
      })
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
    },
    create(){
      this.$router.push({
        name: 'c_edit'
      })
    },
    publish(){

    },
    remove(){

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
  .page
    position:absolute
    bottom:20px
    left:50%
    transform: translateX(-50%)
.content_dialog
  width: 500px
</style>
