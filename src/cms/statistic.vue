<template>
    <el-container class="statistic">
      <el-header class="header" height="50px">
          <el-col :offset="10" :span="3">
            <i class="el-icon-printer"></i>
            <span>小站数据统计</span>
          </el-col>
          <el-col :offset="10" :span="1">
            <el-dropdown
              trigger="click"
              @command="handleChartType">
              <i class="el-icon-setting"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="0">折线图</el-dropdown-item>
                <el-dropdown-item command="1">饼图</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
      </el-header>
      <el-main>
        <el-tabs
          tab-position="top"
          type="border-card"
          v-model="activeName">
          <el-tab-pane
            label="内容数据"
            name="content"
            lazy>
            <ve-line
              v-show="chartType === '0'"
              :data = "contentData"
              :settings="chartSettings">
            </ve-line>
            <ve-pie
              v-show="chartType === '1'"
              :data="contentData"
              >
            </ve-pie>
          </el-tab-pane>
          <el-tab-pane
            label="用户数据"
            name="user"
            lazy>
            <ve-line
              :data = "userData"
              :settings="chartSettings">
            </ve-line>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
</template>

<script>
export default{
  data(){
    this.chartSettings = {
      labelMap:{
        date: '日期',
        photos: '照片数',
        users:'用户量'
      },
      metrics:['photos','users'],
      area: true
    }
    return {
      contentData:{
        columns: ['date','photos'],
        rows: [
          {'date':'2018-04-29','photos':10},
          {'date':'2018-06-20','photos':3},
          {'date':'2018-06-10','photos':5}
        ]
      },
      userData:{
        columns: ['date','users'],
        rows: [
          {'date':'2018-04-29','users':10},
          {'date':'2018-06-20','users':3},
          {'date':'2018-06-10','users':5},
          {'date':'2018-06-10','users':16}
        ]
      },
      activeName:'content',
      chartType:'0'
    }
  },
  methods:{
    handleChartType:function(command){
      if(this.chartType != command)
        this.chartType = command
    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'
.statistic
  .header
    background: $common_color
    color: $active_color
    i.el-icon-printer
      color: $highlight_color
      margin-right: 10px
    i.el-icon-setting
      cursor: pointer
      color: $common_text_color
      outline: none
</style>
