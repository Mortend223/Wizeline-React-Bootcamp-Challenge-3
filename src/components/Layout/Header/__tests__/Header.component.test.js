import React from "react";
import { render, screen } from "@testing-library/react";

// Components
import HeaderComponent from "../Header.component";

// Providers
import { useAuth } from "../../../../providers/Auth/Auth.provider";
import { useData } from "../../../../providers/DataGlobal/DataGlobal.provider";

jest.mock("../../../../providers/Auth/Auth.provider");
jest.mock("../../../../providers/DataGlobal/DataGlobal.provider");

// Mocks
const onSearchMock = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    location: jest.fn(),
    push: jest.fn(),
  }),
  useLocation: () => ({
    location: jest.fn(),
  }),
}));

describe("Header Component", () => {
  it("Should show HeaderComponent", () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      ArchivedNotes: [],
      search: "SomeText",
      isDark: true,
    });
    const container = render(<HeaderComponent onChange={onSearchMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it("Should render the input", () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      ArchivedNotes: [],
      search: "SomeText",
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
  it("Should render the Session-Out icon", () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      ArchivedNotes: [],
      search: "SomeText",
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByTitle("session-out")).toBeInTheDocument();
  });
});
