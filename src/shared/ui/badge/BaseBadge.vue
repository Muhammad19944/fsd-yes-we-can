<script setup lang="ts">
// Core
import Badge from 'primevue/badge'
// Types
import type { SizeType, VariantType } from '@/shared/types'
// Interface
interface IBadge {
	modelValue?: string | number
	size?: SizeType
	severity?: VariantType
}
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
