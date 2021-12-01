import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Components
import HomePage from "../Home.page";

// Providers
import { useAuth } from "../../../providers/Auth/Auth.provider";
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

jest.mock("../../../providers/Auth/Auth.provider");
jest.mock("../../../providers/DataGlobal/DataGlobal.provider");

describe("HomePage", () => {
  it("Should show HomePage", () => {
    const note = {};
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      ArchivedNotes: [],
      EditingNotes: [],
      Notes: [],
      search: "Some Text",
      isDark: true,
    });
    const container = render(
      <BrowserRouter>
        <HomePage note={note} />
      </BrowserRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
