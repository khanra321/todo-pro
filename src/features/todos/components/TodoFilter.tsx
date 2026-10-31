

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
      <button onClick={() => onFilterChange("all")}>
        All
      </button>

      <button onClick={() => onFilterChange("active")}>
        Active
      </button>

      <button onClick={() => onFilterChange("completed")}>
        Completed
      </button>
    </div>
  );
}