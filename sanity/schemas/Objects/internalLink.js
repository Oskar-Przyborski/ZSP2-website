import { BiLink } from "react-icons/bi";

export default {
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
};
