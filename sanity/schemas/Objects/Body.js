export default {
  title: "Body",
  name: "body",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                name: "targetBlank",
                type: "boolean",
                title: "Nowa karta",
                description: "Otwórz link w nowej karcie",
              },
            ],
          },
        ],
      },
    },
    { type: "image" },
    { type: "tiktok-embed" },
  ],
};
