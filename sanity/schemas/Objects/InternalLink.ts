import { BiLink } from "react-icons/bi";
import { defineArrayMember } from "sanity";

export const InternalLink = defineArrayMember({
  title: "Link wewnętrzny",
  name: "internal-link",
  type: "object",
  icon: BiLink,
  fields: [
    {
      title: "Referencja",
      name: "reference",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
  ],
});
