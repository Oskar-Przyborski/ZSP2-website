import { MdOutlinePageview } from "react-icons/md";
export default {
  type: "object",
  name: "page-button",
  title: "Odnośnik strony",
  icon: MdOutlinePageview,
  fields: [
    {
      title: "Tytuł",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Opis",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Strona wewnętrzna",
      name: "internal",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: () => true,
    },
    {
      title: "Referencja",
      name: "reference",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.internal == false,
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      hidden: ({ parent }) => parent?.internal == true,
    },
    {
      name: "targetBlank",
      type: "boolean",
      title: "Nowa karta",
      description: "Otwórz w nowej karcie",
      initialValue: () => false,
    },
  ],
};
