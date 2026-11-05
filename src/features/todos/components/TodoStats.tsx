type TodoStatsProps = {
  total: number;
  completed: number;
};

export function TodoStats({
  total,
  completed,
}: TodoStatsProps) {
  return (
    <div className="text-med mt-5 flex flex-row ">
      <p className="mr-4 text-slate-900">
        Total tasks: <span className="border-2 border-green-400 px-3">{total}</span>
      </p> 
      <p className=" text-slate-900">
        Completed tasks: <span className="border-2 border-green-400 px-3">{completed}</span>  
      </p> 
     </div>  
    
  );
}