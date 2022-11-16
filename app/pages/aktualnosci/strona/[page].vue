<script setup lang="ts">
const PER_PAGE = 6;

const route = useRoute();
const page = parsePage(route.params["page"] as string);

if (page == 1 && route.params["page"] != "1")
	navigateTo("/aktualnosci/strona/1");

const { all, articles } = await getArticles(PER_PAGE, page - 1);

if (articles.length == 0 && all != 0) navigateTo("/aktualnosci/strona/1");

const getPagesQuantity = (all: number, perPage: number) =>
	Math.ceil(all / perPage);
const getPerviousPage = (current: number) =>
	current == 1 ? null : current - 1;
const getNextPage = (current: number, max: number) =>
	current == max ? null : current + 1;

const prevPage = getPerviousPage(page);
const nextPage = getNextPage(page, getPagesQuantity(all, PER_PAGE));

useHead({
	title: "Aktualności - ZS2 Wągrowiec",
});
</script>

<template>
	<div>
		<h1>Aktualności</h1>
		<Grid>
			<ArticleCard
				v-for="article in articles"
				:key="article.slug"
				:article="article"
			/>
		</Grid>
		<div class="pagination-btns">
			<UnderlineButton
				:to="prevPage != null ? `/aktualnosci/strona/${prevPage}` : ''"
				:disabled="prevPage == null"
			>
				<Icon name="mdi:chevron-left" size="24" /> Poprzednia
			</UnderlineButton>
			<UnderlineButton
				:to="nextPage != null ? `/aktualnosci/strona/${nextPage}` : ''"
				:disabled="nextPage == null"
			>
				Nastepna
				<Icon name="mdi:chevron-right" size="24" />
			</UnderlineButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.pagination-btns {
	margin: 2em 0;
	display: flex;
	justify-content: center;
	gap: 2em;
}
</style>
