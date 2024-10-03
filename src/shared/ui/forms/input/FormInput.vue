<script setup lang="ts">
// Core
import { computed } from 'vue'
import InputText from 'primevue/inputtext'
// Components
import { SearchIcon } from '@/shared/ui/icons'
// Types
import type { IFormInput } from './types'
// Macros
const props = withDefaults(defineProps<IFormInput>(), {
	variant: 'outlined',
	invalid: false,
	transparent: true,
	icon: SearchIcon,
	trailing: false
})
// Computed
const rootClass = computed(() => {
	return [
		{
			'!bg-transparent !border-none': props.transparent
		},
		'flex-1 placeholder:!text-text-4 placeholder:translate-x-1'
	]
})
const iconClass = computed(() => {
	return ['w-6 h-6', props.iconClass]
})
</script>

<template>
	<div class="forms-input flex items-center">
		<template v-if="!props.trailing">
			<component :is="props.icon" :class="iconClass" />
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
					class: rootClass
				}
			}"
		/>

		<template v-if="props.trailing">
			<component :is="props.icon" :class="iconClass" />
		</template>
	</div>
</template>
