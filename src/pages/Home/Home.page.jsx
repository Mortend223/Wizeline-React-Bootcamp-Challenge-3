import React from "react";

// Components
import HeaderComponent from "../../components/Layout/Header/Header.component";
import Login from "../../components/Layout/Login/Login.component";
import Note from "../../components/Layout/Notes/Note.component";
import { NoteList } from "../../components/Layout/Notes/NoteList.component";

// Providers
import { useAuth } from "../../providers/Auth/Auth.provider";

function HomePage() {
  const { authenticated, logout, user } = useAuth();
  return !authenticated ? (
    <>
      <h1>Welcome!</h1>
      <Login />
    </>
  ) : (
    <>
      <HeaderComponent />
      <Note />
      <NoteList />
    </>
  );
}

export default HomePage;
