import { MdOutlineNavigation } from "react-icons/md";
import { defineArrayMember, defineField } from "sanity";

export const NavigationCategory = defineArrayMember({
  type: "object",
  name: "navigation-category",
  title: "Pozycja nawigacji",
  icon: MdOutlineNavigation,
  fields: [
    defineField({
      title: "Nazwa",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Ścieżka",
      name: "path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((path) => {
          if (path == null) return "Ścieżka nieprawidłowa";

          const regex = new RegExp("[a-z0-9-]+");
          const matches = regex.exec(path);
          if (matches == null) return "Ścieżka nieprawidłowa";

          if (matches[0] == path) return true;
          else return "Ścieżka nieprawidłowa";
        }),
    }),
    defineField({
      title: "Ikona",
      name: "icon",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "icon",
    },
  },
});
