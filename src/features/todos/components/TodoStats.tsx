type TodoStatsProps = {
  total: number;
  completed: number;
};

export function TodoStats({
  total,
  completed,
}: TodoStatsProps) {
  return (
    <p className="mt-4 text-slate-900">
      Total tasks: {total} | Completed tasks: {completed}
    </p>
  );
}