<script setup lang="ts">
// Core
import AvatarGroup from 'primevue/avatargroup'
// Components
import { BaseAvatar } from '.'
// Types
import type { IAvatar } from './types'
// Macros
withDefaults(defineProps<IAvatar>(), {
	size: 'normal',
	shape: 'circle'
})
</script>

<template>
	<avatar-group>
		<base-avatar :label="label" :icon="icon" :image="image" :size="size" :shape="shape" />
	</avatar-group>
</template>
