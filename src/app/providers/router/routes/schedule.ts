import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/schedule',
  name: 'SchedulePage',
  meta: {
    layout: 'main'
  },
  component: () => import('@/pages/schedule')
}
