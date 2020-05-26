import Vue from 'vue';
import Router from 'vue-router';
import _import from './_import';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: _import('login')
        },
        {
            path: '/main',
            name: 'main',
            component: _import('main'),
            redirect: 'main/personalMain',
            children: [
                {
                    path: '/group/set',
                    name: 'setGroup',
                    component: _import('personalModel/groupModel/setGroup')
                },
                
                {
                    path: '/group/search',
                    name: 'searchGroup',
                    component: _import('personalModel/groupModel/searchGroup')
                },
                {
                    path: '/group/detail/:id',
                    name: 'groupDetail',
                    component: _import('personalModel/groupModel/groupDetail')
                },
                {
                    path: '/group/apply/:id',
                    name: 'applyGroup',
                    component: _import('personalModel/groupModel/applyGroup')
                },{
                    path: '/group/own',
                    name: 'ownGroup',
                    component: _import('personalModel/groupModel/ownGroup')
                },
                {
                    path: '/main/person/todo',
                    component: ()=>import('@/components/person/Todo'),
                    name: '待办事项',
                    menuShow: true
                  },
                  {
                    path: '/person/todoAplly',
                    component: ()=>import('@/components/person/TodoAplly'),
                    name: '申请待办',
                    menuShow: true
                  },
                  {
                    path: '/person/timelist',
                    component: ()=>import('@/components/person/Timelist'),
                    name: '日程安排',
                    menuShow: true
                  },
                  {
                    path: '/my',
                    component:()=>import('@/components/person/my'),
                    name: '我的',
                    menuShow: true
                  },{
                    path: '/myinfo',
                    component:()=>import('@/components/person/imfomation'),
                    name: '信息',
                    menuShow: false
                  },{
                    path:'/workspace',
                    name:"工作",
                    component:()=>import('@/components/workspace/index')
                  },{
                    path: '/govfile/sendfile',
                    component: ()=>import('@/components/govfile/SendFile'),
                    name: '发文管理',
                    menuShow: true
                  },
                  {
                    path: '/govfile/acceptfile',
                    component: ()=>import('@/components/govfile/AcceptFile'),
                    name: '收文管理',
                    menuShow: true
                  },
                  {
                    path: '/govfile/acceptshow',
                    component: ()=>import('@/components/govfile/AcceptShow'),
                    name: '收文管理',
                    menuShow: false
                  },{
                    path: '/book/kaoqin',
                    component: ()=>import('@/components/office/qiandao'),
                    name: '考勤管理',
                    menuShow: true
                  }, {
                    path: '/office/carlist',
                    component: ()=>import('@/components/office/CarList'),
                    name: '车辆管理',
                    menuShow: true
                  },
                  {
                    path: '/office/caradd',
                    component: ()=>import('@/components/office/CarAdd'),
                    name: '车辆申请',
                    menuShow: false
                  },{
                    path: '/book/list',
                    component: ()=>import('@/components/book/list'),
                    name: '图书列表',
                    menuShow: true
                  },
                  {
                    path: '/office/meetlist',
                    component: ()=>import('@/components/office/MeetList'),
                    name: '会议管理',
                    menuShow: true
                  },
                  {
                    path: '/office/meetadd',
                    component: ()=>import('@/components/office/MeetAdd'),
                    name: '新增会议',
                    menuShow: false
                  },
                  {
                      path: '/office/news',
                      name: 'news',
                      component: _import('applicationModel/news')
                  },
                  {
                    path: '/office/supervisetasl',
                    component: ()=>import('@/components/office/SuperviseTask'),
                    name: '督办通知',
                    menuShow: true
                  },
                  {
                    path: '/office/supervise',
                    component: ()=>import('@/components/office/Supervise'),
                    name: '督办通知',
                    menuShow: true
                  }, {
                    path: '/contact/zongheMes',
                    component: ()=>import('@/components/contact/zongheMes'),
                    name: '综合消息',
                    menuShow: false
                  },
                {
                    path: '/searchFriend',
                    name: 'searchFriend',
                    component: _import('personalModel/friendModel/searchFriend')
                },
                {
                    path: 'apply',
                    name: 'applyFriend',
                    component: _import('personalModel/friendModel/applyFriend')
                },{
                    path: '/detail/:id',
                    name: 'friendDetail',
                    component: _import('personalModel/friendModel/friendDetail')
                },
                {
                    path: '/wall/:id',
                    name: 'photoWall',
                    component: _import('personalModel/friendModel/photoWall')
                },
                {
                    path: 'send',
                    name: 'sendFriendValidate',
                    component: _import('personalModel/sendValidateSuccess')
                },
                {
                    path: 'personalMain',
                    name: 'personalMain',
                    component: _import('personalMain'),
                   
                    children: [
                        {
                            path: 'group',
                            name: 'group',
                            component: _import('personalModel/group'),
                           
                            children: [
                                
                                {
                                    path: 'send',
                                    name: 'sendGroupValidate',
                                    component: _import('personalModel/sendValidateSuccess')
                                }
                            ]
                        },
                        {
                            path: 'friendly',
                            name: 'friendly',
                            component: _import('personalModel/friendly'),
                           
                            children: [
                                {
                                    path: 'own',
                                    name: 'ownFriend',
                                    component: _import('personalModel/friendModel/myFriend')
                                },
                                
                               
                                {
                                    path: 'search',
                                    name: 'searchFriend',
                                    component: _import('personalModel/friendModel/searchFriend')
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: '/mine',
            name: 'mine',
            component: _import('mine')
        },
        {
            path: '/todo',
            name: 'todo',
            component: _import('todo')
        },
        {
            path: '/mySetting',
            name: 'mySetting',
            component: _import('mySetting'),
            redirect: 'mySetting/means',
            children: [
                {
                    path: 'means',
                    name: 'means',
                    component: _import('settingModel/means')
                },
                {
                    path: 'theme',
                    name: 'theme',
                    component: _import('settingModel/theme')
                }
            ]
        },
        {
            path: '*',
            component: _import('notFound'),
        }
    ]
})
