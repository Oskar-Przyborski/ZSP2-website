import S from "@sanity/desk-tool/structure-builder";
import { MdNavigation } from "react-icons/md";
export default () =>
	S.list()
		.title("Treści")
		.items([
			S.listItem()
				.title("Nawigacja")
				.icon(MdNavigation)
				.child(
					S.editor()
						.title("Nawigacja")
						.id("navigation")
						.schemaType("navigation")
						.documentId("singleton-navigation")
				),
		]);
