<script setup lang="ts">
// Components
import { JobsToolbar } from '@/features/jobs/toolbar'
</script>

<template>
	<div class="main-layout-view pb-20">
		<div class="layout-top bg-bg-4 min-h-[330px] mb-[100px]">
			<div class="container">
				<div class="flex flex-col justify-center relative min-h-[330px] pt-12">
					<h1 class="text-[32px] font-semiBold text-text-2">Let's find you a new job</h1>
					<h2 class="font-medium text-text-4 mt-1">It is enough to enter keywords or companies</h2>

					<jobs-toolbar />
				</div>
			</div>
		</div>

		<router-view />
	</div>
</template>
