import {useState} from 'react'

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
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
            <li
             key={todo.id}
             className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 ">
              <input type="checkbox" className="size-5 accent-green-600 hover:accent-green-500" />
              <span className="min-w-0 flex-1 break-words">{todo.title}</span>
              <button className=" shrink-0 rounded-md px-2 py-1 text-sm font-medium ml-auto text-red-500 hover:bg-red-500 hover:text-white">delate</button>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-slate-800">No task add yet. Create your first task.</p>
        <p className="mt-4 text-slate-900">Total tasks:   | Completed tasks: </p>
      </section>
    </main>
  )
}

// import { useState } from "react";

// type Todo = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

// function App() {
//   const [task, setTask] = useState<string>("");
//   const [todos, setTodos] = useState<Todo[]>([]);

//   function addTodo() {
//     if (task.trim() === "") return;

//     const newTodo: Todo = {
//       id: Date.now(),
//       title: task,
//       completed: false,
//     };

//     setTodos([...todos, newTodo]);
//     setTask("");
//   }

//   function toggleTodo(id: number) {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   }

//   function deleteTodo(id: number) {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <main className="min-h-screen bg-slate-100 px-4 py-12">
//       <section className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
//         <h1 className="mb-2 text-3xl font-bold text-slate-800">
//           Todo List Pro
//         </h1>

//         <p className="mb-6 text-slate-500">
//           Organize your day, one task at a time.
//         </p>

//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={task}
//             onChange={(event) => setTask(event.target.value)}
//             onKeyDown={(event) => {
//               if (event.key === "Enter") addTodo();
//             }}
//             placeholder="Enter a new task..."
//             className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//           />

//           <button
//             onClick={addTodo}
//             className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="mt-6 space-y-3">
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
//             >
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => toggleTodo(todo.id)}
//                 className="size-5 accent-blue-600"
//               />

//               <span
//                 className={`min-w-0 flex-1 break-words ${
//                   todo.completed
//                     ? "text-slate-400 line-through"
//                     : "text-slate-700"
//                 }`}
//               >
//                 {todo.title}
//               </span>

//               <button
//                 onClick={() => deleteTodo(todo.id)}
//                 className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-50"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>

//         {todos.length === 0 && (
//           <p className="mt-6 text-center text-slate-400">
//             No tasks yet. Add your first task!
//           </p>
//         )}

//         <p className="mt-6 text-sm text-slate-500">
//           Total tasks: {todos.length} | Completed:{" "}
//           {todos.filter((todo) => todo.completed).length}
//         </p>
//       </section>
//     </main>
//   );
// }

// export default App;
