<!--  -->
<template slot-scope="{row}">
<div class="toTop">
<div class="tobottm">
     <el-button type="primary" @click="addTitle('titleClassAdd')">添加题目类别</el-button>
</div>

      <el-table
    :data="tableData"
    style="width: 100%"
    border
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="id"
      label="id"
      fixed
      width="50">
    </el-table-column>
    <el-table-column
      prop="title"
      label="题目类别名称"
      fixed
      >
    </el-table-column>


    <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button  type="text" size="small">详细</el-button>
          <el-button @click="deleteTitle(scope.row)" type="text" size="small">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>

export default {

    data() {
    return {
        tableData: [
            {
                id: '1',
                title_class_id: '数学思维',
                note:'这道题比较适合低年级',
                
            }, 
            {
                id: '2',
                title_class_id: '记忆类别',
                note:'这道题比较适合低年级',
                
            }, 
          {
                id: '3',
                title_class_id: '文学素养',
                title:'123+456 =？',
                note:'这道题比较适合低年级',
                
            }, 
            {
                id: '4',
                title_class_id: '英文跟读',
                note:'这道题比较适合低年级',
                
            }, 

                
                ]
    }
},
//生命周期 - 创建完成（访问当前this实例）
 
     mounted:function(){
      const that = this
        this.$axios.get('http://127.0.0.1:7001/v1/questionsClass/getQuestionsClass')
        .then(res=>{
          const data = res.data.data
          that.tableData=data
        })

    },
//生命周期 - 挂载完成（访问DOM元素）
    methods:{
        addTitle(name){
          // this.$message({
          //   message: 'The title has been restored to the original value',
          //   type: 'warning'
          // })
          this.$router.push({ name:name, query: { id: 123}})
        },
        deleteTitle(res){
          const that = this
          console.log(res.id)
          const data ={
            id:res.id
          }
          this.$axios.post('http://127.0.0.1:7001/v1/questionsClass/deleteQuestionsClass',data).then(
            this.$message({
            message: '删除成功',
            type: 'success'
          })
          )
        this.$axios.get('http://127.0.0.1:7001/v1/questionsClass/getQuestionsClass')
        .then(res=>{
          const data = res.data.data
          that.tableData=data
        })
      }
          
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .toTop {
    margin: 15px;
}
.tobottm{
    margin-bottom: 15px;
}
</style>