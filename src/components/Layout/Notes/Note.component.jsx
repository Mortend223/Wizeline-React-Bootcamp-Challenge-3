import React, { useEffect, useState } from "react";

// Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faCircle,
  faEdit,
  faEraser,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  BackcolorSection,
  Button,
  ButtonSection,
  ConfigSection,
  InputNoteWrapper,
} from "./Note.styles";

// Providers
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

function Note({ note = null }) {
  const {
    addNote,
    addArchivedNote,
    isArchivedNote,
    isEditingNote,
    isDark,
    onEditNote,
    removeNote,
  } = useData();
  const [titleNote, setTitleNote] = useState(note?.titleNote ?? "");
  const [contentNote, setContentNote] = useState(note?.contentNote ?? "");
  const [backColor, setBackColor] = useState(note?.backColor ?? "");
  const [isInputOpen, setInputOpen] = useState(false);

  // useEffect(() => {
  //   if (note) {
  //     setTitleNote(note.titleNote);
  //     setContentNote(note.contentNote);
  //     setBackColor(note.backColor);
  //   }
  // }, [note]);

  const handleTagColor = (c) => () => {
    console.log(c);
    setBackColor(c);
  };

  const handleSaveNote = async () => {
    setInputOpen(false);
    if (isEditingNote(note)) {
      removeNote(note);
    }
    const id = Date.now();
    addNote({ id, backColor, contentNote, titleNote });
    setTitleNote("");
    setContentNote("");
    setBackColor("");
  };

  const handleArchiveNote = async () => {
    addArchivedNote(note);
  };

  const handleDeleteNote = async () => {
    removeNote(note);
    setTitleNote("");
    setContentNote("");
    setBackColor("");
  };

  const handleEditNote = async () => {
    setInputOpen(true);
    onEditNote(note);
  };

  return (
    <InputNoteWrapper
      isInputOpen={isInputOpen}
      isList={note !== null && !isEditingNote(note)}
      backColor={backColor}
    >
      <div className="form-group">
        {note === null || isEditingNote(note) ? (
          <input
            required
            id="title"
            onChange={(e) => setTitleNote(e.target.value)}
            onFocus={async () => setInputOpen(true)}
            placeholder="Title"
            type="text"
            value={titleNote}
          />
        ) : (
          <strong>{titleNote}</strong>
        )}
      </div>
      <div className="form-group">
        {note === null || isEditingNote(note) ? (
          <textarea
            id="textNote"
            onChange={(e) => setContentNote(e.target.value)}
            onFocus={async () => setInputOpen(true)}
            placeholder="Take a note..."
            rows="4"
            value={contentNote}
          />
        ) : (
          <p>{contentNote}</p>
        )}
      </div>
      <ButtonSection>
        {!note || isEditingNote(note) ? (
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
        ) : null}
        {note ? (
          <ConfigSection>
            {isArchivedNote(note) && (
              <Button type="button" onClick={handleArchiveNote}>
                <FontAwesomeIcon icon={faArchive} size="2x" />
              </Button>
            )}
            {isArchivedNote(note) && (
              <Button type="button" onClick={handleEditNote}>
                <FontAwesomeIcon icon={faEdit} size="2x" />
              </Button>
            )}
            <Button type="button" onClick={handleDeleteNote}>
              <FontAwesomeIcon icon={faTrashAlt} size="2x" />
            </Button>
            {isEditingNote(note) && (
              <Button type="button" onClick={handleSaveNote}>
                <FontAwesomeIcon icon={faSave} size="2x" />
              </Button>
            )}
          </ConfigSection>
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
