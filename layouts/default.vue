<template>
    <div class="app">
        <Nav />
        <div class="content">
            <slot />
            <Footer />
        </div>
    </div>
</template> 
<style scoped lang="scss">
.content {
    width: calc(100% - var(--nav-width));
    margin-left: var(--nav-width);

    padding: 2em;
}
</style>