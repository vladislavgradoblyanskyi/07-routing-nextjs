import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import css from './Filter.module.css'
type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function FilterPage({params}: Props) {
  const { slug } = await params;

  const tag = slug?.[0];
  const allTag = tag === "all" ? undefined : tag;

  const data = await fetchNotes(1,allTag);
  const notes = data.notes;

  return (
    <div className={css.div}>
        <NoteList notes={notes} />
    </div>
  );
}