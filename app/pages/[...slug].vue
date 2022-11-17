<script setup lang="ts">
const data = await getPageFromPath(useRoute().params["slug"] as string[]);

const isFound = data != null && data.path != null;
if (!isFound) setResponseStatus(404);

</script>
<template>
	<div>
		<Head>
			<Title v-if="isFound">{{ data.title }} - ZS2 Wągrowiec</Title>
			<Title v-else>404 - ZS2 Wągrowiec</Title>
		</Head>
		<PortableText v-if="isFound" :blocks="data!.body" />
		<div class="error" v-else>
			<h1>404</h1>
			<h2>Nic tu nie znajdziesz :/</h2>
			<div class="btn">
				<Button to="/">Wróć na stronę główną</Button>
			</div>
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
