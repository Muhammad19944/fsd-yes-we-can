import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../types'

export const route: RouteRecordRaw = {
	path: '/jobs',
	name: 'JobsPage',
	meta: {
		layout: 'MainLayout'
	} as MetaTypes,
	component: () => import('@/pages/jobs')
}
