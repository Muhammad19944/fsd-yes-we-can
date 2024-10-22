<script setup lang="ts">
// Components
import { BaseAvatar } from '@/shared/ui/avatar'
import { BaseButton } from '@/shared/ui/button'
import { BadgeInfo } from '@/shared/components/badge'
import { ChipEmployment } from '@/shared/components/chip'
// Non-reactive
const jobsInfo = [{ title: 'Apple Inc' }, { title: 'California, USA' }, { title: '7 days ago' }]
</script>

<template>
	<div
		class="jobs-item flex items-center gap-6 transition-colors hover:bg-bg-3 rounded-[15px] px-5 py-6"
	>
		<slot name="favorite" />

		<div class="flex">
			<base-avatar
				image="/image/temp/company-icon-1.png"
				shape="square"
				root-class="!w-[52px] !h-[52px] !rounded-[15px]"
			/>
		</div>

		<div class="max-w-[400px] w-full">
			<h1 class="font-semiBold text-text-2 mb-1">Major Account Executive, CE Retail</h1>

			<badge-info :items="jobsInfo" />
		</div>

		<div class="flex-1">
			<chip-employment label="Full-Time" />
		</div>

		<base-button label="Apply Now" rounded />
	</div>
</template>
