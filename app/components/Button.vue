<script setup lang="ts">
interface Props {
    url: string,
    targetBlank?: boolean
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
    padding: .35em;
    transition: background-color 0.2s, color 0.1s, border 0.2s;
    color: inherit;
    text-decoration: none;

    border: 2px solid currentColor;
    
    &:hover {
        border: 2px solid var(--yellow);
        background-color: var(--yellow);
        color: #252525;
    }
}
</style>