
import type { Todo } from "../features/todos/types/todo.types";

import { TodoForm } from "../features/todos/components/TodoForm";
import { TodoList } from "../features/todos/components/TodoList";
import { TodoStats } from "../features/todos/components/TodoStats";
import { TodoFilter } from "../features/todos/components/TodoFilter";
import { TodoSearch } from "../features/todos/components/TodoSearch";

type DashboardProps = {
  task: string;
  setTask: (task: string) => void;
  todos: Todo[];
  filteredTodos: Todo[];
  addTodo: () => void;
  toggleChecked: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newTitle: string) => void;
  lenTodo: number;
  completedCount: number;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  search: string;
  setSearch: (search: string) => void;
};

export function Dashboard({
  task,
  setTask,
  todos,
  filteredTodos,
  addTodo,
  toggleChecked,
  removeTodo,
  editTodo,
  lenTodo,
  completedCount,
  filter,
  setFilter,
  search,
  setSearch,
}: DashboardProps) {
  const pendingCount = lenTodo - completedCount;

  const progress =
    lenTodo === 0
      ? 0
      : Math.round((completedCount / lenTodo) * 100);

  return (
    <div className="mx-auto min-h-full w-full max-w-7xl space-y-6">

      {/* Welcome Section */}
      <section>
        <h1 className="text-2xl font-bold text-green-800 dark:text-white sm:text-2xl">
          Welcome back! 👋
        </h1>

        <p className="mt-2 text-sm text-slate-800 dark:text-slate-400">
          Here's what's happening with your tasks today.
        </p>
      </section>

      {/* Overview Section */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-black-900 dark:text-white">
          Overview
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">

          {/* Total Tasks */}
          <div className=" flex flex-col  items-center justify-center rounded-xl border border-black-600 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 sm:p-5">
            <p className="text-xl text-slate-900 dark:text-slate-400 ">
              Total Tasks
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:mt-3 sm:text-3xl">
              {lenTodo}
            </p>
          </div>

          {/* Completed */}
          <div className="flex flex-col  items-center justify-center rounded-xl border border-green-600 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 sm:p-5">
            <p className="text-xl text-green-600 dark:text-slate-400 ">
              Completed
            </p>

            <p className="mt-2 text-2xl font-bold text-green-600 sm:mt-3 sm:text-3xl">
              {completedCount}
            </p>
          </div>

          {/* Pending */}
          <div className="flex flex-col  items-center justify-center rounded-xl border border-orange-600 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 sm:p-5">
            <p className="text-xl text-orange-500 dark:text-slate-400 ">
              Pending
            </p>

            <p className="mt-2 text-2xl font-bold text-orange-500 sm:mt-3 sm:text-3xl">
              {pendingCount}
            </p>
          </div>

          {/* Progress */}
          <div className="flex flex-col  items-center justify-center rounded-xl border border-blue-600 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 sm:p-5">
            <p className="text-xl text-indigo-600 dark:text-slate-400 ">
              Progress
            </p>

            <p className="mt-2 text-2xl font-bold text-indigo-600 sm:mt-3 sm:text-3xl">
              {progress}%
            </p>
          </div>

        </div>
      </section>

      {/* Task Management Section */}
      <section className="rounded-xl border border-green-600 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 sm:p-5">

        {/* Task Heading */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            My Tasks
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage and organize your daily tasks.
          </p>
        </div>

        {/* Add Todo */}
        <div>
          <TodoForm
            task={task}
            onTaskChange={setTask}
            onAdd={addTodo}
          />
        </div>

        {/* Search and Filter */}
        <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">

          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
          />

          <TodoSearch
            search={search}
            onSearchChange={setSearch}
          />

        </div>

        {/* Todo List */}
        <div className="mt-4 pr-1 sm:mt-6">

          <TodoList
            todos={filteredTodos}
            onToggle={toggleChecked}
            onDelete={removeTodo}
            onEdit={editTodo}
          />

          {/* Empty State */}
          {filteredTodos.length === 0 && (
            <p className="mt-6 text-center text-sm text-slate-400">
              {todos.length === 0
                ? "No task added yet. Create your first task."
                : search.trim() !== ""
                  ? "No matching tasks found."
                  : filter === "active"
                    ? "Active tasks not found."
                    : "Completed tasks not found."
              }
            </p>
          )}

        </div>

        {/* Todo Stats */}
        <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
          <TodoStats
            total={lenTodo}
            completed={completedCount}
          />
        </div>

      </section>

    </div>
  );
}
