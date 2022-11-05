<template>
    <main>
        <SchoolBanner />
        <section class="section">
            <h1>Szybki wybór</h1>
            <Grid>
                <CategoryButton title="E-dziennik" description="Link do szkolnego dziennika"
                    path="https://uonetplus.vulcan.net.pl/powiatwagrowiecki/" :targetBlank="true" />
                <CategoryButton title="Kalendarz roku szkolnego" description="Sprawdź kiedy najbliższe wolne"
                    path="/" />
                <CategoryButton title="Matura 2023" description="To czego się obawiasz najbardziej" path="/" />
                <CategoryButton title="Biblioteka" description="Dla książkowych moli" path="/" />
                <CategoryButton title="Konkursy" description="Spróbuj swoich sił!" path="/" />
                <CategoryButton title="Komitet rodzicielski" description="Wpłata dla komitetu" path="/" />
            </Grid>
        </section>
    </main>
</template>
<style lang="scss" scoped>
.section {
    margin: 2em 0;
}
</style>