<script setup lang="ts">
// Core
import { useModel } from 'vue'
import Slider from 'primevue/slider'
// Types
import type { ISlider } from './types'
// Macros
const props = withDefaults(defineProps<ISlider>(), {
	min: 0,
	max: 100,
	orientation: 'horizontal',
	step: 1,
	range: false,
	disabled: false
})
// Composable
const modelValue = useModel(props, 'modelValue')
</script>

<template>
	<Slider
		v-model="modelValue"
		:min="min"
		:max="max"
		:orientation="orientation"
		:step="step"
		:range="range"
		:disabled="disabled"
		:tabindex="tabindex"
		:pt="{
			startHandler: {
				class: 'before:!bg-blue-400'
			},
			endHandler: {
				class: 'before:!bg-blue-400'
			}
		}"
	/>
</template>
