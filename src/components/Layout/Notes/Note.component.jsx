import React, { useState } from "react";

// Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  BackcolorSection,
  Button,
  ButtonSection,
  InputNoteWrapper,
} from "./Note.styles";

// Providers
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";
import { node } from "prop-types";

function Note({ key, note = null }) {
  const { isDark, addNote, removeNote } = useData();
  const [titleNote, setTitleNote] = useState("");
  const [contentNote, setContentNote] = useState("");
  const [backColor, setBackColor] = useState("");

  const handleSaveNote = async () => {
    const id = Date.now();
    addNote({ id, backColor, contentNote, titleNote });
  };

  const handleTagColor = (c) => () => {
    setBackColor(c);
  };

  const handleDeleteNote = async () => {
    removeNote(note);
  };

  return (
    <InputNoteWrapper backColor={note ? note.backColor : backColor}>
      <div className="form-group">
        <label htmlFor="title">
          <input
            required
            id="title"
            onChange={(e) => setTitleNote(e.target.value)}
            placeholder="Title"
            type="text"
            value={note && note.titleNote}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="textNote">
          <textarea
            id="textNote"
            onChange={(e) => setContentNote(e.target.value)}
            placeholder="Take a note..."
            rows="4"
            value={note && note.contentNote}
          />
        </label>
      </div>
      <ButtonSection>
        <BackcolorSection>
          <FontAwesomeIcon
            icon={faCircle}
            onClick={handleTagColor("C1")}
            size="1x"
            style={{ color: "#eb9d90" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            onClick={handleTagColor("C2")}
            size="1x"
            style={{ color: " #439ee2 " }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            onClick={handleTagColor("C3")}
            size="1x"
            style={{ color: "#87dfed" }}
          />
        </BackcolorSection>
        {note ? (
          <Button type="button" onClick={handleDeleteNote}>
            <FontAwesomeIcon icon={faTrashAlt} size="2x" />
          </Button>
        ) : (
          <Button type="button" onClick={handleSaveNote}>
            <FontAwesomeIcon icon={faSave} size="2x" />
          </Button>
        )}
      </ButtonSection>
    </InputNoteWrapper>
  );
}

export default Note;
