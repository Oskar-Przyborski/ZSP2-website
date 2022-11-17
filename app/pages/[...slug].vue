<script setup lang="ts">
import ErrorMessage from "~~/components/ErrorMessage.vue";

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
		<ErrorMessage v-else />
	</div>
</template>
