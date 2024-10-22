<script setup lang="ts">
// Types
import type { IBadgeInfo } from './types'
// Macros
defineProps<IBadgeInfo>()
</script>

<template>
	<div class="info-badge flex items-center gap-2">
		<template v-for="{ title } in items" v-bind:key="title">
			<h1 class="text-sm text-text-4 font-medium">{{ title }}</h1>
			<span class="w-[5px] h-[5px] bg-text-4 rounded-full"></span>
		</template>
	</div>
</template>

<style>
.info-badge span:last-child {
	display: none;
}
</style>
