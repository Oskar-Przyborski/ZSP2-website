<script setup lang="ts">
interface Props {
    imageUrl?: string,
    title: string,
    content?: string
}
defineProps<Props>();

</script>

<template>
    <NuxtLink :to="'/' + title" class="news-card">
        <div class="image-wrapper" v-if="imageUrl != null">
            <NuxtImg :src="imageUrl"/>
        </div>
        <div class="text">
            <div class="title">{{ title }}</div>
            <div class="description" v-if="content != null">
                {{ content.substring(0, 100) }}<span v-if="content.length > 100">...</span>
            </div>
        </div>
    </NuxtLink>
</template>
<style lang="scss" scoped>
.news-card {
    padding: 1.3em;
    border: 1px solid rgba(0, 0, 0, 0.125);

    display: flex;
    flex-direction: column;
    text-decoration: none;

    .text {

        .title {
            font-size: 1.4em;
            font-weight: 500;
            margin-top: .8em;
            margin-bottom: .6em;
        }
    }

    .image-wrapper {
        overflow: hidden;

        img {
            min-width: 100%;
            max-width: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;

        }
    }

    &:hover {
        img {
            transform: scale(1.02)
        }
    }
}
</style>