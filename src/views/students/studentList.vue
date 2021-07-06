<!--  -->
<template>
<div class="toTop">
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
      label="姓名"
      fixed
      width="70">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      width="70">
    </el-table-column>
        <el-table-column
      prop="sex"
      label="性别"
      width="50">
    </el-table-column>
          <el-table-column
      prop="grade"
      label="年级"
      width="120">
    </el-table-column>
        <el-table-column
      prop="height"
      label="身高（CM）"
      width="110">
    </el-table-column>
    <el-table-column
      prop="weight"
      label="体重（KG）">
    </el-table-column>
        <el-table-column
      prop="phone"
      label="电话">
    </el-table-column>
        <el-table-column
      prop="photo"
      label="照片">
    </el-table-column>
            <el-table-column
      prop="address"
      label="地址">
    </el-table-column>

    <el-table-column label="操作">
      <el-button type="success" size="mini">详细</el-button>
      <el-button type="primary" size="mini" @click="handleUpdate(row)">
        修改
      </el-button>

    </el-table-column>

  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</div>
          

</template>

<script>
import Detail from './components/Detail'

export default {
    components:{
        Detail
    },
    data() {
    return {
        total:10,
        tableData: [
            {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
               {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
               {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
                        {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
                        {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
                        {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
                        {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
                        {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
                        {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 
                        {
                id: '1',
                name: '王小虎',
                sex:'男',
                height:'170',
                weight:'60',
                school:'无',
                phone:'123123',
                photo:'',
                address: '上海市普陀区金沙江路 1518 弄',
                grade:'3年级',
            }, 

                
                ]
    }
},

//生命周期 - 创建完成（访问当前this实例）
mounted:function(){
  console.log(111)
  const that = this
    this.$axios.get('http://127.0.0.1:7001/v1/students/getStudents')
    .then(res=>{
      const data = res.data.data
      console.log(data)
      that.tableData=data
    })
},
//生命周期 - 挂载完成（访问DOM元素）
    methods:{
        handleUpdate(row) {
              this.temp = Object.assign({}, row) // copy obj
              this.temp.timestamp = new Date(this.temp.timestamp)
              this.dialogStatus = 'update'
              this.dialogFormVisible = true
              this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
              })

              
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
</style>