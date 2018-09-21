
const routes = [
  {
    path: '/',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/products',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/products/list.vue') }
    ]
  },
  {
    path: '/products/create',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/products/create.vue') }
    ]
  },
  {
    path: '/products/:id',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/products/details.vue') }
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
