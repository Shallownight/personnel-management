import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/login'
import Userpage from '@/components/user/userpage'
import Homepage from '@/components/user/homepage'
import WeeklySub from '@/components/user/weekly-sub'
import WeeklyCheck from '@/components/user/weekly-check'
import WeeklyHistory from '@/components/user/weekly-history'
import Task from '@/components/user/task'
import UserMessage from '@/components/user/user-message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/userpage',
    	name: 'Userpage',
    	component: Userpage,
    	children:[
    		{
    			path: '',
    			component: Homepage
    		},
    		{
    			path: 'weekly-sub',
    			component: WeeklySub
    		},
    		{
    			path: 'weekly-check',
    			component: WeeklyCheck
    		},
    		{
    			path: 'weekly-history',
    			component: WeeklyHistory
    		},
    		{
    			path: 'task',
    			component: Task
    		},
    		{
    			path: 'user-message',
    			component: UserMessage
    		}
    	]
    }
  ]
})
