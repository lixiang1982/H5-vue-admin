<!--  -->

<template>
  <div class="toTop">

      <el-steps el-steps :active="2" class="tobottm">
        <el-step title="步骤 1" description="确定打桩手册的名称和需要打桩的天数"></el-step>
        <el-step title="步骤 2" description="确认打桩手册，每天的习题"></el-step>
        <el-step title="步骤 3" description="发布练习册"></el-step>
    </el-steps>

    <el-form :model="workbook"  ref="classes" label-width="100px" class="demo-ruleForm">
  <el-form-item label="打桩手册名称" prop="name"  >
    <el-input v-model="workbook.name" :disabled="true"></el-input>
  </el-form-item>


    <el-form-item label="打桩天数选择" prop="name">
     <el-input-number v-model="workbook.all_day" :step="1" :disabled="true"></el-input-number>
  </el-form-item>


    <el-collapse v-model="activeNames" @change="handleChange">
        <!-- <div v-for=" item in  all_day_arr" v-bind:key="item" class="collapseBorder"> -->
        <div v-for=" item in  all_day_arr" v-bind:key="item" >

            <el-collapse-item :title="'打桩期第：'+item+'天习题选择'" v-bind:name="item" >
                    <el-form-item label="选择习题" prop="desc">
                    <div class="block">
                    <!-- <div style="text-align: center"> -->
                      <el-table
                        ref="multipleTable"
                        :data="question"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleChange">
                        <el-table-column
                          type="selection"
                          width="55">
                        </el-table-column>

                        <el-table-column
                          prop="id"
                          label="id"
                          width="120">
                        </el-table-column>

                        <el-table-column
                          prop="title"
                          label="文字说明"
                          width="120">
                        </el-table-column>

                       <el-table-column
                          prop="class_name"
                          label="题目类别"
                          width="120">
                        </el-table-column>
                        
                        <el-table-column
                          prop="img_arr"
                          label="图片"
                          width="120">
                        </el-table-column>
                       
                        <el-table-column
                          prop="note"
                          label="备注"
                          width="120">
                        </el-table-column>
                        
                      </el-table>
                      <div style="margin-top: 20px">
                        <el-button @click="submit(item)" >确认当天题目</el-button>
                      </div>

                    </div>

                    </el-form-item>
            </el-collapse-item> 
       <br>
        </div>
            

</el-collapse>



  <el-form-item class="submit">
    <!-- <el-button type="primary" @click="submitForm('workbookInfo')">保存</el-button> -->
    <el-button type="primary" @click="submitData()">保存</el-button>

  </el-form-item>
</el-form>
  </div>
</template>

<script>

import { create } from 'istanbul-reports';
export default {
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
        question:[
            {id:1, title:"记忆",note:'记忆',img_arr:['111','222'],class_name:'文学素养'},
            {id:2, title:"记忆",note:'记忆',img_arr:['111','222'],class_name:'文学素养'},
            {id:3, title:"记忆",note:'记忆',img_arr:['111','222'],class_name:'文学素养'},
            {id:4, title:"记忆",note:'记忆',img_arr:['111','222'],class_name:'文学素养'}
        ],
        choose_question:[],
        workbook:{
            id:'',
            name:'',
            all_day:21,
            workbook_title:[]
        },
        workbook_question:[],
        all_day_arr :[],
        labelPosition: 'right',
    };
  },

     mounted:function(){
       //渲染每天的组件
        this.createdata()  
        const that = this
        this.$axios.get('http://127.0.0.1:7001/v1/questions/getQuestions')
        .then(res=>{
          const data = res.data.data
          console.log(data)
          that.question=data
      })

 
    },
 
  //生命周期 - 挂载完成（访问DOM元素）
  methods:{
    async submitForm(res) {
        
    },
    getTime(){
        console.log(this.classes.start_time)
    },
       createdata(){
        this.workbook.all_day =this.$route.query.all_day
        this.workbook.name = this.$route.query.name
        this.workbook.id = this.$route.query.id

        let tmp_num =1
        let tmp_arr =[]
        for(let i=0 ;i<this.workbook.all_day;i++){
            tmp_arr.push(tmp_num)
            tmp_num+=1
        }
        this.all_day_arr = tmp_arr
    },

    handleChange(val) {
       const tmp_arr = []
       val.forEach(item => {
         tmp_arr.push(item.id)
       });
    this.choose_question = tmp_arr

    },
    setWorkbook(key){

        // console.log('key:'+key)
        console.log("chosebook_title:"+JSON.stringify(this.workbook.workbook_title))
        // this.workbook.workbook_title[key] =this.choose_students

    },
    submit(item){
      console.log('day:'+item)
     this.workbook_question[item-1] = this.choose_question
     console.log(this.workbook_question)
    },

    submitData(){
      const data = {
        workbook_question:this.workbook_question,
        workbook_id:this.workbook.id
      }
      this.$axios.post('http://127.0.0.1:7001/v1/workbook/addWorkbookQusetion',data)
        .then(res=>{
          
          console.log(res)
      })
    }
  },
};
</script>
<style scoped>
.toTop {
    
    margin: 15px;
}
.collapseBorder{
    border: solid 1px rgb(180, 168, 168)
}
.submit{
    margin-top: 10px
}
.tobottm{
    margin-bottom: 15px;
}

/* @import url(); 引入css类 */
</style>