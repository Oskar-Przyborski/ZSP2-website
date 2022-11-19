import { MdGrid3X3 } from "react-icons/md";

export default {
  title: "Siatka",
  name: "grid",
  type: "object",
  icon: MdGrid3X3,
  fields: [
    {
      title: "Elementy",
      name: "elements",
      type: "array",
      of: [
        { type: "image" },
        { type: "tiktok-embed" },
        { type: "page-button" },
      ],
    },
  ],
  preview: {
    select: {
      items: "elements",
    },
    prepare({ items }) {
      return { title: `Siatka, ${items ? items?.length : "0"} elementów` };
    },
  },
};
