<template>
    <div class="banner">
        <div class="content">
            <div class="logo">
                <!-- <NuxtImg src="godlo.jpg" alt="Godło Polski" width="200" /> -->
                <NuxtImg src="logo.png" alt="Logo szkoły ZS2 Wągrowiec" width="200" />
            </div>
            <div class="title">
                <div class="name">Zespół Szkół Nr 2</div>
                <div class="sub1">im. ppłk. dr. Stanisława Kulińskiego</div>
                <div class="sub2">w Wągrowcu</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.banner {
    margin-top: .5em;
    padding: 1em .5em;

    background-image: url("/panorama-szkoly.jpg");
    background-size: cover;
    background-position-y: center;

    // background-color: #aaa;
    // background-blend-mode: multiply;
    .content {
        display: flex;
        gap: 20px;
        padding: 0.7em;
        background-color: #0007;
        width: fit-content;

        img {
            width: 125px;
        }

        .title {
            color: white;
            font-size: 1.15em;

            .name {
                font-weight: 600;
                font-size: 1.5em;
                padding: 5px 0;
            }

            .sub1 {
                padding: 3px 0;
            }
        }
    }
}

@media (max-width: 530px) {
    .banner {
        .content {
            .title {
                font-size: 0.95em;
            }

            img {
                width: 90px;
            }
        }
    }
}
</style>