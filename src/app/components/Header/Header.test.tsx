import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Heading", () => {
  it("should render 'Next Todo' heading", () => {
    render(<Header title="Next Todos" />);

    // const header = screen.getByRole("heading", { level: 1 });
    const header = screen.getByRole("heading", { name: "Next Todos" });
    expect(header).toBeInTheDocument();
  });
  it("should render 'Dave' heading", () => {
    render(<Header title="Dave" />);

    // const header = screen.getByRole("heading", { level: 1 });
    const header = screen.getByRole("heading", { name: "Dave" });
    expect(header).toBeInTheDocument();
  });
});
