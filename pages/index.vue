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
                <h1>Aktualności</h1>
                <div class="news-feed">
                    <NewsCard imageUrl="/p1.webp" title="II miejsce szachistów"
                        content="4. listopada w Szkole Podstawowej nr 2 w Wągrowcu odbyły Mistrzostwa Powiatu SZS w Szachach Drużynowych. W składzie reprezentacji naszej szkoły wystąpili: Maja Ciesiółka, Michał Kubanek, Szymon Lihs, Radosław Wieczorek, Bartłomiej Cholewiński i Mikołaj Grewling. Tym razem bezpośredni pojedynek z najgroźniejszym rywalem miał miejsce już w pierwszej rundzie (w ubiegłym roku miało to miejsce w ostatniej rundzie). Wynik tego meczu był remisowy 2:2 ze wskazaniem na ZS2, bo zdobyliśmy punkty na pierwszych dwóch szachownicach. Po dziesięciu rundach okazało się, że minimalne straty w małych punktach “zepchnęły” naszych na 2. miejsce. Zacięta walka trwała ponad cztery godziny. Drugie miejsce też dało awans do rozgrywek na szczeblu wojewódzkim. Gratulacje!" />
                    <NewsCard imageUrl="/p2.jpg" title="Wieczór z poezją"
                        content="W ramach 45. Międzynarodowego Listopada Poetyckiego na Ziemi Wągrowieckiej już w najbliższy piątek w naszej szkole odbędzie się Wieczór z poezją pt. „Otuleni słowem”. Zapraszamy! Wstęp wolny!" />
                </div>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
section {
    margin: 2.5em 0;
}

.news-feed {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

@media (max-width: 676px) {
    .news-feed {
        grid-template-columns: 1fr;
    }
}
</style>