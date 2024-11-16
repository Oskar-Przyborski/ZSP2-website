import { MdGrid3X3 } from "react-icons/md";
import { defineArrayMember, defineField } from "sanity";
import { FileButton } from "./FileButton";
import { PageButton } from "./PageButton";
import { TiktokEmbed } from "./TiktokEmbed";
import { YoutubeEmbed } from "./YoutubeEmbed";

export const Grid = defineArrayMember({
  title: "Siatka",
  name: "grid",
  type: "object",
  icon: MdGrid3X3,
  fields: [
    defineField({
      title: "Elementy",
      name: "elements",
      type: "array",
      of: [
        TiktokEmbed,
        YoutubeEmbed,
        PageButton,
        FileButton,
        { type: "image" },
      ],
    }),
  ],
  preview: {
    select: {
      items: "elements",
    },
    prepare({ items }) {
      return { title: `Siatka, ${items ? items?.length : "0"} elementów` };
    },
  },
});
