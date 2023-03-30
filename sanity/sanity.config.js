import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";
import deskStructure from "./desk-structure";
import schemaTypes from "./schemas/schema";

export default defineConfig({
  name: "ZS2-website",
  projectId: "vm3xce09",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
});
