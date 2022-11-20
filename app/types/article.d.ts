declare interface Article {
	title: string;
	slug: string;
	image?: {
		url: string,
		altText: string
	};
	showTitleImage: boolean;
	body: any[];
	datetime: string;
}
