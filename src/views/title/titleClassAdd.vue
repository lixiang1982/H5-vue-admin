<!--  -->
<template>
  <div class="toTop">
    <el-form :model="name"  ref="classes" label-width="100px" class="demo-ruleForm">
  <el-form-item label="题目类别名称" prop="title" >
    <el-input v-model="name"></el-input>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm()">立即创建</el-button>
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
        name:'',
        labelPosition: 'right',
        note:''
    };
  },
  //生命周期 - 创建完成（访问当前this实例）

  //生命周期 - 挂载完成（访问DOM元素）
  methods:{
    async submitForm() {
        const that = this
        const data ={
          name:this.name
        }
        this.$axios.post('http://127.0.0.1:7001/v1/questionsClass/addQuestionsClass',data)
        .then(res=>{
          this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.$router.push({ name:'titleClass', query: { id: 123}})

        })
    },
    getTime(){
        console.log(this.classes.start_time)
    },
    resetForm(){
           this.name='',
        this.labelPosition='right',
        this.note=''
    }

  },
};
</script>
<style scoped>
.toTop {
    width: 50%;
    margin: 15px;
}
.tobottm{
    margin-bottom: 15px;
}
/* @import url(); 引入css类 */
</style>