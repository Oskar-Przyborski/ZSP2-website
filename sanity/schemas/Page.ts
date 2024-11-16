import { MdOutlinePageview } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const Page = defineType({
  type: "document",
  name: "page",
  title: "Strona",
  icon: MdOutlinePageview,
  fields: [
    defineField({
      title: "Tytuł",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Ścieżka",
      description: "Na przykład: /szkola/o-nas/nauczyciele",
      name: "path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((path) => {
          if (path == null) return "Ścieżka nieprawidłowa"

          const regex = new RegExp("\/[a-z0-9-]*[\/a-z0-9-]*(?<!\/)");
          const matches = regex.exec(path);
          if (matches == null) return "Ścieżka nieprawidłowa"

          if (matches[0] == path) return true;
          else return "Ścieżka nieprawidłowa";
        }),
    }),
    defineField({
      title: "Body",
      name: "body",
      type: "body",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "path",
    },
  },
});
