import { useState } from "react";
type HeaderProps = {
  theme: "light" | "dark";
  onThemeToggle: () => void;
  onSidebarToggle: () => void;
  onMobileMenuToggle: () => void;
  search: string;
  onSearchChange: (value: string) => void;
};

export function Header({
  theme,
  onThemeToggle,
  onSidebarToggle,
  onMobileMenuToggle,
  search,
  onSearchChange,
}: HeaderProps) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <header className="relative z-50 flex h-16 shrink-0 items-center justify-between border-b border-green-600 bg-white px-3 dark:border-slate-700 dark:bg-slate-900 sm:px-6">

      {/* Left Side */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMobileMenuToggle}
          aria-label="Open sidebar"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
        >
          ☰
        </button>

        {/* Desktop Sidebar Toggle */}
        <button
          type="button"
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
          className="hidden rounded-lg p-2 text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 md:block"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-green-600 text-lg font-bold text-white sm:size-10 sm:text-xl">
            T
          </div>

          <div>
            <h1 className="text-base font-bold text-green-600 dark:text-green sm:text-lg">
              Todo Pro
            </h1>
            <p className="hidden text-xs text-slate-700 dark:text-slate-400 sm:block">
              Task Management
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-4">

        {/* Search */}
        <div className="hidden items-center gap-2 rounded-lg border border-slate-400 px-3 py-1 md:flex dark:border-slate-700">
          <span className=" text-lg font-xl text-slate-800">⌕</span>

          <input
            type="text"
            value={search}
            onChange = {(e) => onSearchChange(e.target.value)}
            placeholder="Search tasks..."
            className="w-44 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-white"
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationOpen((prev) => !prev)}
            aria-label="Notifications"
            aria-expanded={notificationOpen}
            className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <span className="text-xl">♧</span>

            <span className="absolute right-1 top-1 size-2 rounded-full bg-red-500" />
          </button>

          {notificationOpen && (
            <div className="absolute right-0 top-12 z-50 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  Notifications
                </h3>

                <button
                  type="button"
                  onClick={() => setNotificationOpen(false)}
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 border-t border-slate-200 pt-3 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Welcome to Todo Pro!
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Your workspace is ready.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
          className="text-xl rounded-lg p-1 text-slate-600 hover:bg-slate-500 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {theme === "light" ? "🌙" : "🔆"}
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((prev) => !prev)}
            aria-label="User profile"
            aria-expanded={profileOpen}
            className="flex items-center gap-2 rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-500/20 dark:text-green-300">
              U
            </div>

            <span className="hidden text-sm font-medium text-slate-700 dark:text-white lg:block">
              User
            </span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">

              <div className="border-b border-slate-200 px-3 py-2 dark:border-slate-700">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  User
                </p>

                <p className="text-xs text-slate-500">
                  Personal Account
                </p>
              </div>

              <button
                type="button"
                onClick={() => setProfileOpen(false)}
                className="mt-2 w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                My Profile
              </button>

              <button
                type="button"
                onClick={() => {
                  setProfileOpen(false);
                }}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Account Settings
              </button>

              <button
                type="button"
                onClick={() => setProfileOpen(false)}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
