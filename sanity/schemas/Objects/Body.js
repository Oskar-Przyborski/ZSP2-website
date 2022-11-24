import { BiHorizontalCenter } from "react-icons/bi";
import React from "react";
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
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Wyśrodkuj",
            value: "centered",
            blockEditor: {
              icon: BiHorizontalCenter,
              render: props=> <div style={{ textAlign: 'center' }}>{props.children}</div>
            },
          },
        ],
      },
    },
    { type: "image" },
    { type: "page-button" },
    { type: "file-button" },
    { type: "grid" },
    { type: "tiktok-embed" },
    { type: "youtube-embed" },
  ],
};
