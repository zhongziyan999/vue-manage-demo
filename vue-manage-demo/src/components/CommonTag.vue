<template>
    <div class="tabs">
        <el-tag
            v-for="(tag,index) in tags"
            :key="tag.name"
            :closable="tag.name !== 'home'"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
            @click="changeMenu(tag)"
            @close="handleClose(tag,index)"
            size="small"
            >
            {{tag.label}}
        </el-tag>

    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    name:'CommonTag',
    data() {
        return {
            
        }
    },
    computed:{
        ...mapState({
            tags: state => state.tab.tabsList
        }),
    },
    methods: {
        ...mapMutations({
            close : 'closeTag'
        }),
        changeMenu(item){
            this.$router.push({name:item.name})
        },
        handleClose(tag,index){
            const length = this.tags.length - 1
            this.close(tag)
            if(tag.name !== this.$route.name){
                //当要删除不是当前选中的页面时，路由不发生跳转（选择的光标不发生移动）
                return;
            }
            if(length == index){
                //删除当前选中并且是最后一个tag标签时，则将当前路由跳转到上一个tag标签路由（选择的光标向左移动）
                this.$router.push({
                    name:this.tags[index-1].name
                })
            }else{
                //删除当前选中而且不是最后一个（选中了中间的），则路由跳转到下一个tag标签上（选择的光标向右移动）
                this.$router.push({
                    name:this.tags[index].name
                })
          }
        }
    },
}
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 10px;
        cursor: pointer;
    }
}
</style>