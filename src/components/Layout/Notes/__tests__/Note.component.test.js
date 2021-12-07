import React from "react";
import { render } from "@testing-library/react";

// Components
import Note from "../Note.component";

// Providers
import { useData } from "../../../../providers/DataGlobal/DataGlobal.provider";

jest.mock("../../../../providers/DataGlobal/DataGlobal.provider");

describe("Note Component", () => {
  it("Should show Note Component", () => {
    useData.mockReturnValue({
      addNote: jest.fn(),
      addArchivedNote: jest.fn(),
      onEditNote: jest.fn(),
      removeNote: jest.fn(),
    });
    const container = render(<Note />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it("Should show Note when is not null ", () => {
    useData.mockReturnValue({
      addNote: jest.fn(),
      addArchivedNote: jest.fn(),
      isArchivedNote: jest.fn(),
      isEditingNote: jest.fn(),
      onEditNote: jest.fn(),
      removeNote: jest.fn(),
    });
    const props = {
      note: {
        backColor: "C1",
        contentNote: "lkjas lkjal kjsldkja",
        id: 1638820311429,
        titleNote: "Nota 6 ",
      },
    };
    const container = render(<Note note={props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
