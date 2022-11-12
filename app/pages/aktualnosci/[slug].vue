<script setup lang="ts">
const route = useRoute();
const article = await getArticle(route.params["slug"] as string)
</script>
<template>
    <BackButton to="/aktualnosci">Aktualności</BackButton>
    <article>
        <h1>{{ article.title }}</h1>
        <NuxtImg v-if="article.imageUrl != null" :src="article.imageUrl" class="img-fluid img" />
        <SanityContent :blocks="article.body" />
    </article>
</template>
<style lang="scss" scoped>
article {
    font-size: 1.15em;
    padding: .5em 1em;
    border: 1px solid rgba(0, 0, 0, 0.125);

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: min(100%, 650px);

        padding: .6em 0;
    }
}
</style>