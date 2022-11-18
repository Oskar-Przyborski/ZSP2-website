<script setup lang="ts">
const route = useRoute();
const article = await getArticle(route.params["slug"] as string);

const isFound = article != null && article.slug != null;
if (!isFound) setResponseStatus(404, "Nie znaleziono artykulu");
</script>

<template>
	<BackButton to="/aktualnosci/strona/1">Aktualności</BackButton>
	<article v-if="isFound">
		<div class="date">{{ getDateFromArticle(article) }}</div>
		<h1 class="title">{{ article.title }}</h1>
		<NuxtImg
			v-if="article.imageUrl != null && article.showTitleImage"
			:src="article.imageUrl"
			class="img-fluid img"
		/>
		<PortableText :blocks="article.body" />
	</article>
    <ErrorMessage v-else message="Nie znaleziono artykułu"/>
</template>

<style lang="scss" scoped>
article {
	font-size: 1.05em;
	padding: 1em 1.2em;
	border: 1px solid rgba(0, 0, 0, 0.125);

	.date {
		font-size: 0.9em;
	}

	.title {
		margin: 0.6em 0;
	}

	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: min(100%, 650px);

		padding: 0.6em 0;
	}
}
</style>
