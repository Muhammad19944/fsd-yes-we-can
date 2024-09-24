import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/dashboard',
  name: 'DashboardPage',
  meta: {
    layout: 'empty'
  },
  component: () => import('@/pages/dashboard')
}
