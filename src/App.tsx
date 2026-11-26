
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
      search={search}
      onSearchChange={setSearch}
    >
      {activePage === "dashboard" && (
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
      )}

      {activePage === "tasks" && (
        <h2 className="text-2xl font-bold">My Tasks</h2>
      )}

      {activePage === "today" && (
        <h2 className="text-2xl font-bold">Today</h2>
      )}

      {activePage === "upcoming" && (
        <h2 className="text-2xl font-bold">Upcoming</h2>
      )}

      {activePage === "completed" && (
        <h2 className="text-2xl font-bold">Completed</h2>
      )}

      {activePage === "settings" && (
        <h2 className="text-2xl font-bold">Settings</h2>
      )}
    </DashboardLayout>
  );
}
