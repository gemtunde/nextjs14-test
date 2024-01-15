import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "./TodoItem";

const mockTodo = {
  userId: 1,
  title: "Go to Work ",
  completed: false,
  id: 3,
};

const mockSetTodos = jest.fn();

describe("TodoItem", () => {
  describe("Render", () => {
    it("it shld render an article", () => {
      //ARRANGE
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      //ACT
      const article = screen.getByRole("article");
      expect(article).toBeInTheDocument();
    });
    it("it shld render a label", () => {
      //ARRANGE
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      //ACT
      const label = screen.getByTestId("todo-item");
      expect(label).toBeInTheDocument();
    });
    it("it shld render a checkbox", () => {
      //ARRANGE
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      //ACT
      const checkbox = screen.getByRole("checkbox");

      // ASSERT
      expect(checkbox).toBeInTheDocument();
    });
    it("it shld render a button", () => {
      //ARRANGE
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      //ACT
      const button = screen.getByRole("button");

      // ASSERT
      expect(button).toBeInTheDocument();
    });
  });
  describe("Behaviour", () => {
    it("should call setTodos when checkbox is clicked", async () => {
      // ARRANGE
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      //ACT
      const checkbox = screen.getByRole("checkbox");
      await userEvent.click(checkbox);

      //ASSERT
      expect(mockSetTodos).toHaveBeenCalled();
    });
    it("should call setTodos when button is clicked", async () => {
      // ARRANGE
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      //ACT
      const button = screen.getByRole("button");
      await userEvent.click(button);

      //ASSERT
      expect(mockSetTodos).toHaveBeenCalled();
    });
  });
});
