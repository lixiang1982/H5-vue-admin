<!--  -->
<template>
  <div class="toTop">
 
      <el-steps el-steps :active="1" class="tobottm">
        <el-step title="步骤 1" description="确定打桩手册的名称和需要打桩的天数"></el-step>
        <el-step title="步骤 2" description="确认打桩手册，每天的习题"></el-step>
        <el-step title="步骤 3" description="发布练习册"></el-step>
    </el-steps>
    <el-form :model="workbook"  ref="classes" label-width="100px" class="demo-ruleForm">
  <el-form-item label="打桩手册名称" prop="name" >
    <el-input v-model="workbook.name"></el-input>
  </el-form-item>


    <el-form-item label="打桩天数选择" prop="name">
     <el-input-number v-model="workbook.all_day" :step="1"></el-input-number>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm('workbookInfo')">生成练习册</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>


export default {

  props: {
    isEdit: Boolean,
  },
  data() {
    return {
        workbook:{
        id:'',
        name:'',
        all_day:21,
        },

        labelPosition: 'right',

    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  methods:{
    async submitForm(name) {
        const data = {
          name:this.workbook.name,
          all_day:this.workbook.all_day
        }
        this.$axios.post('http://127.0.0.1:7001/v1/workbook/addWorkbook',data)
          .then(res=>{
            const id = res.data.data
              this.$message({
                message: '创建成功',
                type: 'success'
              })
        this.$router.push({ name:name, query: { name:this.workbook.name,all_day:this.workbook.all_day,id:id}})

        })
      
    },
    getTime(){
        console.log(this.classes.start_time)
    },
    resetForm(){
        this.classes = 
        {
                name: '',
                start_time: '',
                end_time:'',
                address:'',
        }
    }

  },
};
</script>
<style scoped>
.toTop {
   
    margin: 15px;
}
.tobottm{
    margin-bottom: 5%
}
/* @import url(); 引入css类 */
</style>