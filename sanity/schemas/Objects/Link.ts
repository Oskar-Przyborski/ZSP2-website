import { BiLinkExternal } from "react-icons/bi";
import { defineArrayMember, defineField } from "sanity";

export const Link = defineArrayMember({
  name: "link",
  type: "object",
  title: "Link",
  icon: BiLinkExternal,
  fields: [
    defineField({
      name: "href",
      type: "url",
      title: "URL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "targetBlank",
      type: "boolean",
      title: "Nowa karta",
      description: "Otwórz link w nowej karcie",
    }),
  ],
});
