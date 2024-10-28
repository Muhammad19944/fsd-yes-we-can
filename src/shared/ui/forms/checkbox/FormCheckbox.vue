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
		:required="required"
	/>
</template>
