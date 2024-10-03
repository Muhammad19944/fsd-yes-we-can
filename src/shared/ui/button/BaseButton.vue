<script setup lang="ts">
// Core
import { computed } from 'vue'
import Button from 'primevue/button'
// Types
import type { IButton } from './types'
// Macros
const props = withDefaults(defineProps<IButton>(), {
	severity: 'primary'
})
// Computed
const buttonClass = computed(() => {
	return [
		{
			'!rounded-[15px]': props.rounded
		},
		'min-w-[125px] !text-white'
	]
})
</script>

<template>
	<Button
		:label="label"
		:icon="icon"
		:icon-pos="iconPos"
		:icon-class="iconClass"
		:loading="loading"
		:severity="severity"
		:text="text"
		:outlined="outlined"
		:size="size"
		:plain="plain"
		:fluid="fluid"
		:pt="{
			root: {
				class: buttonClass
			}
		}"
	></Button>
</template>
