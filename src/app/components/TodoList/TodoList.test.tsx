import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

const mockTodos = [
  {
    userId: 1,
    title: "Go to Work ",
    completed: false,
    id: 3,
  },
  {
    userId: 1,
    title: "Write Code ",
    completed: false,
    id: 4,
  },
];
const mockSetTodos = jest.fn();

describe("Render", () => {
  describe("Todolist", () => {
    it("should render 'No Todos Available' when array is empty ", () => {
      // ARRANGE
      render(<TodoList todos={[]} setTodos={mockSetTodos} />);

      //ACT
      const message = screen.getByText(/No Todos Available/i);

      //ASSERT
      expect(message).toBeInTheDocument();
    });
    it("should render a list of items when array is NOT empty ", () => {
      // ARRANGE
      render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />);

      //ACT
      const todosArray = screen.getAllByRole("article");

      //ASSERT
      expect(todosArray.length).toBe(2);
    });
    it("should render todolist in the correct order ", () => {
      // ARRANGE
      render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />);

      //ACT
      const firstItem = screen.getAllByTestId("todo-item")[0];

      //ASSERT
      expect(firstItem).toHaveTextContent("Write Code");
    });
  });
});
