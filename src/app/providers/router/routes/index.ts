import type { RouteRecordRaw } from 'vue-router'
import { route as AuthPage } from './auth'
import { route as DashboardPage } from './dashboard'
import { route as EventsPage } from './events'
import { route as HistoryPage } from './history'
import { route as JobsPage } from './jobs'
import { route as SchedulePage } from './schedule'
import { MainLayout } from '@/app/layouts'

export const routes: readonly RouteRecordRaw[] = [
	...AuthPage,
	DashboardPage,
	EventsPage,
	HistoryPage,
	JobsPage,
	SchedulePage,
	// MainLayout
	{
		path: '/',
		name: 'main-layout',
		component: MainLayout // TODO: Поменять
	}
] as const
