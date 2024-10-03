<script setup lang="ts">
// Core
import { computed } from 'vue'
import Select from 'primevue/select'
// Types
import type { ISelect } from './types'
// Macros
const props = withDefaults(defineProps<ISelect>(), {
	filter: false,
	variant: 'outlined',
	transparent: true
})
// Computed
const rootClass = computed(() => {
	return [
		{
			'!bg-transparent !border-none': props.transparent
		},
		'flex-1'
	]
})
const iconClass = computed(() => {
	return ['w-6 h-6', props.iconClass]
})
</script>

<template>
	<div class="base-select flex items-center">
		<component :is="icon" :class="iconClass" />

		<Select
			:model-value="modelValue"
			:options="options"
			:option-label="optionLabel"
			:option-value="optionValue"
			:option-disabled="optionDisabled"
			:scroll-height="scrollHeight"
			:filter="props.filter"
			:filter-placeholder="filterPlaceholder"
			:filter-locale="filterLocale"
			:placeholder="placeholder"
			:invalid="invalid"
			:disabled="disabled"
			:variant="variant"
			:fluid="fluid"
			:pt="{
				root: {
					class: rootClass
				}
			}"
		/>
	</div>
</template>
