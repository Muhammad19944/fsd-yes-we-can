<script setup lang="ts">
// Components
import { BaseAvatar } from '@/shared/ui/avatar'
// Stores
import { useUserStore } from '@/entities/user'
// Composable
const userStore = useUserStore()
</script>

<template>
	<div class="user-dropdown flex items-center gap-3 cursor-pointer">
		<base-avatar
			image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"
			root-class="!w-10 !h-10"
		/>

		<div>
			<h1 class="text-sm text-text-4 font-medium mb-[2px]">
				{{ userStore.currentUser?.user_metadata.name }}
			</h1>
			<p class="text-xs text-text-3">Freelancer</p>
		</div>
	</div>
</template>
