<template>
  <el-row type="flex" align="middle" style="height:100%">
    <el-col :span= "2">
      <el-button plain @click="create" icon="el-icon-plus">新建</el-button>
    </el-col>
    <el-col :span= "2">
      <el-button plain @click="publish" icon="el-icon-upload2">发布</el-button>
    </el-col>
    <el-col :span= "2">
      <el-button plain @click="remove" icon="el-icon-delete">删除</el-button>
    </el-col>
    <el-col :span="4" :offset="14">
      <el-input
        placeholder="搜索"
        suffix-icon="el-icon-search"
        size ="medium"
        >
      </el-input>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods:{
    create(){
      this.$emit('create')
    },
    publish(){
      this.$emit('publish')
    },
    remove(){
      this.$emit('remove')
    },
    search(){}
  }
}
</script>

<style lang="stylus">

</style>
