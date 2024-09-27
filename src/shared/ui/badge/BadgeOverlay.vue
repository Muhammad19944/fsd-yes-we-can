<script setup lang="ts">
// Core
import OverlayBadge from 'primevue/overlaybadge'
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
	<OverlayBadge :value="modelValue" :size="size" :severity="severity">
		<slot />
	</OverlayBadge>
</template>
