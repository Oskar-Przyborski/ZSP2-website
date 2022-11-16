import { MdOutlineNavigation } from "react-icons/md";
export default {
  type: "object",
  name: "navigation-category",
  title: "Pozycja nawigacji",
  icon: MdOutlineNavigation,
  fields: [
    {
      title: "Nazwa",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Ścieżka",
      name: "path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((path) => {
          const regex = RegExp("[a-z0-9-]+");
          if (regex.exec(path)[0] == path) return true;
          else return "Ścieżka nieprawidłowa";
        }),
    },
    {
      title: "Ikona",
      name: "icon",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "icon",
    },
  },
};
