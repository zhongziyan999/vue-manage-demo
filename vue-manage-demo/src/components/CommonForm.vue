<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
        <el-input
        v-if="item.type === 'input'"
        :placeholder="item.label ? `请输入`+item.label : `请输入`"
        v-model="form[item.model]"
        ></el-input>

        <el-switch
        v-if="item.type === 'switch'"
         v-model="form[item.model]"
        ></el-switch>

        <el-date-picker
         v-if="item.type === 'date'"
         type="date"
         value-format="yyyy-MM-dd"
         placeholder="选择日期"
         v-model="form[item.model]"
        ></el-date-picker>
        
        <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model="form[item.model]"
        >
        <el-option
        v-for="item in item.opts"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        ></el-option>
        </el-select>
    </el-form-item>
    <!-- 给他一个默认的插槽，如果上面的类型都不符合，就展示我们指定的内容 -->
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
    name:'CommonForm',
    props:{
        //接受form相关的配置，type是什么类型之类
        formLabel:Array,
        //父组件传过来的数据
        form:Object,
        //表单的布局
        inline:Boolean,
    },
    data() {
        return {
            
        }
    },

}
</script>

<style>

</style>