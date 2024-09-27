<script setup lang="ts">
// Components
import { NotificationIcon } from '@/shared/ui/icons'
import { BadgeOverlay } from '@/shared/ui/badge'
</script>

<template>
	<div class="notification-dropdown">
		<badge-overlay severity="danger" />
		<notification-icon />
	</div>
</template>
