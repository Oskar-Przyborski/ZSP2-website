import React from "react";
import { FaYoutube } from "react-icons/fa";
import { defineArrayMember, defineField } from "sanity";

export const YoutubeEmbed = defineArrayMember({
  type: "object",
  name: "youtube-embed",
  title: "YouTube",
  icon: React.forwardRef((props, ref) => <FaYoutube />),
  fields: [
    defineField({
      type: "string",
      title: "Wideo ID",
      name: "videoId",
      description:
        "ID filmu na YouTube, jest to ciąg 11 znaków. Można je znaleźć w URL filmu",
    }),
  ],
  preview: {
    select: {
      id: "videoId",
    },
    prepare({ id }) {
      return {
        title: "Film YouTube",
        subtitle: `ID: ${id}`,
      };
    },
  },
});
