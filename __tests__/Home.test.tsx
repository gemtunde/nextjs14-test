import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/app/page";

describe("Home", () => {
  it("should add a new todo", async () => {
    render(<Home />); //ARRANGE

    //STEP 1
    //ACT
    const input = screen.getByPlaceholderText("New Todo");
    await userEvent.type(input, "Arsenal");
    //ASSERT
    expect(input).toHaveValue("Arsenal");

    //STEP 2
    const button = screen.getByRole("button", { name: "Submit" });
    await userEvent.click(button);
    expect(input).toHaveValue("");

    const data = await screen.findByText("Arsenal");
    expect(data).toHaveTextContent("Arsenal");
  });
  it("should update todo", async () => {
    render(<Home />); //ARRANGE

    const checkbox = screen.getAllByRole("checkbox")[0] as HTMLInputElement;
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it("should delete a todo", async () => {
    render(<Home />); //ARRANGE

    const todoText = screen.queryByText("Write Code 💻");
    expect(todoText).toBeInTheDocument();

    const button = screen.getAllByTestId("delete-button")[0];
    await userEvent.click(button);
    expect(todoText).not.toBeInTheDocument();
  });
});
