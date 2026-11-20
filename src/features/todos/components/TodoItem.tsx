
import { useState } from "react";
import type { Todo } from "../types/todo.types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit:(id: number, newTitle: string) => void;
};

export  function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
 }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  function handleSave(){
    if(editTitle.trim() === "") return;

    onEdit(todo.id, editTitle.trim());
    setIsEditing(false);

  }
  function handleCancel(){
    setEditTitle(todo.title);
    setIsEditing(false);

  } 


  return (
    <li className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors dark:border-slate-700 dark:bg-slate-800">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="size-5 shrink-0 accent-green-600"
      />
      {isEditing ?(
          <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-slate-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-green-900"
          autoFocus 
          /> 
      ):(
        <span
          className={`min-w-0 flex-1 break-words ${
            todo.completed
              ? "text-slate-400 line-through dark:text-slate-500"
              : "text-slate-700 dark:text-slate-200"
          }`}
        >
          {todo.title}
        </span>
      )}

      {isEditing ?(
        <>
          <button
            onClick={handleSave}
            className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-green-600 transition-colors hover:bg-green-500 hover:text-white dark:text-green-400"
          >
            save
          </button>
          <button
            onClick={handleCancel}
            className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-orange-600 transition-colors hover:bg-orange-500 hover:text-white dark:text-orange-400"
          >
            cancel
          </button>
        </>
      ):(
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-green-500 hover:bg-green-500 hover:text-white"
          >
            Edit
          </button>
        </>
        
      )}

      <button
        onClick={() => onDelete(todo.id)}
        className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-red-600 transition-colors hover:bg-red-500 hover:text-white dark:text-red-400"
      >
        Delete
      </button>
    </li>
  );
}
