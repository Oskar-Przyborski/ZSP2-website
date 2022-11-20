<template>
	<div class="banner">
		<div class="content">
			<div class="logo">
				<NuxtImg
					src="logo.webp"
					alt="Logo szkoły ZS2 Wągrowiec"
					width="125"
                    height="125"
				/>
			</div>
			<div class="title">
				<div class="name">Zespół Szkół Nr 2</div>
				<div class="sub1">im. ppłk. dr. Stanisława Kulińskiego</div>
				<div class="sub2">w Wągrowcu</div>
			</div>
		</div>
		<div class="background">
			<NuxtImg
				src="panorama-szkoly.webp"
				alt="Panorama szkoły ZS2"
				width="868"
				height="184"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.banner {
	margin-top: 0.5em;
	padding: 1em 0.5em;
	position: relative;

	.background {
        img{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
    
            overflow: hidden;
            object-fit: cover;
        }
	}

	.content {
		display: flex;
		gap: 20px;
		padding: 0.7em;
		background-color: #0007;
		width: fit-content;

		img {
			width: 125px;
			height: 125px;
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
				height: 90px;
			}
		}
	}
}
</style>
