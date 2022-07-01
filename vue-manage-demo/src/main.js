import Vue from 'vue'
import { Container, Aside, Main, Header, Menu, Submenu, MenuItem, MenuItemGroup, Button, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag,Form,FormItem,Input,Select,Switch,DatePicker,Option,Dialog,Pagination,MessageBox,Message } from 'element-ui';
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import './assets/less/index.less'
import store from './store'
import http from 'axios'
import './api/mock.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)

Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

router.beforeEach((to,from,next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  } else{
    next()
  }
  })

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
     store.commit('addMenu',router)
  },
}).$mount('#app')

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
