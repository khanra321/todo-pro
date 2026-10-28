
import { useState } from "react";
import type { Todo } from "../types/todo.types";

export function useTodos() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    if (task.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      title: task.trim(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  }

  function toggleChecked(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function removeTodo(id: number) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }

  const lenTodo = todos.length;
  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return {
    task,
    setTask,
    todos,
    addTodo,
    toggleChecked,
    removeTodo,
    lenTodo,
    completedCount,
  };
}
