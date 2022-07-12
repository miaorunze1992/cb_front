import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

/**
 * 图标：修改icon可参照https://2x.antdv.com/components/icon
 */

/**
 * 权限配置： 0:admin管理員 1:教師 2:學員 3:試學 4:營業 5:TODO
 */

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'home',
          name: '管理ページ',
          meta: {
            icon: 'home'
          },
          component: () => import('@/pages/home')
        },
        {
          path: 'teacher',
          name: '受講管理',
          meta: {
            icon: 'team',
            authority: {
              permission: 'admin',
              role: '1'
            },
          },
          
          component: BlankView,
          children: [
            {
              path: 'study_data',
              name: '培训大数据',
              meta: {
                icon: 'book',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'student_manager',
              name: '学員管理',
              meta: {
                icon: 'user',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'course_manager',
              name: 'コース管理',
              meta: {
                icon: 'profile',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'question_manager_tc',
              name: '質問管理',
              meta: {
                icon: 'question',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'player_deadline',
              name: '播放期限设定',
              meta: {
                icon: 'play-circle',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'skill_manager',
              name: '技術分野管理',
              meta: {
                icon: 'wallet',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'progress_manager_tc',
              name: '学習進捗管理',
              meta: {
                icon: 'code',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'q_a_manager_tc',
              name: '問題集管理',
              meta: {
                icon: 'bulb',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            },
            {
              path: 'book_date_tc',
              name: '受講予約',
              meta: {
                icon: 'calendar',
                authority: {
                  permission: 'admin',
                  role: '1'
                },
              },
              component: () => import('@/pages/home'),
            }
          ]
        },
        {
          path: 'student',
          name: '受講管理',
          meta: {
            icon: 'user',
            authority: {
              permission: 'admin',
              role: '2'
            },
          },
          
          component: BlankView,
          children: [
            {
              path: 'study_data',
              name: '培训大数据',
              meta: {
                icon: 'book',
                authority: {
                  permission: 'admin',
                  role: '2'
                },
              },
              component: () => import('@/pages/home'),
            },
           
            {
              path: 'question_manager_st',
              name: '質問管理',
              meta: {
                icon: 'question',
                authority: {
                  permission: 'admin',
                  role: '2'
                },
              },
              component: () => import('@/pages/home'),
            },
          
            {
              path: 'progress_manager_st',
              name: '学習進捗管理',
              meta: {
                icon: 'code',
                authority: {
                  permission: 'admin',
                  role: '2'
                },
              },
              component: () => import('@/pages/home'),
            },
         
            {
              path: 'q_a_manager_st',
              name: '問題集管理',
              meta: {
                icon: 'bulb',
                authority: {
                  permission: 'admin',
                  role: '2'
                },
              },
              component: () => import('@/pages/home'),
            },
        
            {
              path: 'book_date_st',
              name: '受講予約',
              meta: {
                icon: 'calendar',
                authority: {
                  permission: 'admin',
                  role: '2'
                },
              },
              component: () => import('@/pages/home'),
            }
          ]
        },
        {
          path: 'sale',
          name: '営業管理',
          meta: {
            icon: 'form',
            authority: {
              permission: 'admin',
              role: '3'
            },
          },
          component: PageView,
          children: [
            {
              path: 'todo',
              name: 'TODO',
              component: () => import('@/pages/home'),
            }
          ]
        },
        {
          path: 'exception',
          name: '异常页',
          meta: {
            icon: 'warning',
            authority: {
              permission: 'admin',
              role: '0'
            }
          },
          component: BlankView,
          children: [
            {
              path: '404',
              name: 'Exp404',
              meta:{
                invisible:true // true:不可见
              },
              component: () => import('@/pages/exception/404')
            },
            {
              path: '403',
              name: 'Exp403',
              component: () => import('@/pages/exception/403')
            },
            {
              path: '500',
              name: 'Exp500',
              component: () => import('@/pages/exception/500')
            }
          ]
        }
      ]
    }
  ]
}

export default options
