import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../types'

export const route: RouteRecordRaw = {
	path: '/history',
	name: 'HistoryPage',
	meta: {
		layout: 'main'
	} as MetaTypes,
	component: () => import('@/pages/history')
}
