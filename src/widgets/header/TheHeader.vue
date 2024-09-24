<script setup lang="ts">
// Macros
</script>

<template>
	<header class="widget-header bg-bg-4 fixed top-0 left-0 w-full">
		<div class="container">
			<div class="flex items-center h-[100px] py-5">
				<router-link to="/" class="flex">
					<img src="@/shared/ui/assets/image/logo-icon.svg" alt="logo-icon">
					<img src="@/shared/ui/assets/image/logo-text.svg" alt="logo-text">
				</router-link>

				<div class="flex justify-end flex-1">
					<router-link :to="{ name: 'DashboardPage' }">Dashboard</router-link>
					<router-link :to="{ name: 'JobsPage' }">Jobs search</router-link>
					<router-link :to="{ name: 'SchedulePage' }">Schedule</router-link>
					<router-link :to="{ name: 'AuthLoginPage' }">Auth login</router-link>
				</div>
			</div>
		</div>
	</header>
</template>
