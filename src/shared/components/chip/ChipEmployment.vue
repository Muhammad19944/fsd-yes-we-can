<script setup lang="ts">
// Types
import type { IChipEmployment } from './types'
// Components
import { BaseChip } from '@/shared/ui/chip'
// Macros
withDefaults(defineProps<IChipEmployment>(), {
	removable: false,
	color: 'primary'
})
</script>

<template>
	<base-chip
		:label="label"
		:icon="icon"
		:image="image"
		:removable="removable"
		:remove-icon="removeIcon"
	/>
</template>
