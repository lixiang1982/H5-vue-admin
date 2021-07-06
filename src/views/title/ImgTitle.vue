<!--  -->
<template>
  <div class="toTop">
    
  <el-form :model="name" ref="classes" label-width="100px" class="demo-ruleForm">
  <el-form-item label="题目" prop="title" >      
    <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="beforeRead"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2M</div>
    </el-upload>
  </el-form-item>

  <el-form-item label="题目讲述" prop="title" >
    <el-input v-model="title"></el-input>
  </el-form-item>

    <el-form-item label="题目类别" prop="region">
      <el-select v-model="class_id" placeholder="选择题目类别">
              <el-option
              v-for="item in title_classes"
              :key="item.id"
              :label="item.title"
              :value="item.id">
              </el-option>
          </el-select>
</el-form-item> 


  
  <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="note"></el-input>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交题目</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
// import UploadFile from 'utils/upload-to-oss'
export default {
  name: 'Mind',
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
        title:'题目',
        class_id:'',
        labelPosition: 'right',
        note:'',
        title_classes:'',

        questions: [
        {
          id: 1,
          // question: require('assets/question/q1.png')
        }
      ],
      resultList: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
      mounted:function(){
    const that = this
      this.$axios.get('http://127.0.0.1:7001/v1/questionsClass/getQuestionsClass')
      .then(res=>{
        const data = res.data.data
        console.log(data)
        that.title_classes=data
      })

  },
  //生命周期 - 挂载完成（访问DOM元素）
  methods:{
    async submitForm(res) {
      const path = [
          '1111111',
          '2222222'
        ]
      const data ={
        title:this.title,
        question_class_id:this.class_id,
        note:this.note,
        path_arr:JSON.stringify(path)
      }
      this.$axios.post('http://127.0.0.1:7001/v1/questions/addQuestions',data)
      .then(res=>{
        console.log(res)
      })

    },
    handlePreview(file){
        console.log(file);
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
    async afterRead(file) {
      console.log(file)
    },
    async beforeRead(file) {  
      const type = file.type === 'image/png' ? 'png' : 'jpg'
      const ossInstance = new UploadFile({ file, type })
      const result = await ossInstance.uploadByFile(file)
      console.log(result)
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


