

type TodoSearchProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function TodoSearch({
  search,
  onSearchChange,
}: TodoSearchProps) {
  return (
    <div className="relative mt-6">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search your tasks..."
        
        className="w-full rounded-lg border border-green-500 bg-white px-3 py-2 pr-10 text-slate-800 placeholder:text-slate-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-green-500 dark:focus:ring-green-900"


      />

      {search && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
          
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-red-600 dark:text-slate-500 dark:hover:text-red-400"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

