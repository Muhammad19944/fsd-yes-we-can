<script setup lang="ts">
// Core
import { Form } from '@primevue/forms'
// Types
import type { IBaseForm } from './types'
// Macros
withDefaults(defineProps<IBaseForm>(), {})
const emit = defineEmits(['emit:submit'])
</script>

<template>
	<Form
		v-slot="$form"
		:initialValues="initialValues"
		:resolver="resolver"
		@submit="(form) => emit('emit:submit', form)"
	>
		<slot :form="$form" />
	</Form>
</template>

<style scoped></style>
