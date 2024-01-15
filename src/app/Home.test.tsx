import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("should render heading", () => {
    render(<Home />);

    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
    const heading2Element = screen.getByRole("heading", { level: 2 });
    expect(heading2Element).toBeInTheDocument();
  });
});
