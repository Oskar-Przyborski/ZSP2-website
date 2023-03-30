import {
  MdOutlineArticle,
  MdOutlineWeb,
  MdOutlineNavigation,
} from "react-icons/md";

export default (S) =>
  S.list()
    .title("Treści")
    .items([
      S.documentTypeListItem("article")
        .title("Artykuły")
        .icon(MdOutlineArticle),
      S.documentTypeListItem("page")
        .title("Strony")
        .icon(MdOutlineWeb),
      S.listItem()
        .id("navigation")
        .title("Nawigacja")
        .icon(MdOutlineNavigation)
        .child(
          S.editor()
            .title("Nawigacja")
            .id("navigation")
            .schemaType("navigation")
            .documentId("singleton-navigation")
        ),
    ]);
