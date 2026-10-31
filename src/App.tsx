import { useTodos } from "./features/todos/hooks/useTodos";
import { TodoList } from "./features/todos/components/TodoList";
import { TodoForm } from "./features/todos/components/TodoForm";
import { TodoStats } from "./features/todos/components/TodoStats";
import { TodoFilter } from "./features/todos/components/TodoFilter";
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
  } = useTodos();
  
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16" >
      <section className="mx-auto max-w-xl bg-white rounded-3xl shadow-lg p-6 sm:p-8 ">
        <h1 className="text-3xl font-bold text-green-600 ">Todos-List</h1>
        <p className=" mt-6 mb-6 text-slate-800">Organize your day, One at a time.</p>
        <TodoForm
          task={task}
          onTaskChange={setTask}
          onAdd={addTodo}
        />
        <TodoFilter
          filter={filter}
          onFilterChange={setFilter}
        />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleChecked}
          onDelete={removeTodo}
          onEdit={editTodo}
        />
        {todos.length === 0 && (
          <p className="mt-6 text-center text-slate-800">No task add yet. Create your first task.</p>
        )}
        <TodoStats
          total={lenTodo}
          completed={completedCount}
        />
      </section>
    </main>
  )
}
