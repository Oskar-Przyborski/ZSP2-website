export default {
  type: "document",
  name: "article",
  title: "Artykuł",
  fields: [
    { type: "string", name: "title", title: "Tytuł" },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    { type: "image", name: "image", title: "Zdjęcie tytułowe" },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
        },
        {
          type: "image"
        }
      ],
    },
    {
        name: "datetime",
        title: "Data",
        type: "datetime"
    }
  ],
};
