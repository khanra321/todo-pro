
import {useState} from 'react';
import type {Todo} from './features/tosos/types/todo.types.ts';
import { TodoItem } from "./features/tosos/components/TodoItem";


export default function App() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const lenTodo = todos.length;
  
  function addTodo(){
    if (task.trim() === "") 
      return;
    const newTodo: Todo = {
      id: Date.now(),
      title: task.trim(),
      completed: false, 
    };
    setTodos([...todos, newTodo]);
    setTask("")
  }
  function toggleChecked(id: number){
    
    setTodos(
      todos.map((todo) =>
       todo.id === id 
        ? {...todo, completed: !todo.completed}
        : todo
      )
    );
    
  }
  function removeTodo( id: number){
    setTodos(
      todos.filter((todo) => todo.id !== id))
    
  }
  
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16" >
      <section className="mx-auto max-w-xl bg-white rounded-3xl shadow-lg p-6 sm:p-8 ">
        <h1 className="mb-2 text-3xl text-green-800  font-bold  ">Todo-List</h1>
        <p className="mb-6 text-slate-800">Organize your day, One at a time.</p>
        <div className="flex gap-2 " >
          <input 
           type="text"
           value={task}
           onChange={(event)=> setTask(event.target.value)}
           placeholder="Enter a new task .."
           className="min-w-0 flex-1 rounded-lg border  border-green-800 px-4 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300  "
          />
          <button
           onClick={addTodo}
           className="rounded-lg bg-green-500 px-4 py-3 text-white font-bold hover:bg-green-600 active:bg-green-800  "
           
          >
            Add
          </button>
        </div>
        <ul className="mt-6 space-y-3 ">
          {todos.map((todo) =>(
            <TodoItem
              key = {todo.id}
              todo = {todo}
              onToggle = {toggleChecked}
              onDelete={removeTodo}
              />
          ))}
        </ul>
        {todos.length === 0 && (
          <p className="mt-6 text-center text-slate-800">No task add yet. Create your first task.</p>
        )}
        <p className="mt-4 text-slate-900">Total tasks: {lenTodo}   | Completed tasks:{todos.filter((todo) => todo.completed).length} </p>
      </section>
    </main>
  )
}
