<script setup lang="ts">
const articles = await getArticles()
</script>

<template>
    <div>
        <h1>Aktualności</h1>
        <Grid>
            <ArticleCard v-for="article in articles" :key="article.slug" :article="article" />
        </Grid>
    </div>
</template> 
