<script setup lang="ts">
// Core
import { computed, useModel } from 'vue'
import Select from 'primevue/select'
// Types
import type { ISelect } from './types'
// Macros
const props = withDefaults(defineProps<ISelect>(), {
	filter: false,
	variant: 'outlined',
	transparent: false
})
const modelValue = useModel(props, 'modelValue')
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
			v-model="modelValue"
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
			:show-clear="showClear"
			:fluid="fluid"
			:pt="{
				root: {
					class: rootClass
				},
				label: {
					class: ['text-sm', { '!pr-4': modelValue }]
				},
				dropdownIcon: {
					class: '!w-3 !h-3'
				},
				clearIcon: {
					class: '!w-3 !h-[11px] !right-[35px] !mt-[-5px]'
				},
				overlay: {
					class: '!mt-1'
				},
				optionLabel: {
					class: 'text-sm'
				}
			}"
		>
			<template #value="{ value, placeholder }">
				<span class="text-text-400 inline-block">{{ placeholder }}</span>
				<span class="text-text-200 inline-block ml-1">{{
					value && value[optionLabel as string]
				}}</span>
			</template>
		</Select>
	</div>
</template>

<style></style>
