import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../types'

export const route: RouteRecordRaw = {
	path: '/dashboard',
	name: 'DashboardPage',
	meta: {
		layout: 'EmptyLayout'
	} as MetaTypes,
	component: () => import('@/pages/dashboard')
}
