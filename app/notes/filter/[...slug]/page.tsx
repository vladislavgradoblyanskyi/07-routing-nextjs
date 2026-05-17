import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function FilterPage({params}: Props) {
  const { slug } = await params;

  const tag = slug?.[0];
  const allTag =tag === "all" ? undefined : tag;
  const data = await fetchNotes(1, allTag);
  return (
    <NotesClient notes={data.notes} />
  );
}