<template>
    <div class="app">
        <Nav class="nav" />
        <div class="content">
            <slot />
            <Footer />
        </div>
    </div>
</template> 
<style scoped lang="scss">
.app {
    height: 100vh;

    .content {
        padding: .5em 2em;
        margin-left: 250px;
    }

}

@media only screen and (max-width: 800px) {
    .app {
        display: block;

        .content {
            padding: 0em .7em 0em .7em;
            padding-top: 49px;
            margin-left: initial;
        }
    }
}
</style>