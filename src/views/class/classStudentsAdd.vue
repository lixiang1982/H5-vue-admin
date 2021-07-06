<!--  -->
<template>
  <div class="toTop">
    <el-form :model="classes.name" :rules="rules" ref="classes" label-width="100px" class="demo-ruleForm">
    <el-form-item label="选择班次" prop="name" >
        <el-select v-model="choose_classes" placeholder="请选择班次">
            <el-option
            v-for="item in classes"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            </el-option>
        </el-select>
  </el-form-item>


  <el-form-item label="选择学员" prop="desc">
   <div class="block">
  <!-- <div style="text-align: center"> -->
    <div>
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="choose_students"
      filterable
      :left-default-checked="[]"
      :right-default-checked="[]"
      :render-content="renderFunc"
      :titles="['学员名单', '确认学员名单']"
      :button-texts="['删除', '添加']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      :props="{
        key: 'id',
        label: 'name'
        }"

      @change="handleChange"
      :data="students">
      <!-- <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button> -->
    </el-transfer>
  </div>

  </div>

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
        students:[
            {id:1, name:"李响",disabled:0},
            {id:2, name:"李响2",disabled:0},
            {id:3, name:"李响3",disabled:0},
            {id:4, name:"李响4",disabled:0},
            {id:5, name:"李响5",disabled:0},
        ],
        choose_students:[],
        choose_classes:'',

        classes:[
            {
                id:'1',
                name: '北京市5.1班',
                start_time: 1,
                end_time:'',
                address:'北京市，北清智库商学院',
        },
                  {
                id:'2',
                name: '苏州6.1班',
                start_time: 1,
                end_time:'',
                address:'北京市，北清智库商学院',
        },
        ],
        labelPosition: 'right',
        renderFunc(h, option) {
            return <span>{ option.id } - { option.name }</span>;
        }
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
    mounted:function(){
      const that = this
        this.$axios.get('http://127.0.0.1:7001/v1/class/getClass')
        .then(res=>{
          const data = res.data.data
          console.log(data)
          that.classes=data
        })

        this.$axios.get('http://127.0.0.1:7001/v1/students/getStudents')
        .then(res=>{
          const data = res.data.data
          console.log(data)
          that.students=data
        })

    },
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
    },
    handleChange(value, direction, movedKeys) {
        console.log(this.choose_classes);
      },
      submitForm(){
               console.log(this.choose_classes);
        const data={
          class_id:this.choose_classes,
          students:JSON.stringify(this.choose_students)
        }
        this.$axios.post('http://127.0.0.1:7001/v1/class/updateClassStudents',data)
        .then(res=>{
          const data = res.data.data
          that.tableData=data
          this.$message({
            message: '添加成功',
            type: 'success'
           })
        })
        this.$router.push({ name:'classList', query: { id: 123}})
      }
  },
};
</script>
<style scoped>
.toTop {
    width: 80%;
    margin: 15px;
}
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
/* @import url(); 引入css类 */
</style>