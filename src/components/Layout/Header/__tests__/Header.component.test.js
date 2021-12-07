import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

// Components
import HeaderComponent from "../Header.component";

// Providers
import { useAuth } from "../../../../providers/Auth/Auth.provider";
import { useData } from "../../../../providers/DataGlobal/DataGlobal.provider";

jest.mock("../../../../providers/Auth/Auth.provider");
jest.mock("../../../../providers/DataGlobal/DataGlobal.provider");

// Mocks
const onSearchMock = jest.fn();
const mockChange = jest.fn();
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
    const container = render(
      <HeaderComponent onChange={onSearchMock} onKeyDown={jest.fn()} />
    );

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
      authenticated: false,
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
  it("Should render the actions for Input", () => {
    useAuth.mockReturnValue({
      logout: jest.fn(),
    });
    useData.mockReturnValue({
      ArchivedNotes: [],
      onChangeInput: jest.fn(),
      search: "SomeText",
      isDark: false,
    });
    const query = "SomeText";
    const { getByPlaceholderText } = render(<HeaderComponent />);
    const searchInput = getByPlaceholderText(/Search.../i);
    expect(searchInput.value).toEqual("");
    searchInput.onChange = mockChange;
    searchInput.onKeyDown = mockChange;
    fireEvent.change(searchInput, { target: { value: query } });
    fireEvent.keyDown(searchInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    expect(searchInput.value).toEqual(query);
  });
});
