<script setup lang="ts">
// Components
import { BaseAvatar, AvatarGroup } from '@/shared/ui/avatar'
</script>

<template>
	<div class="user-dropdown flex items-center gap-3 cursor-pointer">
		<base-avatar
			image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
			root-class="!w-10 !h-10"
		/>

		<!-- TODO: Потом удалить -->
		<template v-if="false">
			<avatar-group image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
		</template>

		<div>
			<h1 class="text-sm text-text-4 font-medium mb-[2px]">Emy Elsner</h1>
			<p class="text-xs text-text-3">Freelancer</p>
		</div>
	</div>
</template>
