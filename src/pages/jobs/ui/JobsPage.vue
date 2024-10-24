<script setup lang="ts">
// Components
import { JobsList } from '@/widgets/jobs/list'
import { JobsFilter } from '@/features/jobs/filters'
import { JobsSorting } from '@/features/jobs/sorting'
</script>

<template>
	<div class="jobs-page">
		<div class="container">
			<div class="jobs-page-container flex gap-[30px]">
				<div class="jobs-filter-aside max-w-[278px] w-full">
					<jobs-filter />
				</div>

				<div class="jobs-content flex-1">
					<jobs-sorting />
					<jobs-list />
				</div>
			</div>
		</div>
	</div>
</template>
