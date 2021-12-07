import React from "react";

// Components
import HeaderComponent from "../../components/Layout/Header/Header.component";
import Login from "../../components/Layout/Login/Login.component";
import Note from "../../components/Layout/Notes/Note.component";
import NoteList from "../../components/Layout/Notes/NoteList.component";

// Providers
import { useAuth } from "../../providers/Auth/Auth.provider";
import { useData } from "../../providers/DataGlobal/DataGlobal.provider";

function HomePage() {
  const { authenticated } = useAuth();
  const { EditingNotes, Notes } = useData();
  return !authenticated ? (
    <>
      <h1>Welcome!</h1>
      <Login />
    </>
  ) : (
    <>
      <HeaderComponent />
      {EditingNotes.length === 0 && <Note key="new-note" />}
      {EditingNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <NoteList notes={Notes} />
    </>
  );
}

export default HomePage;
