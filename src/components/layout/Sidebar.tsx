
type SidebarProps = {
  activePage: string;
  onNavigate: (page: string) => void;
};

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "▦",
  },
  {
    id: "tasks",
    label: "My Tasks",
    icon: "☷",
  },
  {
    id: "today",
    label: "Today",
    icon: "◷",
  },
  {
    id: "upcoming",
    label: "Upcoming",
    icon: "▣",
  },
  {
    id: "completed",
    label: "Completed",
    icon: "✓",
  },
];

export function Sidebar({
  activePage,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">

      {/* Workspace */}
      <div className="mb-6">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigationItems.map((item) => {
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <span className="text-lg">
                {item.icon}
              </span>

              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
        <button
          type="button"
          onClick={() => onNavigate("settings")}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium ${
            activePage === "settings"
              ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
              : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          <span className="text-lg">⚙</span>
          Settings
        </button>
      </div>

    </aside>
  );
}
