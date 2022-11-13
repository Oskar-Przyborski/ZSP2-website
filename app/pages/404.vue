<template>
    <div class="error">
        <h1>404</h1>
        <h2>Nic tu nie znajdziesz :/</h2>
        <div class="btn">
            <Button to="/">Wróć na stronę główną</Button>
        </div>
    </div>
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