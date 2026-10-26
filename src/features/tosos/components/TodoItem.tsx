
import type { Todo } from "../types/todo.types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export  function TodoItem({
  todo,
  onToggle,
  onDelete,
 }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="size-5 accent-green-600"
      />

      <span
        className={`min-w-0 flex-1 break-words ${
          todo.completed
            ? "text-slate-400 line-through"
            : "text-slate-700"
        }`}
      >
        {todo.title}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white"
      >
        Delete
      </button>
    </li>
  );
}
