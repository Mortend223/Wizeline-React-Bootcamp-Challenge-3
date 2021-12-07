import React from "react";
import PropTypes from "prop-types";
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

// Components
import Note from "./Note.component";

// Styles
import { NoteListWrapper } from "./Note.styles";

const NoteList = ({ notes = null }) => {
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
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default NoteList;
