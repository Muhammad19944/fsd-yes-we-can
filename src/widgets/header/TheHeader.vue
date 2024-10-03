<script setup lang="ts">
// Components
import {
	Layout4BlocksIcon,
	SearchIcon,
	TimeScheduleIcon,
	ClockIcon,
	ClipboardIcon
} from '@/shared/ui/icons'
import { NotificationDropdown } from '@/features/notifications'
import { UserDropdown } from '@/features/user-dropdown'
</script>

<template>
	<header class="widget-header bg-bg-4 fixed top-0 left-0 w-full">
		<div class="container">
			<div class="flex items-center h-[100px] py-5">
				<router-link to="/" class="flex">
					<img src="/image/logo-icon.svg" alt="logo-icon" />
					<img src="/image/logo-text.svg" alt="logo-text" />
				</router-link>

				<div class="flex justify-end flex-1 space-x-3">
					<router-link
						:to="{ name: 'DashboardPage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-5"
					>
						<layout4-blocks-icon />
						<span class="text-text-4">Dashboard</span>
					</router-link>

					<router-link
						:to="{ name: 'JobsPage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-5"
					>
						<search-icon />
						<span class="text-text-4">Jobs search</span>
					</router-link>

					<router-link
						:to="{ name: 'SchedulePage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-5"
					>
						<time-schedule-icon />
						<span class="text-text-4">Schedule</span>
					</router-link>

					<router-link
						:to="{ name: 'HistoryPage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-5"
					>
						<clock-icon />
						<span class="text-text-4">History</span>
					</router-link>

					<router-link
						:to="{ name: 'EventsPage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-5"
					>
						<clipboard-icon />
						<span class="text-text-4">Events</span>
					</router-link>
				</div>

				<div class="flex items-center justify-end gap-9 min-w-[250px]">
					<notification-dropdown />

					<user-dropdown />
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
.router-link-active {
	@apply bg-bg-3;
}
</style>
