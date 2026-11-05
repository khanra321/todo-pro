

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
        className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-10 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      {search && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

// type TodoSearchPropes = {
//     search: string;
//     onSearchChange: (value: string) => void;
// }

// export function TodoSearch({
//     search,
//     onSearchChange,
// }: TodoSearchPropes) {
//   return (
//     <div >
//         <input
//          type="text"
//          value={search}
//          placeholder="Search your task ..."
//          onChange={(e) => onSearchChange(e.target.value)}
//          className="mt-6 border border-green-500 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />


//     </div>
//   )
// }
