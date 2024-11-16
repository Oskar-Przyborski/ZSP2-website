import { defineField, defineType } from "sanity"
import { Body } from "./Objects/Body";

export const Article = defineType({
  type: "document",
  name: "article",
  title: "Artykuł",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Tytuł",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Zdjęcie tytułowe"
    }),
    defineField({
      type: "boolean",
      name: "showTitleImage",
      title: "Wyświetl zdjęcie tytułowe",
      description: "Określa, czy na początku artykułu, powinno się wyświetlić zdjęcie tytułowe",
      initialValue: () => true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "body",
      name: "body",
      title: "Body",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "datetime",
      name: "datetime",
      title: "Data",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
