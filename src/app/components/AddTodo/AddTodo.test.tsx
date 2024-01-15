import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddItemForm from "./AddTodo";

const mockSetTodos = jest.fn();

describe("AddTodo", () => {
  describe("Render", () => {
    it("should render the input", () => {
      //ARRANGE
      render(<AddItemForm setTodos={mockSetTodos} />);

      //ACT
      const input = screen.getByPlaceholderText("New Todo");

      //ASSERT
      expect(input).toBeInTheDocument();
    });
    it("should render disabled button", () => {
      //ARRANGE
      render(<AddItemForm setTodos={mockSetTodos} />);

      //ACT
      const button = screen.getByRole("button", { name: "Submit" });

      //ASSERT
      expect(button).toBeDisabled();
    });
  });
  describe("Behaviour", () => {
    it("should be able to add input text", async () => {
      //ARRANGE
      render(<AddItemForm setTodos={mockSetTodos} />);

      //ACT
      const input = screen.getByPlaceholderText("New Todo");
      await userEvent.type(input, "arsenal");

      //ASSERT
      expect(input).toHaveValue("arsenal");
    });
    it("should be able to enable button when text is input", async () => {
      //ARRANGE
      render(<AddItemForm setTodos={mockSetTodos} />);

      //ACT
      const input = screen.getByPlaceholderText("New Todo");
      await userEvent.type(input, "arsenal");
      const button = screen.getByRole("button", { name: "Submit" });

      //ASSERT
      expect(button).toBeEnabled();
    });
    it("should be able to empty the text input when button submitted", async () => {
      //ARRANGE
      render(<AddItemForm setTodos={mockSetTodos} />);

      //ACT
      const input = screen.getByPlaceholderText("New Todo");
      await userEvent.type(input, "arsenal");
      const button = screen.getByRole("button", { name: "Submit" });
      await userEvent.click(button);

      //ASSERT
      expect(input).toHaveValue("");
    });
    it("should be able to setTodos when submitted", async () => {
      //ARRANGE
      render(<AddItemForm setTodos={mockSetTodos} />);

      //ACT
      const input = screen.getByPlaceholderText("New Todo");
      await userEvent.type(input, "arsenal");
      const button = screen.getByRole("button", { name: "Submit" });
      await userEvent.click(button);

      //ASSERT
      expect(mockSetTodos).toHaveBeenCalled();
    });
  });
});
