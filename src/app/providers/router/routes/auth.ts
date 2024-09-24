import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/login',
  name: 'AuthLoginPage',
  meta: {
    layout: 'auth'
  },
  component: () => import('@/pages/auth')
}
