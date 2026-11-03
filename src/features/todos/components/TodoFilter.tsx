type TodoFilterProps = {
  filter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
};

export function TodoFilter({
  filter,
  onFilterChange,
}: TodoFilterProps) {
  return (
    <div className="mt-6 flex gap-2">
      <button
        onClick={() => onFilterChange("all")}
        className={filter === "all" ? "bg-green-600 text-white px-3 py-1 rounded-md" : "text-green-900 bg-green-200 px-3 py-1 rounded-md"}
      >
        All
      </button>

      <button
        onClick={() => onFilterChange("active")}
        className={filter === "active" ? "bg-green-600 text-white px-3 py-1 rounded-md" : " text-green-900 bg-green-200 px-3 py-1 rounded-md"}
      >
        Active
      </button>

      <button
        onClick={() => onFilterChange("completed")}
        className={filter === "completed" ? "bg-green-600 text-white px-3 py-1 rounded-md" : "text-green-900 bg-green-200 px-3 py-1 rounded-md"}
      >
        Completed
      </button>
    </div>
  );
}