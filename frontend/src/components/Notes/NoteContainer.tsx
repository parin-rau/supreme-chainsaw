import { useState } from "react";
import { Note } from "./note.types";

type Props = {
  notes: Note;
};

export default function NoteContainer(props: Props) {
  const [notes, setNotes] = useState(props.notes);

  const addNote;

  return (
    <div className="flex flex-col">
      <NoteEditor />
      <div className="flex flex-col-reverse">{}</div>
    </div>
  );
}
