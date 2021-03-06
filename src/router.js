import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main'


Vue.use(Router)

export default new Router({
    
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})