<script setup lang="ts">
const props = defineProps<{ error: any }>()
</script>

<template>
    <NuxtLayout>
        <div class="error">
            <h1>{{ error.statusCode }}</h1>
            <h2>{{ error.message }}</h2>
            <div class="btn">
                <Button to="/">Wróć na stronę główną</Button>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.error {
    text-align: center;

    .btn {
        display: grid;
        place-items: center;
        padding: .7em;
    }
}
</style>