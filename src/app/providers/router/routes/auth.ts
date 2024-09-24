import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../types'

export const route: RouteRecordRaw = {
  path: '/login',
  name: 'AuthLoginPage',
  meta: {
    layout: 'auth'
  } as MetaTypes,
  component: () => import('@/pages/auth')
}
