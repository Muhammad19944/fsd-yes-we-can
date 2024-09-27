<script setup lang="ts">
// Core
import OverlayBadge from 'primevue/overlaybadge'
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
	<OverlayBadge :value="modelValue" :size="size" :severity="severity">
		<slot />
	</OverlayBadge>
</template>
