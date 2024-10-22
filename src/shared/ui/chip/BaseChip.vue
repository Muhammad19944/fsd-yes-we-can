<script setup lang="ts">
// Core
import { computed } from 'vue'
import Chip from 'primevue/chip'
// Types
import type { IChip } from './types'
// Macros
const props = withDefaults(defineProps<IChip>(), {
	removable: false,
	color: 'primary'
})
// Computed
const colors = computed(() => {
	switch (props.color) {
		case 'contrast':
			return ''
		case 'danger':
			return '!bg-red-400/30 !text-red-400'
		case 'info':
			return ''
		case 'secondary':
			return ''
		case 'success':
			return '!bg-green-400/30 !text-green-400'
		case 'warn':
			return '!bg-orange-400/30 !text-orange-400'
		default: // primary
			return '!bg-blue-400/30 !text-blue-400'
	}
})
</script>

<template>
	<Chip
		:label="label"
		:icon="icon"
		:image="image"
		:removable="removable"
		:remove-icon="removeIcon"
		:pt="{
			root: {
				class: [colors]
			},
			label: {
				class: 'leading-[1]'
			}
		}"
	/>
</template>
