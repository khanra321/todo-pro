

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
        className="w-full rounded-lg border border-green-500 px-3 py-1 pr-10 outline-none  focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />

      {search && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-700"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

