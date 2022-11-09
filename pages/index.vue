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
                <CategoryButton title="Matura 2023" description="To czego się obawiasz najbardziej" path="/" />
                <CategoryButton title="Biblioteka" description="Dla książkowych moli" path="/" />
                <CategoryButton title="Konkursy" description="Spróbuj swoich sił!" path="/" />
                <CategoryButton title="Komitet rodzicielski" description="Wpłata dla komitetu" path="/" />
            </Grid>
        </section>
        <section>
            <div>
                <h1>Aktualności</h1>
                <div class="news-feed">
                    <div class="news-item">
                        <div class="image-wrapper">
                            <NuxtImg src="p1.webp" />
                        </div>
                        <h2>II miejsce szachistów</h2>
                        <p>4. listopada w Szkole Podstawowej nr 2 w Wągrowcu odbyły Mistrzostwa Powiatu SZS w
                            Szachach
                            Drużynowych. W składzie reprezentacji naszej szkoły wystąpili: Maja Ciesiółka, Michał
                            Kubanek,
                            Przemysław Lihs, Radosław Wieczorek... <a href="#">Czytaj dalej</a>
                        </p>
                    </div>

                    <div class="news-item">
                        <div class="image-wrapper">
                            <NuxtImg src="p2.jpg" />
                        </div>
                        <h2>Wieczór z poezją </h2>
                        <p>W ramach 45. Międzynarodowego Listopada Poetyckiego na Ziemi Wągrowieckiej już w
                            najbliższy
                            piątek w naszej szkole odbędzie się Wieczór z poezją pt. „Otuleni słowem”. Zapraszamy!
                            Wstęp
                            wolny! <a href="#">Czytaj dalej</a>
                        </p>
                    </div>
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

    .news-item {
        padding: 1.3em;
        border: 1px solid rgba(0, 0, 0, 0.125);

        .image-wrapper {
            overflow: hidden;

            img {
                min-width: 100%;
                max-width: 100%;
                object-fit: cover;
                transition: transform 0.3s ease-in-out;

                &:hover {
                    transform: scale(1.02)
                }
            }
        }
    }
}

@media only screen and (max-width: 676px) {
    .news-feed {
        grid-template-columns: 1fr;
    }
}
</style>