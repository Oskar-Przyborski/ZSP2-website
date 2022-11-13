interface NavData {
	menu: {
		title: string;
		path: string;
		icon: string;
	}[];
	socials: {
		icon: string;
		url: string;
	}[];
}
export const getNavData = async () => {
	const sanity = useSanity();
	const query = groq`*[_id=="singleton-navigation"][0]{menu[]{icon, path, title}, socials[]{icon,url}}`;
	const data = await sanity.fetch<NavData>(query);

	data.menu.unshift(
		{
			title: "Home",
			icon: "mdi:home-outline",
			path: "/",
		},
		{
			title: "Aktualności",
			icon: "mdi:newspaper-variant-outline",
			path: "/aktualnosci",
		}
	);
	return data;
};
