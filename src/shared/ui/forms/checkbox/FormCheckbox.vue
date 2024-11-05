<script setup lang="ts">
// Core
import { useModel } from 'vue'
import Checkbox from 'primevue/checkbox'
// Types
import type { ICheckbox } from './types'
// Macros
const props = withDefaults(defineProps<ICheckbox>(), {
	binary: true,
	invalid: false,
	variant: 'outlined'
})
// Composable
const modelValue = useModel(props, 'modelValue')
</script>

<template>
	<div class="flex items-center gap-3">
		<Checkbox
			v-model="modelValue"
			:value="modelValue"
			:name="name"
			:binary="binary"
			:indeterminate="indeterminate"
			:invalid="invalid"
			:disabled="disabled"
			:variant="variant"
			:readonly="readonly"
			:tabindex="tabindex"
			:input-id="inputId"
			:required="required"
		/>

		<label :for="inputId" class="text-base text-text-400">{{ label }}</label>
	</div>
</template>
