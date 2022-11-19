import internalLink from "./internalLink";
import link from "./link";

export default {
  title: "Body",
  name: "body",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [internalLink, link],
      },
    },
    { type: "image" },
    { type: "tiktok-embed" },
    { type: "grid" },
    { type: "category-button" },
  ],
};
