<script setup lang="ts">
interface Props {
    url: string,
    targetBlank: boolean
}
withDefaults(defineProps<Props>(), {
    targetBlank: false
})

</script>
<template>
    <NuxtLink :to="url" :target="targetBlank ? '_blank' : '_self'" class="btn">
        <slot />
    </NuxtLink>
</template>
<style scoped lang="scss">
.btn {
    border-radius: .5em;
    padding: 7px;
    transition: background-color 0.2s, color 0.1s;
    color: white;
    text-decoration: none;

    &:hover {
        background-color: var(--yellow);
        color: #252525;
    }
}
</style>