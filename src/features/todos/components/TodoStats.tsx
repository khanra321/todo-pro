type TodoStatsProps = {
  total: number;
  completed: number;
};

export function TodoStats({
  total,
  completed,
}: TodoStatsProps) {
  
return (
  <div className="mt-5 flex flex-wrap items-center gap-4">

    <p className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      Total tasks:
      <span className="rounded-md border border-green-300 bg-green-50 px-3 py-1 font-semibold text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400">
        {total}
      </span>
    </p>

    <p className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      Completed tasks:
      <span className="rounded-md border border-blue-300 bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400">
        {completed}
      </span>
    </p>

  </div>
);

}