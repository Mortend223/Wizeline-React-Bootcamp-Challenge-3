import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

// Styles
import {
  faSearch as searchIcon,
  faUserSecret,
  faStar,
  faHome,
  faSun,
  faMoon,
  faRocket,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ButtonToggle,
  HeaderWrapper,
  Input,
  LogoLink,
  MenuToggle,
  SearchBox,
} from "./Header.styles";

// Providers
import { useAuth } from "../../../providers/Auth/Auth.provider";
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

function HeaderComponent() {
  const { push } = useHistory();
  const location = useLocation();
  const { authenticated, logout, user } = useAuth();
  const { ArchivedNotes, isDark, onChangeInput, toggleModal, toggleTheme } =
    useData();
  const [searchTerm, setSearch] = useState("");

  const handleSearchChanged = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onChangeInput(searchTerm);

      if (location.pathname !== "/") {
        push("/");
      }
    }
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    toggleTheme(true);
    logout();
    push("/");
  };

  return (
    <HeaderWrapper isDark={isDark}>
      <LogoLink href="#" onClick={authenticated ? deAuthenticate : toggleModal}>
        <FontAwesomeIcon icon={faSignOutAlt} size="2x" title="session-out" />
      </LogoLink>
      {location.pathname === "/archived" ? (
        <Link to="/">Notes</Link>
      ) : (
        ArchivedNotes.length > 0 && <Link to="/archived">Archived</Link>
      )}
      <ButtonToggle onClick={toggleTheme} name="darkMode">
        <FontAwesomeIcon
          icon={isDark ? faMoon : faSun}
          size="6x"
          style={{ color: "white" }}
          title="toggle-button"
        />
      </ButtonToggle>
      <SearchBox>
        <Input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearchChanged}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
        />
        <FontAwesomeIcon
          icon={searchIcon}
          size="1x"
          style={{ color: "gray" }}
          title="search-input"
        />
      </SearchBox>
    </HeaderWrapper>
  );
}

export default HeaderComponent;
