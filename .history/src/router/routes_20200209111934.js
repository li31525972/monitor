import Home from '@/views/Layout'

export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path:'/registered',
        name:'registered',
        component: ()=>import('@/views/registered')
    },
    {
        path: '/home',
        component: Home,
        meta: { title: '概览', },
        children: [
            {
                path: '/',
                name: 'overview',
                meta: { title: '概览' },
                component: () => import(/* webpackChunkName: 'overview' */ '@/views/Home')
            }
        ]
    },
    {
        path: '/system',
        meta: { title: '系统使用统计', },
        component: Home,
        children: [
            {
                path: '/',
                name: 'statistics',
                meta: { title: '系统使用统计' },
                component: () => import(/* webpackChunkName: 'statistics' */ '@/views/System/Statistics')
            }
        ],
    },
    {
        path: '/basics',
        meta: { title: '基础配置' },
        component: Home,
        children: [
            {
                path: 'system',
                name: 'system',
                meta: { title: '系统管理' },
                component: () => import(/* webpackChunkName: 'system' */ '@/views/Basics/System')
            },
            // {
            //     path: 'mechanism',
            //     name: 'mechanism',
            //     meta: { title: '机构管理' },
            //     component: () => import(/* webpackChunkName: 'mechanism' */ '@/views/Basics/Mechanism')
            // }
        ]
    },
    {
        path: '/user',
        meta: { title: '用户管理' },
        component: Home,
        children: [
            {
                path: '/',
                name: 'userAdmin',
                meta: { title: '用户管理' },
                component: () => import(/* webpackChunkName: 'userAdmin' */ '@/views/User/Administration')
            }
        ],
    },
    {
        path: '/certificate',
        meta: { title: '证书管理' },
        component: Home,
        children: [
            {
                path: '/',
                name: 'certAdmin',
                meta: { title: '证书管理' },
                component: () => import(/* webpackChunkName: 'userAdmin' */ '@/views/Certificate/Administration')
            }
        ]
    },
    {
        path: '/security',
        meta: { title: '安全中心' },
        component: Home,
        children: [
            {
                path: '/',
                name: 'core',
                meta: { title: '安全中心' },
                component: () => import(/* webpackChunkName: 'userAdmin' */ '@/views/Security/Core')
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录', hidden: true },
        component: () => import(/* webpackChunkName: 'login' */ '@/views/Login')
    }
]
