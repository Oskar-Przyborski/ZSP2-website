import { MdOutlinePageview } from "react-icons/md";
import { defineArrayMember, defineField } from "sanity";

export const PageButton = defineArrayMember({
  type: "object",
  name: "page-button",
  title: "Odnośnik strony",
  icon: MdOutlinePageview,
  fields: [
    defineField({
      title: "Tytuł",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Opis",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Strona wewnętrzna",
      name: "internal",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: () => true,
    }),
    defineField({
      title: "Referencja",
      name: "reference",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.internal == false,
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      hidden: ({ parent }) => parent?.internal == true,
    }),
    defineField({
      name: "targetBlank",
      type: "boolean",
      title: "Nowa karta",
      description: "Otwórz w nowej karcie",
      initialValue: () => false,
    }),
  ],
});
