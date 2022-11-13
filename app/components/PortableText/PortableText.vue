<script setup lang="ts">
import { Serializers } from '@nuxtjs/sanity/dist/runtime/components/sanity-content';

defineProps<{ blocks: any[] }>();

const serializers: Serializers = {
    types: {
        "image": resolveComponent("PortableTextImage"),
        "tiktok-embed": resolveComponent("PortableTextTikTok"),
    },
    marks: {
        "underline": resolveComponent("PortableTextUnderline"),
        "strike-through": resolveComponent("PortableTextStrike"),
        "code": resolveComponent("PortableTextCode"),
        "link": resolveComponent("PortableTextLink")
    }
}
</script>

<template>
    <SanityContent :blocks="blocks" :serializers="serializers" />
</template>