<script setup lang="ts">
// Core
import Avatar from 'primevue/avatar'
// Types
import type { IAvatar } from './types'
// Macros
withDefaults(defineProps<IAvatar>(), {
	size: 'normal',
	shape: 'circle'
})
</script>

<template>
	<avatar
		:label="label"
		:icon="icon"
		:image="image"
		:size="size"
		:shape="shape"
		:pt="{
			root: {
				class: [rootClass]
			}
		}"
	></avatar>
</template>
