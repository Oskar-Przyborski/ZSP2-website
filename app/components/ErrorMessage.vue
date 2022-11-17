<script setup lang="ts">
withDefaults(defineProps<{ code?: number; message?: string }>(), {
	code: 404,
	message: "Nic tu nie znajdziesz :/",
});
</script>
<template>
	<div class="error">
		<h1>{{ code }}</h1>
		<h2>{{ message }}</h2>
		<div class="btn">
			<Button to="/">Wróć na stronę główną</Button>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.error {
	text-align: center;
	.btn {
		display: grid;
		place-items: center;
		padding: 0.7em;
	}
}
</style>
