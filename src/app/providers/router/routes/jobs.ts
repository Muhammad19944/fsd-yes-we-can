import type { RouteRecordRaw } from 'vue-router'

export const route: RouteRecordRaw = {
  path: '/jobs',
  name: 'JobsPage',
  meta: {
    layout: 'main'
  },
  component: () => import('@/pages/jobs')
}
