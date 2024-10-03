import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../types'

export const route: RouteRecordRaw = {
	path: '/schedule',
	name: 'SchedulePage',
	meta: {
		layout: 'MainLayout'
	} as MetaTypes,
	component: () => import('@/pages/schedule')
}
