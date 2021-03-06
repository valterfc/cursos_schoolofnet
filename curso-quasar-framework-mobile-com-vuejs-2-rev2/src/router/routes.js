
const routes = [
  {
    path: '/',
    component: () => import('layouts/base.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/welcome',
    component: () => import('layouts/base.vue'),
    children: [
      { path: '', component: () => import('pages/welcome.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
