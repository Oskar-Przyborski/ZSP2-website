<script setup lang="ts">
interface Props {
    title: string,
    description: string,
    path?: string
}
defineProps<Props>()
</script>
<template>
    <NuxtLink :to="path" class="category-button">
        <div class="text">
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
        </div>
        <div class="arrow">
            <Icon name="mdi:arrow-right" size="25" />
        </div>
    </NuxtLink>
</template>
<style lang="scss" scoped>
.category-button {
    border: 1px solid rgba(0, 0, 0, 0.125);
    text-decoration: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        padding: 1em;
        padding-right: 1.5em;

        .title {
            font-size: 1.3em;
            font-weight: 500;
        }

        .description {
            padding-top: .7em;
            color: #252525;
        }
    }

    .arrow {
        height: 100%;
        aspect-ratio: 1/1;
        position: relative;
        display: grid;
        place-items: center;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            bottom: 0;
            background-color: var(--yellow);
            z-index: -1;
            width: 0%;
            transition: width 0.2s ease-in-out;
        }
    }



    &:hover {
        .arrow {
            &::before {
                width: 100%;
            }
        }
    }
}
</style>