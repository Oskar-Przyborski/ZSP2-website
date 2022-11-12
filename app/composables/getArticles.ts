export const getArticles = async () => {
	const sanity = useSanity();
	const query = groq`*[_type=="article"]{
        title,
        "slug": slug.current,
        "imageUrl": image.asset -> url,
        body,
        datetime
    }`;
	return await sanity.fetch<Article[]>(query);
};

export const getPreviewFromArticle = (article: Article, maxLenght: number): string => {
	const firstArticle = article.body.find((x) => x._type == "block");
	let preview = "";
    for(const child of firstArticle.children){
        preview = preview.concat(child.text)
        if(preview.length>maxLenght-3){
            preview = preview.substring(0,maxLenght-3)
            preview = preview + "..."
            break;
        }
    }
	return preview;
};
