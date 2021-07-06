<!--  -->
<template>
<div class="toTop">
<div class="tobottm">
     <el-button type="primary">添加题目类别</el-button>
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
      label="题目类别名称"
      fixed>
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
                note:'这道题比较适合低年级',
                
            }, 
            {
                id: '2',
                class_name: '记忆类别',
                note:'这道题比较适合低年级',
                
            }, 
          {
                id: '3',
                class_name: '文学素养',
                note:'这道题比较适合低年级',
                
            }, 
            {
                id: '4',
                class_name: '英文跟读',
                note:'这道题比较适合低年级',
                
            }, 

                
                ]
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
    mounted:{
        
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