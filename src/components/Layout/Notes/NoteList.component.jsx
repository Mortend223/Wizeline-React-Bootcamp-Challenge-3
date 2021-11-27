import React, { useState } from "react";

// Components
import Note from "./Note.component";

// Providers
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

export const NoteList = () => {
  const { Notes } = useData();
  console.log(Notes);
  return Notes.map((n) => <Note key={n.id} note={n} />);
};
