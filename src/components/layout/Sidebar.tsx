
type SidebarProps = {
  activePage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  mobileOpen: boolean;
  onClose: () => void;
};

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "tasks", label: "My Tasks", icon: "☷" },
  { id: "today", label: "Today", icon: "◷" },
  { id: "upcoming", label: "Upcoming", icon: "▣" },
  { id: "completed", label: "Completed", icon: "✓" },
];

export function Sidebar({
  activePage,
  onNavigate,
  collapsed,
  mobileOpen,
  onClose,
}: SidebarProps) {
  return (
    <aside
      className={`absolute inset-y-0 left-0 z-40 flex h-full w-64 shrink-0 flex-col border-r border-green-600 bg-white p-4 transition-all duration-300 dark:border-slate-700 dark:bg-slate-900 md:relative md:inset-auto md:z-auto md:translate-x-0 ${collapsed ? "md:w-20" : "md:w-64"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* Workspace */}
      <div className="mb-6 flex items-center justify-between">
        <p
          className={`px-3 text-xs font-semibold uppercase tracking-wider text-slate-600 ${collapsed ? "md:hidden" : ""
            }`}
        >
          Workspace
        </p>

        {/* Mobile Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="min-h-0 flex-1 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => {
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
              title={collapsed ? item.label : undefined}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${isActive
                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
            >
              <span className="shrink-0 text-lg">
                {item.icon}
              </span>

              <span className={collapsed ? "md:hidden" : ""}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="shrink-0 border-t border-slate-200 pt-4 dark:border-slate-700">
        <button
          type="button"
          onClick={() => {
            onNavigate("settings");
            onClose();
          }}
          title={collapsed ? "Settings" : undefined}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium ${activePage === "settings"
            ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
        >
          <span className="shrink-0 text-lg">⚙</span>

          <span className={collapsed ? "md:hidden" : ""}>
            Settings
          </span>
        </button>
      </div>

    </aside>
  );
}
