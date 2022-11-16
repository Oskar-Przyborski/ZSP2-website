import { BiLinkExternal } from "react-icons/bi";

export default {
  name: "link",
  type: "object",
  title: "Link",
  icon: BiLinkExternal,
  fields: [
    {
      name: "href",
      type: "url",
      title: "URL",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "targetBlank",
      type: "boolean",
      title: "Nowa karta",
      description: "Otwórz link w nowej karcie",
    },
  ],
};
