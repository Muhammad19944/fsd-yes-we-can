<script setup lang="ts">
// Core
import Badge from 'primevue/badge'
// Types
import type { IBadge } from './types'
// Macros
withDefaults(defineProps<IBadge>(), {
	modelValue: '',
	size: null,
	severity: null
})
</script>

<template>
	<badge :value="modelValue" :size="size" :severity="severity" />
</template>
