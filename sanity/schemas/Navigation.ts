import { defineArrayMember, defineField, defineType } from "sanity";
import { NavigationCategory } from "./Objects/NavigationCategory";

export const Navigation = defineType({
  type: "document",
  name: "navigation",
  title: "Nawigacja",
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      title: "Menu",
      name: "menu",
      type: "array",
      of: [NavigationCategory],
    }),
    defineField({
      title: "Social Media",
      name: "socials",
      type: "array",
      of: [
        defineArrayMember({
          title: "Social media element",
          type: "object",
          name: "social-item",
          fields: [
            defineField({
              type: "string",
              name: "icon",
              title: "Icon",
            }),
            defineField({
              type: "string",
              name: "url",
              title: "URL",
            }),
          ],
        }),
      ],
    }),
  ],
});
