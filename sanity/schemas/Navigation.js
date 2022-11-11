export default {
	type: "document",
	name: "navigation",
	title: "Nawigacja",
	__experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
	fields: [
		{
			title: "Menu",
			name: "menu",
			type: "array",
			of: [
				{
					type: "object",
					name: "navigation-item",
					title: "Pozycja nawigacji",
					fields: [
						{
							type: "string",
							name: "title",
							title: "Nazwa",
						},
						{
							type: "string",
							name: "path",
							title: "Ścieżka",
						},
						{
							type: "string",
							name: "icon",
							title: "Ikona",
						},
					],
					preview: {
						select: {
							title: "title",
							subtitle: "icon",
						},
					},
				},
			],
		},
		{
			title: "Social Media",
			name: "socials",
			type: "array",
			of: [
				{
					title: "Social media element",
					type: "object",
					name: "social-item",
					fields: [
						{
							type: "string",
							name: "icon",
							title: "Icon"
						},
						{
							type: "string",
							name: "url",
							title: "URL"
						}
					]
				}
			]
		},
	],
};
