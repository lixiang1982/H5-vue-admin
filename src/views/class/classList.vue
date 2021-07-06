<!--  -->
<template >
<div class="toTop">

<div class="tobottm">
     <el-button type="primary" @click="addTitle('classAdd')">班次添加</el-button>
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
      prop="name"
      label="班次名称"
      fixed
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      fixed
      >
    </el-table-column>
    <el-table-column
      prop="start_time"
      label="开始时间"
      >
    </el-table-column>
        <el-table-column
      prop="end_time"
      label="结束时间">
    </el-table-column>
        <el-table-column
      prop="note"
      label="备注">
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
<script src="https://unpkg.com/axios/dist/axios.min.js"> </script>




<script>
import { getClass } from '@/api/user'

export default {

    data() {
      return {
          tableData: [
              {
                  id: '1',
                  name: '5.1北京班',
                  start_time:'2021-05-01',
                  end_time:'2021-05-01',
                  address:'北京市，北清智库商学院',
                  note:'',
                  
              }, 
                            {
                  id: '1',
                  name: '5.1北京班',
                  start_time:'2021-05-01',
                  end_time:'2021-05-01',
                  address:'北京市，北清智库商学院',
                  note:'',
                  
              }, 
                          {
                  id: '1',
                  name: '5.1北京班',
                  start_time:'2021-05-01',
                  end_time:'2021-05-01',
                  address:'北京市，北清智库商学院',
                  note:'',
                  
              }, 
                          {
                  id: '1',
                  name: '5.1北京班',
                  start_time:'2021-05-01',
                  end_time:'2021-05-01',
                  address:'北京市，北清智库商学院',
                  note:'',
                  
              }, 
                  
                  ]
      }
    },
//生命周期 - 创建完成（访问当前this实例）
    mounted:function(){
      const that = this
        this.$axios.get('http://127.0.0.1:7001/v1/class/getClass')
        .then(res=>{
          const data = res.data.data
          console.log(data)
          that.tableData=data
        })
    },
//生命周期 - 挂载完成（访问DOM元素）
    methods:{
      addTitle(name){
        this.$router.push({ name:name, query: { id: 123}})
      },
      getAPI(){
        this.$axios.get('/v1/class/getClass')
        // .then(response => (this.info = response))
        .then(console.log(1111))

      },
      deleteTitle(res){
        const that = this
        console.log(res.id)
        const data ={
          id:res.id
        }
        this.$axios.post('http://127.0.0.1:7001/v1/class/deleteClass',data).then(
          this.$message({
          message: '删除成功',
          type: 'success'
        })
        )
        this.$axios.get('http://127.0.0.1:7001/v1/class/getClass')
        .then(res=>{
          const data = res.data.data
          console.log(data)
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