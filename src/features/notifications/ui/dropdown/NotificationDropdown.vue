<script setup lang="ts">
// Core
import Badge from 'primevue/badge'
// Components
import { NotificationIcon } from '@/shared/ui/icons'
</script>

<template>
	<div class="notification-dropdown">
		<notification-icon />
		<badge severity="danger" size="small" />
	</div>
</template>
