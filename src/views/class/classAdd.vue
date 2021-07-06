<!--  -->

<template>
  <div class="toTop">
    <el-form :model="classes.name" :rules="rules" ref="classes" label-width="100px" class="demo-ruleForm">
  <el-form-item label="班次名称" prop="name" >
    <el-input v-model="classes.name"></el-input>
  </el-form-item>


    <el-form-item label="地址" prop="name">
    <el-input v-model="classes.address"></el-input>
  </el-form-item>

  <el-form-item label="开始时间" prop="desc">
   <div class="block">
      <el-date-picker
      v-model="classes.start_time"
      type="date"
      placeholder="选择开始时间"
      value-format="yyyy-MM-dd"
      >
    </el-date-picker>
  </div>
  </el-form-item>

  <el-form-item label="结束时间" prop="desc">
   <div class="block">
      <el-date-picker
      v-model="classes.end_time"
      type="date"
      placeholder="选择结束时间"
      value-format="yyyy-MM-dd"
      >
    </el-date-picker>
  </div>
  </el-form-item>
  
  
  <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="classes.note"></el-input>
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
        classes:{
                name: '',
                start_time: '',
                end_time:'',
                address:'北京市，北清智库商学院',
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
        const classes =this.classes
        const that = this
        this.$axios.post('http://127.0.0.1:7001/v1/class/addClass',classes)
        .then(res=>{
          this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.$router.push({ name:'classList', query: { id: 123}})

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
    },
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