<script setup lang="ts">
interface Props {
    article: Article
}
defineProps<Props>();

</script>

<template>
    <div class="news-card">
        <div class="image-wrapper" v-if="article.imageUrl != null">
            <NuxtImg :src="article.imageUrl" />
        </div>
        <div class="text">
            <div class="title">{{ article.title }}</div>
            <div class="description" v-if="article.body != null">
                {{ getPreviewFromArticle(article, 100) }}
            </div>
        </div>
        <div>
            <NuxtLink :to="'/aktualnosci/' + article.slug" class="read-more-btn">
                Czytaj dalej
            </NuxtLink>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.news-card {
    padding: 1.3em;
    border: 1px solid rgba(0, 0, 0, 0.125);

    display: flex;
    flex-direction: column;
    text-decoration: none;

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

    .read-more-btn {
        text-decoration: none;
        float: right;
        font-size: 1.15em;
        font-weight: 500;
        position: relative;

        &::before,
        &::after {
            content: '';
            position: absolute;
            right: 2px;
            bottom: -5px;

            border-bottom: 3px solid var(--blue);
        }

        &::before {
            width: 100%;
        }

        &::after {
            width: 0%;
            transition: width 0.2s;
            border-bottom-color: var(--yellow);
        }

        &:hover {
            &::after {
                width: 100%;
            }
        }
    }
}
</style>