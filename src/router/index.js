import Vue from 'vue'
import Router from 'vue-router'
// 登录页
import Login from '@/components/pages/Login'
// 首页（项目）
import Index from '@/components/pages/Index'
// 博客文章
import BlogArticles from '@/components/pages/BlogArticles'
// 工作经历
import WorkExperences from '@/components/pages/WorkExperences'
// 掌握技能
import MasterSkills from '@/components/pages/MasterSkills'
// 个人用户
import User from '@/components/pages/User'
// iframe
import MyIframe from '@/components/pages/MyIframe'
// 图片查看页面
import PicDetail from '@/components/pages/PicDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/blogArticles',
      name: 'BlogArticles',
      component: BlogArticles
    },
    {
      path: '/workExperences',
      name: 'WorkExperences',
      component: WorkExperences
    },
    {
      path: '/masterSkills',
      name: 'MasterSkills',
      component: MasterSkills
    },
    {
      path: '/user',
      name: 'User',
      // 该页面需要key验证,暂时注释
      meta: {
        needCheck: true
      },
      component: User
    },
    {
      path: '/myIframe',
      name: 'MyIframe',
      component: MyIframe
    },
    {
      path: '/picDetail',
      name: 'PicDetail',
      component: PicDetail
    },
  ]
})
