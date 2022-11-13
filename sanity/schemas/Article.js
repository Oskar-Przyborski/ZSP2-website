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
      type: "boolean",
      name: "showTitleImage",
      title: "Wyświetl zdjęcie tytułowe",
      description:
        "Określa, czy na początku artykułu, powinno się wyświetlić zdjęcie tytułowe",
      initialValue: () => true,
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [{ type: "block" }, { type: "image" }, { type: "tiktok-embed" }],
    },
    {
      name: "datetime",
      title: "Data",
      type: "datetime",
    },
  ],
};
