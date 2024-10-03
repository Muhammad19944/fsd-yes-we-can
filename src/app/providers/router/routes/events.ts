import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../types'

export const route: RouteRecordRaw = {
	path: '/events',
	name: 'EventsPage',
	meta: {
		layout: 'MainLayout'
	} as MetaTypes,
	component: () => import('@/pages/events')
}
