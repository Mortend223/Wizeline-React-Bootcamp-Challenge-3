import React, { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import storage from "../../utils/storage";

// Providers
import { useAuth } from "../Auth/Auth.provider";

const DataContext = createContext(null);
const UserStorageKey = "REACT-CHALLENGE-3-NOTES";

const initialState = {
  ArchivedNotes: [],
  EditingNotes: [],
  Notes: [],
  isDark: true,
  isDarkTheme: true,
  isOpen: false,
  search: "",
};

function getUserStorageKey(user) {
  return user ? `${UserStorageKey}-${user.id}` : "";
}

function DataReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case "archiveNote":
      return {
        ...state,
        ArchivedNotes: [...state.ArchivedNotes, payload.note],
        Notes: state.Notes.filter((e) => e.id !== payload.note.id),
      };
    case "updateSearch": {
      return { ...state, search: action.term };
    }
    case "toggleModal": {
      return { ...state, isOpen: !state.isOpen };
    }
    case "updateTheme": {
      return { ...state, isDark: !state.isDark };
    }
    case "addNote":
      return {
        ...state,
        Notes: [...state.Notes, payload.note],
      };
    case "editNote":
      return {
        ...state,
        Notes: state.Notes.filter((e) => e.id !== payload.note.id),
        EditingNotes: [...state.EditingNotes, payload.note],
      };
    case "removeNote":
      return {
        ...state,
        ArchivedNotes: state.ArchivedNotes.filter(
          (e) => e.id !== payload.note.id
        ),
        EditingNotes: state.EditingNotes.filter(
          (e) => e.id !== payload.note.id
        ),
        Notes: state.Notes.filter((e) => e.id !== payload.note.id),
      };
    case "setTheme":
      return {
        ...state,
        isDarkTheme: payload,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}

function DataProvider({ children }) {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, {
    ...initialState,
    ...(storage.get(getUserStorageKey(user))
      ? JSON.parse(storage.get(getUserStorageKey(user)))
      : {}),
  });

  const isArchivedNote = (note) => {
    return state.Notes.find((n) => n.id === note.id);
  };
  const isEditingNote = (note) => {
    return state.EditingNotes.find((n) => n.id === note.id);
  };

  const addArchivedNote = () => (note) => {
    dispatch({
      type: "archiveNote",
      payload: { note },
    });
  };
  const onChangeInput = () => (value) => {
    dispatch({ type: "updateSearch", term: value });
  };
  const toggleModal = () => () => {
    dispatch({ type: "toggleModal" });
  };
  const toggleTheme = () => () => {
    dispatch({ type: "updateTheme" });
  };
  const addNote = () => (note) => {
    dispatch({
      type: "addNote",
      payload: { note },
    });
  };
  const onEditNote = () => (note) => {
    dispatch({
      type: "editNote",
      payload: { note },
    });
  };
  const removeNote = () => (note) => {
    dispatch({
      type: "removeNote",
      payload: { note },
    });
  };
  const setTheme = () => (isDarkTheme) => {
    dispatch({
      type: "setTheme",
      payload: !isDarkTheme,
    });
  };

  const value = {
    ...state,
    isArchivedNote,
    isEditingNote,
    addArchivedNote: addArchivedNote(dispatch),
    addNote: addNote(dispatch),
    onChangeInput: onChangeInput(dispatch),
    onEditNote: onEditNote(dispatch),
    removeNote: removeNote(dispatch),
    setTheme: setTheme(dispatch),
    toggleModal: toggleModal(dispatch),
    toggleTheme: toggleTheme(dispatch),
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    storage.set(
      getUserStorageKey(user),
      JSON.stringify({
        ArchivedNotes: state.ArchivedNotes,
        EditingNotes: state.EditingNotes,
        Notes: state.Notes,
        isDarkTheme: state.isDarkTheme,
      })
    );
  }, [
    state.ArchivedNotes,
    state.EditingNotes,
    state.Notes,
    user,
    state.isDarkTheme,
  ]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useData };
export default DataProvider;
