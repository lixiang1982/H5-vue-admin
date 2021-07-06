<!--  -->
<template slot-scope="{row}">
<div class="toTop">
<div class="tobottm">
     <el-button type="primary" @click="addTitle('imgTitle')">添加图片题目</el-button>
     
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
      prop="class_name"
      label="题目类别"
      fixed
      width="150">
    </el-table-column>
    <el-table-column
      prop="title"
      label="题目"
      fixed
      >
    </el-table-column>

    <el-table-column
      prop="path"
      label="题目"
      fixed
      >
    </el-table-column>


    <el-table-column
      prop="note"
      label="备注">
    </el-table-column>

    <el-table-column label="操作">
         <el-button type="warning">修改</el-button>
         <el-button type="danger">删除</el-button>
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
                class_name: '数学思维',
                title:'123+456 =？',
                note:'这道题比较适合低年级',
                
            }, 
            {
                id: '2',
                class_name: '记忆类别',
                title:'123+456 =？123+456 =？123+456 =？123+456 =？123+456 =？123+456 =？123+456 =？',
                note:'这道题比较适合低年级',
                
            }, 
          {
                id: '3',
                class_name: '文学素养',
                title:'123+456 =？',
                note:'这道题比较适合低年级',
                
            }, 
            {
                id: '4',
                class_name: '英文跟读',
                title:'123+456 =？123+456 =？123+456 =？123+456 =？123+456 =？123+456 =？123+456 =？',
                note:'这道题比较适合低年级',
                
            }, 

                
                ]
    }
},
//生命周期 - 创建完成（访问当前this实例）
      mounted:function(){
    const that = this
      this.$axios.get('http://127.0.0.1:7001/v1/questions/getQuestions')
      .then(res=>{
        const data = res.data.data
        console.log(data)
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