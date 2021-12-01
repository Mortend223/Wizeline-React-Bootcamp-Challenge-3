import React from "react";
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

// Components
import Note from "./Note.component";

// Styles
import { NoteListWrapper } from "./Note.styles";

export const NoteList = ({ notes = null }) => {
  const { search } = useData();
  return (
    <NoteListWrapper>
      {notes
        .filter(
          (note) =>
            note.titleNote.toLowerCase().includes(search.toLowerCase()) ||
            note.contentNote.toLowerCase().includes(search.toLowerCase())
        )
        .map((n) => (
          <Note key={n.id} note={n} />
        ))}
    </NoteListWrapper>
  );
};
