export const getArticles = async (
	max: number = 12,
	page: number = 0,
	orderby: string = "datetime desc"
) => {
	const sanity = useSanity();
	const query = groq`*[_type=="article"] | order(${orderby})[$min...$max] {
        title,
        "slug": slug.current,
        "imageUrl": image.asset -> url,
        body,
        datetime
    }`;
	return await sanity.fetch<Article[]>(query, {
		min: page * max,
		max: (page + 1) * max,
	});
};

export const getPreviewFromArticle = (
	article: Article,
	maxLenght: number
): string => {
	const firstArticle = article.body.find((x) => x._type == "block");
	let preview = "";
	for (const child of firstArticle.children) {
		preview = preview.concat(child.text);
		if (preview.length > maxLenght - 3) {
			preview = preview.substring(0, maxLenght - 3);
			preview = preview + "...";
			break;
		}
	}
	return preview;
};

export const getDateFromArticle = (article: Article) => {
	const formatter = Intl.DateTimeFormat("pl-PL", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		weekday: "short",
	});
	return formatter.format(new Date(article.datetime));
};
