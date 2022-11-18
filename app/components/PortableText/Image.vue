<script setup lang="ts">
const props = defineProps<{
	asset: {
		_ref: string;
	};
}>();

const data = await useSanity().fetch<{ url: string; altText: string }>(
	"*[_id==$id][0]{url, altText}",
	{ id: props.asset._ref }
);
</script>

<template>
	<NuxtImg :src="data.url" :alt="data.altText" />
</template>

<style scoped>
img {
	display: block;
	margin-left: auto;
	margin-right: auto;
	max-width: min(100%, 650px);

	padding: 0.6em 0;
}
</style>
