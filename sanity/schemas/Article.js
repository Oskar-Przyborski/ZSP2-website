export default {
  type: "document",
  name: "article",
  title: "Artykuł",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Tytuł",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    { type: "image", name: "image", title: "Zdjęcie tytułowe" },
    {
      type: "boolean",
      name: "showTitleImage",
      title: "Wyświetl zdjęcie tytułowe",
      description:
        "Określa, czy na początku artykułu, powinno się wyświetlić zdjęcie tytułowe",
      initialValue: () => true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      type: "body",
      title: "Body",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "datetime",
      title: "Data",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
  ],
};
