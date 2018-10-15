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
      <el-col :span="1">
        <el-dropdown trigger="click" placement="bottom-start" @command="handleCommand" v-if="commandList.length">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,key) in commandList" :key="key" :command="item.command" v-text="item.name"></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="4" :offset="13">
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
  props:{
    commandList: {
      type: Array,
      default: []
    }
  },
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
    handleCommand(command){
      this.$emit('command',command)
    },
    search(){}
  }
}
</script>

<style lang="stylus" scope>
.el-icon-more
  cursor: pointer
</style>
