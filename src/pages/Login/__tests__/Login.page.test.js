import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Components
import Login from "../Login.page";

// Providers
import { useAuth } from "../../../providers/Auth/Auth.provider";
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

jest.mock("../../../providers/Auth/Auth.provider");
jest.mock("../../../providers/DataGlobal/DataGlobal.provider");

describe("LoginPage", () => {
  it("Should show LoginPage", () => {
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
        <Login note={note} />
      </BrowserRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
