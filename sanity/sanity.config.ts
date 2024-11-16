import { visionTool } from "@sanity/vision";
import { MdOutlineArticle, MdOutlineNavigation, MdOutlineWeb } from "react-icons/md";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { singletonDocumentListItem, singletonTools } from "sanity-plugin-singleton-tools";
import { structureTool } from "sanity/structure";
import { Article } from "./schemas/Article";
import { Navigation } from "./schemas/Navigation";
import { Body } from "./schemas/Objects/Body";
import { Page } from "./schemas/Page";

export default defineConfig({
  name: "ZS2-website",
  projectId: "vm3xce09",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S, context) => S.list()
        .title("Treści")
        .items([
          S.documentTypeListItem("article")
            .title("Artykuły")
            .icon(MdOutlineArticle),
          S.documentTypeListItem("page")
            .title("Strony")
            .icon(MdOutlineWeb),
          singletonDocumentListItem({
            S,
            context,
            id: "singleton-navigation",
            type: "navigation",
            title: "Nawigacja",
            icon: MdOutlineNavigation,
          }),
        ]),
    }),
    visionTool(),
    media(),
    singletonTools(),
  ],
  schema: {
    types: [
      Navigation,
      Article,
      Page,
      Body,
    ],
  },
  scheduledPublishing: {
    enabled: false,
  },
  tasks: {
    enabled: false,
  },
  document: {
    comments: {
      enabled: false,
    },
  }
});
