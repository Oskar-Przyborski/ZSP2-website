<script setup lang="ts">
interface Props {
    asset: {
        url: string,
        altText?: string
    }
}
defineProps<Props>()

</script>
<template>
    <NuxtImg :src="asset.url" :alt="asset.altText" />
</template>
<style scoped>
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: min(100%, 650px);

    padding: .6em 0;
}
</style>