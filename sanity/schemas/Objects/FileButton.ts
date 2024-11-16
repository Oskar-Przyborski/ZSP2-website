import { MdFileDownload } from "react-icons/md";
import { defineArrayMember } from "sanity";

export const FileButton = defineArrayMember({
  type: "object",
  name: "file-button",
  title: "Odnośnik pliku",
  icon: MdFileDownload,
  fields: [
    {
      title: "Tytuł",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Opis",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Plik",
      name: "file",
      type: "file"
    },
    {
      name: "targetBlank",
      type: "boolean",
      title: "Nowa karta",
      description: "Otwórz w nowej karcie",
      initialValue: () => true,
    },
  ],
});
