
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
    <li className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="size-5 accent-green-600"
      />
      {isEditing ?(
          <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="min-w-0 flex-1 rounded-md border border-slate-300 px-2 py-1 outline-none focus:border-green-500 "
          autoFocus 
          /> 
      ):(
        <span
          className={`min-w-0 flex-1 break-words ${
            todo.completed
              ? "text-slate-400 line-through"
              : "text-slate-700"
          }`}
        >
          {todo.title}
        </span>
      )}

      {isEditing ?(
        <>
          <button
            onClick={handleSave}
            className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-green-500 hover:bg-green-500 hover:text-white"
          >
            save
          </button>
          <button
            onClick={handleCancel}
            className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-white"
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
        className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white"
      >
        Delete
      </button>
    </li>
  );
}
