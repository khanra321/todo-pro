export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-900">

      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Todo Pro. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex items-center gap-5">

          <a
            href="#about"
            className="text-sm text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            About
          </a>

          <a
            href="#help"
            className="text-sm text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            Help
          </a>

          <span className="text-xs text-slate-400">
            Version 1.0.0
          </span>

        </div>

      </div>

    </footer>
  );
}