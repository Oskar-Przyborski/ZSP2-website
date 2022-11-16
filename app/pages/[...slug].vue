<script setup lang="ts">
const data = await getPageFromPath(useRoute().params["slug"] as string[]);

if (data == null)
	throwError({ statusCode: 404, message: "Nie znaleziono strony" });
if (data?.body == null)
	throwError({ statusCode: 404, message: "Nie znaleziono strony" });

useHead({
	title: data.title,
});
</script>
<template>
	<div>
		<Head>
			<Title>{{ data.title }} - ZS2 Wągrowiec</Title>
		</Head>
		<PortableText :blocks="data!.body" />
	</div>
</template>
