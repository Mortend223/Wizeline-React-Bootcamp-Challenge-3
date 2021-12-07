import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

// Components
import Login from "../Login.component";

// Providers
import { useAuth } from "../../../../providers/Auth/Auth.provider";

jest.mock("../../../../providers/Auth/Auth.provider");

describe("Login Component", () => {
  it("Should show Login Component", () => {
    useAuth.mockReturnValue({
      authenticated: true,
      login: jest.fn(),
      user: {},
    });
    const container = render(<Login onClick={jest.fn()} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it("Should show Login Component with Loading button", () => {
    useAuth.mockReturnValue({
      authenticated: true,
      login: jest.fn(),
      loading: true,
    });
    const container = render(<Login />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it("Should show Login Component with Error", () => {
    useAuth.mockReturnValue({
      error: true,
      login: jest.fn(),
      loading: false,
    });
    const container = render(<Login />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it("Should show Email Change", () => {
    useAuth.mockReturnValue({
      authenticated: true,
      login: jest.fn(),
      user: {},
    });
    const query = "SomeText";
    render(<Login onClick={jest.fn()} />);

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput.value).toEqual("");
    fireEvent.change(emailInput, { target: { value: query } });
    expect(emailInput.value).toEqual(query);
  });
  it("Should show Pass Change", () => {
    useAuth.mockReturnValue({
      authenticated: true,
      login: jest.fn(),
      user: {},
    });
    const query = "SomeText";
    const container = render(<Login onClick={jest.fn()} />);

    expect(container.firstChild).toMatchSnapshot();
    const passInput = screen.getByLabelText(/Password/i);
    expect(passInput.value).toEqual("");
    fireEvent.change(passInput, { target: { value: query } });
    expect(passInput.value).toEqual(query);
  });
});
