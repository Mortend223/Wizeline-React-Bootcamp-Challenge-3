import React from "react";
import { render } from "@testing-library/react";

// Components
import Layout from "../Layout.component";

// Providers
import { useData } from "../../../providers/DataGlobal/DataGlobal.provider";

jest.mock("../../../providers/DataGlobal/DataGlobal.provider");

describe("Note Component", () => {
  it("Should show Note Component", () => {
    useData.mockReturnValue({
      isDark: false,
    });
    const childrenMock = <div>Mock</div>;
    const container = render(<Layout>{childrenMock}</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
