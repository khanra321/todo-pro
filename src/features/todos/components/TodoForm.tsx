type TodoFormProps = {
  task: string;
  onTaskChange: (value: string) => void;
  onAdd: () => void;
};

export function TodoForm({
  task,
  onTaskChange,
  onAdd,
}: TodoFormProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => onTaskChange(e.target.value)}
        placeholder="Enter a task..."
        className="min-w-0 flex-1 rounded-lg border border-green-800 bg-white px-4 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-green-500 focus:ring-1 focus:ring-green-300 dark:border-green-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-green-400"
      />

      <button
        onClick={onAdd}
        className="rounded-lg bg-green-500 px-4 py-3 text-white font-bold hover:bg-green-600 active:bg-green-800"
      >
        Add
      </button>
    </div>
  );
}