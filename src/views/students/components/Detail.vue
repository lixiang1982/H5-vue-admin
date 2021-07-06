<!--  -->
<template>
    <div class="toTop">
            <el-form>
        <sticky>
            <warning class="toTop"></warning>
            <el-butten>显示帮助</el-butten>
            <el-button>{{isEdit ? '新增学员':'修改学员'}}</el-button>


        </sticky>
    </el-form>
    </div>
</template>

<script>
import Sticky from '../../../components/Sticky/index'
import Warning from './Warning';
// import Warning from './Warning.vue';
export default {
    components:{Sticky,Warning},
    props:{
        isEdit:Boolean
    },
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>

.toTop{
    margin: 15px;
}
/* @import url(); 引入css类 */
</style>