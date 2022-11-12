
<template>
    <footer>
        <Divider />
        <div class="footer-main">
            <div class="left">
                <div>
                    <NuxtImg src="/godlo.png" width="80" />
                </div>
                <div class="text">
                    <div class="h1">Zespół Szkół nr 2</div>
                    <div class="h2">W Wągrowcu</div>
                </div>
            </div>
            <Divider vertical />
            <div class="right">
                <Icon name="mdi:map-marker-outline" /> Ul. Kościuszki 49, 62-100 Wągrowiec<br />
                <Icon name="mdi:email-outline" /> zsp2@wagrowiec.pl<br />
                <Icon name="mdi:phone-outline" /> 605040076<br />
                <Icon name="mdi:phone-outline" /> (67)2620347<br />
            </div>
        </div>
        <div>
            Copyright © 2022 Zespół Szkół nr 2 w Wągrowcu. Developed by Oskar Przyborski.
        </div>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    margin-top: 2em;
    text-align: center;
    font-size: 0.9em;
    color: #252525;


    .footer-main {
        margin-top: 1.5em;
        margin-bottom: 1em;

        display: grid;
        grid-template-columns: 1fr min-content 1fr;
        place-items: center;
        gap: 10px;

        .left {
            display: flex;
            gap: 20px;

            .text {
                text-align: left;

                .h1 {
                    font-size: 1.8em;
                    font-weight: 600;
                }

                .h2 {
                    font-size: 1.3em;
                    font-weight: 500;
                }
            }
        }

        .right {
            font-size: 1.1em;
            text-align: left;
            line-height: 21px;
        }
    }
}

@media (max-width: 676px) {
    footer {
        .footer-main {
            grid-template-columns: initial;
            grid-template-rows: 1fr min-content 1fr;

            .left {
                align-items: center;

                img {
                    width: 60px;
                    height: auto;
                }
            }

        }
    }

    .vl {
        border-left: initial;
        height: initial;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        width: 90%;
    }
}
</style>
    