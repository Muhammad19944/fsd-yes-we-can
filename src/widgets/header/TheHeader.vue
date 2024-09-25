<script setup lang="ts">
// Components
import {
	Layout4BlocksIcon,
	SearchIcon,
	TimeScheduleIcon,
	ClockIcon,
	ClipboardIcon
} from '@/shared/ui/icons'
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
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-3"
					>
						<layout4-blocks-icon />
						<span class="text-text-4">Dashboard</span>
					</router-link>

					<router-link
						:to="{ name: 'JobsPage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-3"
					>
						<search-icon />
						<span class="text-text-4">Jobs search</span>
					</router-link>

					<router-link
						:to="{ name: 'SchedulePage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-3"
					>
						<time-schedule-icon />
						<span class="text-text-4">Schedule</span>
					</router-link>

					<router-link
						:to="{ name: 'HistoryPage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-3"
					>
						<clock-icon />
						<span class="text-text-4">History</span>
					</router-link>

					<router-link
						:to="{ name: 'EventsPage' }"
						class="flex items-center justify-center gap-[5px] min-h-[46px] hover:bg-bg-3 transition-colors rounded-[15px] px-3"
					>
						<clipboard-icon />
						<span class="text-text-4">Events</span>
					</router-link>
				</div>
			</div>
		</div>
	</header>
</template>
