<script setup lang="ts">
const route = useRoute();
const article = await getArticle(route.params["slug"] as string)
</script>
<template>
    <NuxtLink to="/aktualnosci" class="back">
        <Icon name="mdi:chevron-left" /> Aktualności
    </NuxtLink>
    <article>
        <h1>{{ article.title }}</h1>
        <NuxtImg v-if="article.imageUrl != null" :src="article.imageUrl" class="img-fluid img" />
        <SanityContent :blocks="article.body" />
    </article>
</template>
<style lang="scss" scoped>
.back {
    text-decoration: none;
    font-size: 1.25em;
    display: block;
    padding: 1em 0;
}

article {
    font-size: 1.15em;
    padding: .5em 1em;
    border: 1px solid rgba(0, 0, 0, 0.125);

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 650px;
    }
}
</style>