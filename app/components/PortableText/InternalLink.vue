<script setup lang="ts">
defineProps<{ path: string }>();
</script>
<template>
    <NuxtLink :to="path">
        <slot/>
    </NuxtLink>
</template>
