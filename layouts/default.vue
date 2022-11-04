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
    display: grid;
    grid-template-columns: max-content 1fr;


    .content {
        padding: .5em 2em;
    }

}

@media only screen and (max-width: 767px) {
    .app {
        display: block;

        .content {
            padding: 0em .7em 0em .7em; 
            padding-top: 49px;
        }
    }
}
</style>