<script setup lang="ts">
const { articles } = await getArticles(2);

useHead({
	title: "ZS2 Wągrowiec",
});
</script>

<template>
	<main>
		<SchoolBanner />
		<section>
			<h1>Szybki wybór</h1>
			<Grid>
				<CategoryButton
					title="E-dziennik"
					description="Link do szkolnego dziennika"
					path="https://uonetplus.vulcan.net.pl/powiatwagrowiecki/"
					:targetBlank="true"
				/>
				<CategoryButton
					title="Kalendarz roku szkolnego"
					description="Sprawdź kiedy najbliższe wolne"
					path="https://cdn.sanity.io/files/vm3xce09/production/d969d2aad847829068119cbbc1724f2bd05f3724.pdf"
					targetBlank
				/>
				<CategoryButton
					title="Matura 2023"
					description="To czego się obawiasz najbardziej"
					path="/matura-2023"
				/>
				<CategoryButton
					title="Biblioteka"
					description="Dla książkowych moli"
					path="/biblioteka"
				/>
				<CategoryButton
					title="Konkursy"
					description="Spróbuj swoich sił!"
					path="/konkursy"
				/>
				<CategoryButton
					title="Komitet rodzicielski"
					description="Wpłata dla komitetu"
					path="/"
				/>
			</Grid>
		</section>
		<section>
			<div>
				<h1>
					<NuxtLink to="/aktualnosci" style="text-decoration: none">
						Aktualności
						<Icon name="mdi:chevron-right" size="30" />
					</NuxtLink>
				</h1>
				<div class="articles">
					<ArticleCard
						v-for="article in articles"
						:article="article"
						:key="article.slug"
					/>
				</div>
				<div class="show-more">
					<Button to="/aktualnosci/strona/1" class="btn"
						>Pokaż więcej</Button
					>
				</div>
			</div>
		</section>
		<section>
			<h1>Nasze kierunki</h1>
			<Grid>
				<Major
					tag="LICEUM"
					title="Akademicka Szkoła Politechniczna"
					description="Wydaje mi się że nudne, ale możesz przyjść"
					extenstions="Matematyka i fizyka albo chemia"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Bezpieczeństwa Publicznego"
					description="Jak lubisz mundury :D"
					extenstions="Geografia i WOS"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Pedagogiczna"
					path="/"
					description="Interesujesz się psychologią bądź pedagogiką?"
					extenstions="Język polski i biologia"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Rehabilitacyjno-Medyczna"
					path="/"
					description="Wyleczymy cię z twoich problemów :P"
					extenstions="Biologia i chemia"
				/>
				<Major
					tag="LICEUM"
					title="Klasa Geograficzno-Językowa"
					path="/"
					description="Niemiecki, Hiszpański, Angielski? Wybieraj"
					extenstions="Geografia i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Technologii Chemicznej"
					path="/"
					description="Zawsze wlewaj kwas do wody!"
					extenstions="Chemia i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Ekonomista"
					path="/"
					description="Kiedy lubisz liczyć pieniążki"
					extenstions="Matematyka i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Hotelarstwa"
					path="/"
					description="Szczerze, nie wiem co tu napisać"
					extenstions="Geografia i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Programista"
					path="/"
					description="Dla miłośników parzenia kawy"
					extenstions="Matematyka i język obcy"
				/>
				<Major
					tag="TECHNIKUM"
					title="Techink Informatyk"
					path="/"
					description="Klasowy informatyk? Tu jest twoje miejsce"
					extenstions="Matematyka i język obcy"
				/>
			</Grid>
		</section>
		<section>
			<h1>Gdzie nas znajdziesz?</h1>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.8202096874412!2d17.20311518146056!3d52.817301834514325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704786d2dabccf5%3A0xccf9d4ee405cacde!2sZesp%C3%B3%C5%82%20Szk%C3%B3%C5%82%20Ponadgimnazjalnych%20nr%202%20im.%20pp%C5%82k.%20dr.%20S.%20Kuli%C5%84skiego!5e0!3m2!1spl!2spl!4v1670083396425!5m2!1spl!2spl"
				width="100%"
				height="450"
				style="border: 0"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</section>
	</main>
</template>

<style lang="scss" scoped>
section {
	margin: 2em 0;
}

.articles {
	display: grid;
	grid-template-columns: 1fr 1fr;
}

@media (max-width: 676px) {
	.articles {
		grid-template-columns: 1fr;
	}
}

.show-more {
	display: grid;
	place-items: center;

	.btn {
		padding: 0.6em;
		margin: 0.5em;
	}
}
</style>
