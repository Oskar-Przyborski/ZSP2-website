import { MdOutlinePageview } from "react-icons/md";
export default {
  type: "document",
  name: "page",
  title: "Strona",
  icon: MdOutlinePageview,
  fields: [
    {
      title: "Tytuł",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Ścieżka",
      description: "Na przykład: /szkola/o-nas/nauczyciele",
      name: "path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((path) => {
          const regex = RegExp("\/[a-z0-9-]*[\/a-z0-9-]*(?<!\/)");
          if (regex.exec(path)[0] == path) return true;
          else return "Ścieżka nieprawidłowa";
        }),
    },
    {
      title: "Body",
      name: "body",
      type: "body",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "path",
    },
  },
};
