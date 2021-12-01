import React from "react";

// Components
import HeaderComponent from "../../components/Layout/Header/Header.component";
import { NoteList } from "../../components/Layout/Notes/NoteList.component";

// Providers
import { useData } from "../../providers/DataGlobal/DataGlobal.provider";

function ArchivedPage() {
  const { ArchivedNotes } = useData();
  return (
    <>
      <HeaderComponent />
      <NoteList notes={ArchivedNotes} />
    </>
  );
}

export default ArchivedPage;
