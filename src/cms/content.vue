<template>
    <div class="content">
      <el-container>
        <el-header class="content_head" height="50px">
          <el-row type="flex" align="middle" style="height:100%">
            <el-col :span="4" :offset="20">
              <el-input
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                size ="medium"
                >
              </el-input>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <div class="filter">

          </div>
          <div class="contentlist">
            <el-table
              :data="content_data"
              :stripe=true
              border
              height="250"
              row-click="select"
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
          </div>
          <div class="page">
            <el-pagination
              @current-change = "handleCurrentChange"
              @prev-click = "handlePre"
              @next-click = "handleNext"
              :current-page = "currentpage"
              :total="100"
              :pager-count="5"
              layout="prev,pager,next,jumper"
            ></el-pagination>
          </div>
        </el-main>
      </el-container>
    </div>
</template>

<script>
export default{
  data(){
    return {
      content_data :[
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
      currentpage: 0
    }
  },
  methods:{
    select:function(){
      console.log(this)
    },
    handleCurrentChange:function(){

    },
    handlePre:function(){

    },
    handleNext:function(){

    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'
.content
  .content_head
    background: $common_color
    border-bottom: 1px solid $common_high_color
  .content_table
    text-align: left
  .page
    position:absolute
    bottom:20px
    left:50%
    transform: translateX(-50%)
</style>
