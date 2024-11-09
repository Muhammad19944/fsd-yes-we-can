<script setup lang="ts">
// Types
import type { IValidationError } from './types'
// Macros
withDefaults(defineProps<IValidationError>(), {
	errors: () => []
})
</script>

<template>
	<template v-for="error in errors" :key="error">
		<div class="text-sm font-medium text-red-500 mt-2">{{ error }}</div>
	</template>
</template>

<style scoped></style>
