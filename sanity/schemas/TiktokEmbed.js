import React from "react";
import { FaTiktok } from "react-icons/fa";
export default {
  type: "object",
  name: "tiktok-embed",
  title: "TikTok",
  icon: React.forwardRef((props, ref) => <FaTiktok />),
  fields: [
    {
      type: "string",
      title: "TikTok ID",
      name: "id",
      description: "Można je zdobyć wycinająć je z URL tiktok'a",
    },
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
};
