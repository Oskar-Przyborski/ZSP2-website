import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-16",
	modules: ["@nuxtjs/sanity", "@nuxt/icon", "@nuxt/image-edge"],
	css: ["~/assets/global.css"],
	sanity: {
		projectId: "vm3xce09",
		dataset: process.env.ENV == "DEVELOPMENT" ? "development" : "production",
		useCdn: true
	},
	app: {
		head: {
			htmlAttrs: {
				lang: "pl"
			},
			link: [
				{
					rel: "icon",
					sizes: "192x192",
					href: "/Logo192x192.webp"
				},
				{
					rel: "icon",
					sizes: "32x32",
					href: "/Logo32x32.webp"
				},
				{
					rel: "apple-touch-icon",
					sizes: "32x32",
					href: "/Logo32x32.webp"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				}
			]
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler'
				}
			}
		}
	}
});
