<script setup lang="ts">
const articles = await getArticles(2)
</script>

<template>
    <main>
        <SchoolBanner />
        <section>
            <h1>Szybki wybór</h1>
            <Grid>
                <CategoryButton title="E-dziennik" description="Link do szkolnego dziennika"
                    path="https://uonetplus.vulcan.net.pl/powiatwagrowiecki/" :targetBlank="true" />
                <CategoryButton title="Kalendarz roku szkolnego" description="Sprawdź kiedy najbliższe wolne"
                    path="/" />
                <CategoryButton title="Matura 2023" description="To czego się obawiasz najbardziej"
                    path="/matura-2023" />
                <CategoryButton title="Biblioteka" description="Dla książkowych moli" path="/biblioteka" />
                <CategoryButton title="Konkursy" description="Spróbuj swoich sił!" path="/szkola/konkursy" />
                <CategoryButton title="Komitet rodzicielski" description="Wpłata dla komitetu" path="/" />
            </Grid>
        </section>
        <section>
            <div>
                <h1>
                    <NuxtLink to="/aktualnosci" style="text-decoration:none">
                        Aktualności
                        <Icon name="mdi:chevron-right" size="30" />
                    </NuxtLink>
                </h1>
                <div class="articles">
                    <ArticleCard v-for="article in articles" :article="article" :key="article.slug" />
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
section {
    margin: 2.5em 0;
}

.articles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

@media (max-width: 676px) {
    .articles {
        grid-template-columns: 1fr;
    }
}
</style>