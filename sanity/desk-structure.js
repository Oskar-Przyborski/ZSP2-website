import S from "@sanity/desk-tool/structure-builder";
import { MdOutlineArticle, MdOutlineNavigation } from "react-icons/md";
export default () =>
  S.list()
    .title("Treści")
    .items([
      S.listItem()
        .title("Nawigacja")
        .icon(MdOutlineNavigation)
        .child(
          S.editor()
            .title("Nawigacja")
            .id("navigation")
            .schemaType("navigation")
            .documentId("singleton-navigation")
        ),
      S.documentTypeListItem("article")
        .title("Artykuły")
        .icon(MdOutlineArticle),
    ]);
