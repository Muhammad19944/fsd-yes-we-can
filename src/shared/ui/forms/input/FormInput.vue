<script setup lang="ts">
// Core
import { computed, useSlots } from 'vue'
import InputText from 'primevue/inputtext'
// Types
import type { IFormInput } from './types'
// Macros
const props = withDefaults(defineProps<IFormInput>(), {
	variant: 'outlined',
	invalid: false,
	transparent: true,
	trailing: false
})
// Composable
const slots = useSlots()
// Computed
const inputClass = computed(() => {
	return [
		{
			'!bg-transparent !border-none': props.transparent,
			'!pl-11': !!slots['icon-left']
		},
		'flex-1 placeholder:!text-text-4 placeholder:translate-x-1 !text-sm !py-[14px]'
	]
})
</script>

<template>
	<div class="forms-input flex items-center relative">
		<template v-if="slots['icon-left']">
			<div class="absolute left-4">
				<slot name="icon-left" />
			</div>
		</template>

		<input-text
			type="text"
			:model-value="modelValue"
			:size="size"
			:invalid="invalid"
			:variant="variant"
			:fluid="fluid"
			:placeholder="placeholder"
			:pt="{
				root: {
					class: inputClass
				}
			}"
		/>

		<template v-if="slots['icon-right']">
			<div>
				<slot name="icon-right" />
			</div>
		</template>
	</div>
</template>
