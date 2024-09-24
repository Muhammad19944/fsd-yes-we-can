<script setup lang="ts">
// Macros
</script>

<template>
	<header class="widget-header">
		<div class="h-20 py-5">
			<router-link to="/" class="flex">
				<img src="@/shared/ui/assets/image/logo-icon.svg" alt="logo-icon">
				<img src="@/shared/ui/assets/image/logo-text.svg" alt="logo-text">
			</router-link>

			<router-link :to="{ name: 'DashboardPage' }">Dashboard</router-link>
			<router-link :to="{ name: 'JobsPage' }">Jobs search</router-link>
			<router-link :to="{ name: 'SchedulePage' }">Schedule</router-link>
			<router-link :to="{ name: 'AuthLoginPage' }">Auth login</router-link>
		</div>
	</header>
</template>
