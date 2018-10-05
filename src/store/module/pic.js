const pic = {
  state: {
     checkedList:[] //当前选中的pic
    ,onEditList: [] //正在编辑的pic
    ,list: []
  },
  actions: {
    add({state},list){
      state.list = list
    },
    addCheckedList({state},list){
      let checked = state.checkedList
      if(typeof list == "String")
        checked.push(list)
      else if(typeof list == "Array")
        checked = checked.concat(list)
    },
    cancelCheckedList({state},list){
      let checked = state.checkedList
      if(typeof list == "String"){
          const index = checked.indexOf(list)
          checked.splice(index,1)
      }
      else if(typeof list == "Array"){ //数组去重，自己考虑一下

      }
        // checked = checked.concat(list)
    },
    clearCheckedList({state}){
      state.checkedList = []
    }
  },
  mutations: {

  }
}

export default pic
