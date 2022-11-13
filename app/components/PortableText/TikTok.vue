<script setup lang="ts">
interface Props {
    id: string
}
defineProps<Props>()

onMounted(() => {
    const newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = "https://www.tiktok.com/embed.js";
    newScript.async = true
    document.body.appendChild(newScript);
})
</script>

<template>
    <blockquote class="tiktok-embed" :data-video-id="id"
        style="max-width: 605px;min-width: 325px;">
        <section>
        </section>
    </blockquote>
</template>