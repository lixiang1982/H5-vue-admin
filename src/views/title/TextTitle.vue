<!--  -->
<template>
  <div class="toTop">
    <el-form :model="name" :rules="rules" ref="classes" label-width="100px" class="demo-ruleForm">
  <el-form-item label="题目" prop="title" >
    <el-input v-model="name"></el-input>
  </el-form-item>


    <el-form-item label="题目类别" prop="region">
    <el-select v-model="class_id" placeholder="选择题目类别">
      <el-option label="记忆类" value="1"></el-option>
      <el-option label="数学思维" value="2"></el-option>
      <el-option label="文学素养" value="3"></el-option>
    </el-select>
</el-form-item> 


  
  <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="note"></el-input>
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
        class_id:'',
        labelPosition: 'right',
        note:''
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  methods:{
    async submitForm(res) {
        console.log(this.student)
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
    width: 50%;
    margin: 15px;
}
/* @import url(); 引入css类 */
</style>