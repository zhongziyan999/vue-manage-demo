<template>
  <el-form ref="form" label-width="100px" :model="form" :rules="rules" class="login-container" status-icon>
    <h3 class="login_title">系统登录</h3>
        <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
        >
            <el-input
            type='input'
            placeholder="请输入账号"
            auto-complete="off"
            v-model="form.username"
            ></el-input>
        </el-form-item>
        <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
        >
        <el-input
        type='password'
        placeholder="请输入密码"
        auto-complete="off"
        v-model="form.password"
        ></el-input>
    </el-form-item>
    <el-form-item class="login_submit">
        <el-button type="primary" @click="login" class="login_submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import { Mock } from 'mockjs'
import {getMenu} from '../../api/data'

export default {
    name:'login',
    data() {
        return {
            form:{},
            rules:{
                username:[
                    {required: true, message: "请输入用户名", trigger: "blur" },
                    {min:3, message:'用户名长度不能小于3位', trigger: "blur"}
                    ],
                password:[
                    {required: true, message: "请输入密码", trigger: "blur" },
                ]
            }
        }
    },
    methods: {
        login(){
         getMenu(this.form).then(res =>{
            // console.log('res',res)
            if(res.code === 20000){
                this.$store.commit('clearMenu')  //清除 导航菜单路由
                this.$store.commit('setMenu',res.data.menu)  // 设置路由给导航使用
                this.$store.commit('setToken',res.data.token) //设置token
                this.$store.commit('addMenu',this.$router) // router 组件注册
                this.$router.push({name:'home'})
            }else{
                this.$message.warning(res.data.message) //账号或者密码错误
            }
         })
        //  const token = Mock.random.guid()
        //  this.$store.commit('setToken',token)
        //  this.$router.push({name:'home'})
        }
    },
    mounted() {
        // console.log('router',this)
    },
}
</script>

<style lang="less" scoped>
.login-container{
    width:350px;
    border-radius: 15px;
     background-clip: padding-box;
     margin: 180px auto;
     border: 1px solid #eaeaea;
     box-shadow: 0 0 25px #cac6c6;
     padding: 35px 35px 15px 35px;
     background-color: #fff;
}
.login_title{
    text-align: center;
    margin: 0px auto 40px auto;
    color: #505458;
}
.login_submit{
    margin: 10px auto 0 auto;
}
</style>