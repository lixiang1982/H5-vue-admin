<!--  -->
<template>
<div class="toTop">

<div class="tobottm">
     <el-button type="primary" @click="addTitle('workbookAdd')">打桩手册添加</el-button>
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
      label="打桩手册名称"
      fixed>
    </el-table-column>

    <el-table-column
      prop="create_at"
      label="创建时间"
      width="150"
      >
    </el-table-column>

    <el-table-column
      prop="note"
      label="备注">
    </el-table-column>

   
    <el-table-column label="操作">
          <el-button @click="drawer = true" type="primary" size="mini" style="margin-left: 16px;">
          详细
        </el-button>
         <!-- <el-button size="mini" type="primary">详细</el-button> -->
         <el-button size="mini" type="warning">修改</el-button>
         <el-button size="mini" type="danger">删除</el-button>
    </el-table-column>
  </el-table>
      <el-drawer
        label="rtl"
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false">
           <!-- <div v-for=" item in  work_book_title" v-bind:key="item" >
             <div>
               第{{item.day_num}}天打桩题目
               
               <div class="demo-image__placeholder" v-for=" title in  item.title" v-bind:key="title" >
                  <div class="block">
                    <span class="demonstration">默认</span>
                    <el-image :src="title.title_path[0]"></el-image>
                  </div>
               </div>
             </div>
           </div> -->

          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
               <li v-for="item in  work_book_title" class="infinite-list-item" v-bind:key="item">

                  <!-- <div> -->
                  第{{item.day_num}}天打桩题目
                  
                  <!-- <div class="demo-image__placeholder" v-for=" title in  item.title" v-bind:key="title" >
                      <div class="block">
                        <span class="demonstration">默认</span>
                        <el-image :src="title.title_path[0]"></el-image>
                      </div>
                  </div>
                </div> -->

               </li>

          </ul>
      </el-drawer>
</div>
</template>

<script>

export default {

    data() {
      return {
          drawer: false,
          wook_book_id:'',
          tableData: [
              {
                  id: '1',
                  name: '5天特训营打桩手册V1.0',
                  create_at:'2021-05-01',
                  note:'适用于大班的打桩练习手册',
              },               {
                  id: '2',
                  name: '5天特训营打桩手册V1.0',
                  create_at:'2021-05-01',
                  note:'适用于大班的打桩练习手册',
              },               {
                  id: '3',
                  name: '5天特训营打桩手册V1.0',
                  create_at:'2021-05-01',
                  note:'适用于大班的打桩练习手册',
              },               {
                  id: '4',
                  name: '5天特训营打桩手册V1.0',
                  create_at:'2021-05-01',
                  note:'适用于大班的打桩练习手册',
              },               {
                  id: '5',
                  name: '5天特训营打桩手册V1.0',
                  create_at:'2021-05-01',
                  note:'适用于大班的打桩练习手册',
              },               {
                  id: '6',
                  name: '5天特训营打桩手册V1.0',
                  create_at:'2021-05-01',
                  note:'适用于大班的打桩练习手册',
              }, 
                  
          ],
          work_book_title:[
              {
                day_num:1,
                title:[
                  {
                    serial_number:1,
                    title_path:[
                      'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                      'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
                    ]
                  },
                  {
                    serial_number:2,
                    title_path:['https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg']
                  },
                  {
                    serial_number:3,
                    title_path:['https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg']
                  },                  
                ]
              },
             {
                day_num:2,
                title:[
                  {
                    serial_number:4,
                    title_path:[
                      'https://pics5.baidu.com/feed/64380cd7912397ddf37f2d0d843f0ebfd1a287ff.jpeg?token=38f35be8c5adfa5ff894957abc042dfe',
                      'https://pics5.baidu.com/feed/64380cd7912397ddf37f2d0d843f0ebfd1a287ff.jpeg?token=38f35be8c5adfa5ff894957abc042dfe'
                    ]
                  },
                  {
                    serial_number:5,
                    title_path:['https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg']
                  },
                  {
                    serial_number:6,
                    title_path:['https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg']
                  },                  
                ]
              },
            ]
      
      
      }
    },
 
//生命周期 - 创建完成（访问当前this实例）
     mounted:function(){
       //渲染每天的组件
        const that = this
        this.$axios.get('http://127.0.0.1:7001/v1/workbook/getWorkbook')
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
.el-drawer.rtl{
 
    overflow: scroll
}


.tobottm{
    margin-bottom: 15px;
}
</style>