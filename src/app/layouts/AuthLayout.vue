<script setup lang="ts"></script>

<template>
	<div class="auth-layout-view">
		<header
			class="auth-header flex items-center min-h-[100px] fixed top-0 left-0 w-full z-10 px-[85px]"
		>
			<router-link to="/" class="flex">
				<img src="/image/logo-icon.svg" alt="logo-icon" />
				<img src="/image/logo-text.svg" alt="logo-text" />
			</router-link>

			<div class="flex justify-end flex-1">language dropdown</div>
		</header>

		<div class="flex">
			<div class="flex items-end max-w-[610px] w-full relative bg-overlay-300">
				<img src="/image/auth-banner-2.png" alt="auth-banner" />
			</div>

			<div
				class="auth-router-view flex-1 flex items-center justify-center bg-overlay-400 min-h-screen"
			>
				<router-view />
			</div>
		</div>
	</div>
</template>

<style>
.auth-router-view > div {
	width: 100%;
	max-width: 540px;
}
</style>
