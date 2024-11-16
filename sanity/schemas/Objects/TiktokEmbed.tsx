import React from "react";
import { FaTiktok } from "react-icons/fa";
import { defineArrayMember, defineField } from "sanity";

export const TiktokEmbed = defineArrayMember({
  type: "object",
  name: "tiktok-embed",
  title: "TikTok",
  icon: React.forwardRef((props, ref) => <FaTiktok />),
  fields: [
    defineField({
      type: "string",
      title: "TikTok ID",
      name: "id",
      description: "Można je zdobyć wycinająć je z URL tiktok'a",
    }),
  ],
  preview: {
    select: {
      id: "id",
    },
    prepare({ id }) {
      return {
        title: "TikTok",
        subtitle: `ID: ${id}`,
      };
    },
  },
});
