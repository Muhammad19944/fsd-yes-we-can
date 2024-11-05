<script setup lang="ts">
// Components
import { BaseButton } from '@/shared/ui/button'
import { SearchIcon } from '@/shared/ui/icons'
import JobsSearch from './JobsSearch.vue'
import JobsLocation from './JobsLocation.vue'
</script>

<template>
	<div
		class="search-bar flex items-center gap-5 w-full bg-bg-4 absolute -bottom-10 shadow-shadow-1 rounded-[20px] p-5"
	>
		<jobs-search :icon="SearchIcon" />

		<jobs-location />

		<div class="flex justify-end flex-1">
			<base-button label="Search" rounded />
		</div>
	</div>
</template>
