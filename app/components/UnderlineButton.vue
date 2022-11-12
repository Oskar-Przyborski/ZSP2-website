<script setup lang="ts">
interface Props {
    to: string
}
defineProps<Props>()
</script>

<template>
    <NuxtLink :to="to" class="underline-btn">
        <slot />
    </NuxtLink>
</template>
<style lang="scss" scoped>
.underline-btn {
    text-decoration: none;
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
</style>