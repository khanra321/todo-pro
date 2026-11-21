
import { useEffect, useState } from "react";

import { useTodos } from "./features/todos/hooks/useTodos";
import { Dashboard } from "./pages/Dashboard";
import { DashboardLayout } from "./components/layout/DashboardLayout";

export default function App() {
  const {
    task,
    setTask,
    todos,
    addTodo,
    toggleChecked,
    removeTodo,
    lenTodo,
    completedCount,
    editTodo,
    filter,
    setFilter,
    filteredTodos,
    search,
    setSearch,
  } = useTodos();

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  function handleThemeToggle() {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <DashboardLayout
      theme={theme}
      onThemeToggle={handleThemeToggle}
      activePage={activePage}
      onNavigate={setActivePage}
    >
      <Dashboard
        task={task}
        setTask={setTask}
        todos={todos}
        filteredTodos={filteredTodos}
        addTodo={addTodo}
        toggleChecked={toggleChecked}
        removeTodo={removeTodo}
        editTodo={editTodo}
        lenTodo={lenTodo}
        completedCount={completedCount}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
    </DashboardLayout>
  );
}
