import type { Todo } from "../types/todo.types";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit:(id: number, newTitle: string) => void;
};

export function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  return (
    <ul className="mt-6 space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
