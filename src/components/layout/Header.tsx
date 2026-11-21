
type HeaderProps = {
  theme: "light" | "dark";
  onThemeToggle: () => void;
  onSidebarToggle: () => void;
  onMobileMenuToggle: () => void;
};

export function Header({
  theme,
  onThemeToggle,
  onSidebarToggle,
  onMobileMenuToggle,
}: HeaderProps) {
  return (
    <header className="relative z-50 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900 sm:px-6">

      {/* Left Side */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMobileMenuToggle}
          aria-label="Open sidebar"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
        >
          ☰
        </button>

        {/* Desktop Sidebar Toggle */}
        <button
          type="button"
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
          className="hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:block"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white sm:size-10 sm:text-xl">
            T
          </div>

          <div>
            <h1 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
              Todo Pro
            </h1>
            <p className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
              Task Management
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-4">

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

          <span className="hidden text-sm font-medium text-slate-700 dark:text-white lg:block">
            User
          </span>
        </button>

      </div>
    </header>
  );
}
