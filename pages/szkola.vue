<template>
    <div>
        <h1>Szkoła</h1>
        <div class="categories-grid">
            <CategoryButton title="O Nas" description="Co Robimy? Kim jesteśmy?" path="/szkola/o-nas" />
            <CategoryButton title="Podręczniki" description="Wykaz potrzebnych Ci podręczników"
                path="/szkola/podreczniki" />
            <CategoryButton title="RSU" description="Nasz skład i plany" path="/szkola/rsu" />
            <CategoryButton title="Konkursy" description="Chiałbyś coś wygrać? Zajrzyj!" path="/szkola/konkursy" />
            <CategoryButton title="Sport" description="Ruch to zdrowie" path="/szkola/sport" />
            <CategoryButton title="Uczelnie współorganizujące" description="Co Robimy? Kim jesteśmy?"
                path="/szkola/uczelnie-wspolorganizujace" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.categories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}
</style>