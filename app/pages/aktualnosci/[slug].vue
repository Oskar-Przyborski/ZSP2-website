<script setup lang="ts">
const route = useRoute();
const article = await getArticle(route.params["slug"] as string)
</script>

<template>
    <BackButton to="/aktualnosci">Aktualności</BackButton>
    <article>
        <div class="date">{{ getDateFromArticle(article) }}</div>
        <h1 class="title">{{ article.title }}</h1>
        <NuxtImg v-if="article.imageUrl != null" :src="article.imageUrl" class="img-fluid img" />
        <SanityContent :blocks="article.body" />
    </article>
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

        padding: .6em 0;
    }
}
</style>