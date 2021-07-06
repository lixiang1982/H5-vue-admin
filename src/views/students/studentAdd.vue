<!--  整体添加年级  -->
<template>
  <div class="toTop">

      <warning></warning>
    <el-form :model="student.name" :rules="rules" ref="student" label-width="100px" class="demo-ruleForm">
  <el-form-item label="学员名称" prop="name" >
    <el-input v-model="student.name"></el-input>
  </el-form-item>
    <el-form-item label="昵称" prop="name">
    <el-input v-model="student.nickname"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="region">
    <el-select v-model="student.sex" placeholder="性别">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="年级" prop="region">
    <el-select v-model="student.grade" placeholder="选择年级">
      <el-option label="一年级" value="一年级"></el-option>
      <el-option label="二年级" value="二年级"></el-option>
      <el-option label="三年级" value="三年级"></el-option>
      <el-option label="四年级" value="四年级"></el-option>
      <el-option label="五年级" value="五年级"></el-option>
      <el-option label="六年级" value="六年级"></el-option>
      <el-option label="七年级" value="七年级"></el-option>
      <el-option label="八年级" value="八年级"></el-option>
      <el-option label="九年级" value="九年级"></el-option>

    </el-select>
</el-form-item> 
    <el-form-item label="身高(CM)" prop="region">
       <el-input-number v-model="student.height" :step="10" step-strictly></el-input-number> 
  </el-form-item>
      <el-form-item label="体重(KG)" prop="region">
       <el-input-number v-model="student.weight" :step="5" step-strictly></el-input-number> 
  </el-form-item>
   <el-form-item label="学校" prop="name">
    <el-input v-model="student.school"></el-input>
  </el-form-item>
    <el-form-item label="地址" prop="name">
    <el-input v-model="student.address"></el-input>
  </el-form-item>
   <el-form-item label="电话" prop="name">
    <el-input v-model="student.phone"></el-input>
  </el-form-item>
    <el-form-item label="头像" prop="name">
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2M</div>
        </el-upload>
  </el-form-item>
  <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="student.note"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">立即创建</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import Sticky from "../../components/Sticky/index";
import Warning from "./components/Warning";
// import Warning from './Warning.vue';
export default {
  components: { Sticky, Warning },
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
        student:{
            name:'',
            nickname:'',
            sex:'',
            note:'',
            height:'',
            weight:'',
            school:'',
            phone:'',
            photo:'11111',
            address:'',
            grade:'',
            
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  methods:{
    async submitForm(res) {
      const student =this.student
      const that = this
      console.log(student)
      this.$axios.post('http://127.0.0.1:7001/v1/students/addStudents',student)
      .then(res=>{
          this.$message({
          message: '添加成功',
          type: 'success'
        });
        })
    },
  //生命周期 - 创建完成（访问当前this实例）
    addTitle(name){
        this.$router.push({ name:name, query: { id: 123}})
      },

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