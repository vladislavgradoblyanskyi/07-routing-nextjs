"use client";
import NoteList from "@/components/NoteList/NoteList";
import { Note } from "@/types/note";
import css from "./Filter.module.css";

type Props = {
  notes: Note[];
};

export default function NotesClient({notes}: Props) {
  return (
    <div className={css.div}>
      <NoteList notes={notes} />
    </div>
  );
}