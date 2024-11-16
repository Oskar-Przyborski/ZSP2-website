import { BiHorizontalCenter } from "react-icons/bi";
import { defineType } from "sanity";
import { InternalLink } from "./InternalLink";
import { Link } from "./Link";
import { YoutubeEmbed } from "./YoutubeEmbed";
import { PageButton } from "./PageButton";
import { FileButton } from "./FileButton";
import { Grid } from "./Grid";
import { TiktokEmbed } from "./TiktokEmbed";

export const Body = defineType({
  title: "Body",
  name: "body",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [Link, InternalLink],
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Wyśrodkuj",
            value: "centered",
            icon: BiHorizontalCenter,
            component: (props) => (
              <div style={{ textAlign: "center" }}>{props.children}</div>
            ),
          },
        ],
      },
    },
    { type: "image" },
    PageButton,
    FileButton,
    Grid,
    TiktokEmbed,
    YoutubeEmbed,
  ],
});
