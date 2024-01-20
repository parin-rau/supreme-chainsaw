import { useState } from "react";
import { Note } from "./note.types";

type Props = {
  notes: Note[];
};

export function useNote() {
  const { user } = useAuth0();

  const [notes, setNotes] = useState<Note[]>([]);
  const [editor, setEditor] = useState<Note>(new Note());

  const addNote = () => {};

  const deleteNote = () => {};

  return { addNote };
}
