<template>
    <header>
        <div class="l-content">
            <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
            <!-- <h3>首页</h3> -->
            <el-breadcrumb separator-class="el-icon-arrow-right" >
                <el-breadcrumb-item v-for="item in tags" :key="item.label" :to="{ path: item.path}" >{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>  
        <div class="r-content">
            <el-dropdown trigger="click" sizi="mini">
                <span class="el-dropdown-link">
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
// import CommonAsideVue from './CommonAside.vue'
import { mapState } from 'vuex'

export default {
    name:'CommonHeader',
    data() {
        return {
            userImg:require('../assets/images/user.png')
        }
    },
    methods: {
       handleMenu(){
            this.$store.commit('collapseMenu')
        },
        logOut(){
            this.$store.commit('clearToken')
            this.$store.commit('clearMenu')
            this.$router.push({name:'login'})
        }
    },
    computed:{
        ...mapState({
            tags : state => state.tab.tabsList
        })
        // ...mapState('tab',['tabsList']) 可以在vuex将多个模块都放在index.js中模块化的时候使用
    }
}
</script>

<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
}

.r-content{
    display: flex;
    .user{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
        color: #14dede !important;
}
</style>