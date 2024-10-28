<script setup lang="ts">
// Components
import {
	TypeEmployment,
	TypeLevel,
	LanguagesOptions,
	SalaryRange,
	LocationOptions
} from '@/features/jobs/filters'
</script>

<template>
	<div class="jobs-filter-view space-y-10 pt-[10px]">
		<type-employment />

		<type-level />

		<languages-options />

		<salary-range />

		<location-options />
	</div>
</template>
