<template>
    <div class="grid">
        <slot />
    </div>
</template>
<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

@media only screen and (max-width: 1200px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 677px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>