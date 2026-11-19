
type HeaderProps = {
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

export function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-700 dark:bg-slate-900">

      {/* Left Side - Logo */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
          T
        </div>

        <div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white">
            Todo Pro
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Task Management
          </p>
        </div>
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 md:flex dark:border-slate-700">
          <span className="text-slate-400">⌕</span>

          <input
            type="text"
            placeholder="Search tasks..."
            className="w-44 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-white"
          />
        </div>

        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <span className="text-xl">♧</span>

          <span className="absolute right-1 top-1 size-2 rounded-full bg-red-500" />
        </button>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <div className="flex size-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
            U
          </div>

          <span className="hidden text-sm font-medium text-slate-700 sm:block dark:text-white">
            User
          </span>
        </button>

      </div>
    </header>
  );
}
