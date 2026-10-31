
import { useEffect, useState } from "react";
import type { Todo } from "../types/todo.types";

const STORAGE_KEY = "todo-list";

export function useTodos() {
  const [task, setTask] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);

      return savedTodos ? JSON.parse(savedTodos) as Todo[] : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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

  function editTodo (id: number, newTitle: string){
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id
          ? {...todo, title: newTitle}
          :todo
      )
    );
  }

  return {
    task,
    setTask,
    todos,
    addTodo,
    toggleChecked,
    removeTodo,
    lenTodo,
    completedCount,
    editTodo,
  };
}
