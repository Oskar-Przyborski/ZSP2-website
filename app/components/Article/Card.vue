<script setup lang="ts">
interface Props {
    article: Article
}
defineProps<Props>();
</script>

<template>
    <div class="news-card">
        <div class="top">
            <div class="image-wrapper" v-if="article.image != null">
                <NuxtImg :src="article.image?.url" :alt="article.image.altText"/>
            </div>
            <div class="text">
                <div class="title">{{ article.title }}</div>
                <div class="description" v-if="article.body != null">
                    {{ getPreviewFromArticle(article, 100) }}
                </div>
            </div>
        </div>
        <div class="bottom">
            <div>
                {{ getDateFromArticle(article) }}
            </div>
            <UnderlineButton :to="'/aktualnosci/artykul/' + article.slug">Czytaj dalej</UnderlineButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.news-card {
    padding: 1.3em;
    border: 1px solid rgba(0, 0, 0, 0.125);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    .top {
        .image-wrapper {
            overflow: hidden;

            img {
                min-width: 100%;
                max-width: 100%;
                object-fit: cover;
                transition: transform 0.3s ease-in-out;

            }
        }

        .text {
            padding-bottom: .45em;

            .title {
                font-size: 1.4em;
                font-weight: 500;
                margin-top: .8em;
                margin-bottom: .6em;
            }
        }
    }

    .bottom {
        display: flex;
        justify-content: space-between;
    }
}
</style>