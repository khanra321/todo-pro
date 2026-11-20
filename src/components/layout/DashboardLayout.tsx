import type { ReactNode } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

type DashboardLayoutProps = {
  children: ReactNode;
  theme: "light" | "dark";
  onThemeToggle: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
};

export function DashboardLayout({
  children,
  theme,
  onThemeToggle,
  activePage,
  onNavigate,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">

      {/* Header */}
      <Header
        theme={theme}
        onThemeToggle={onThemeToggle}
      />

      {/* Main Layout */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar
          activePage={activePage}
          onNavigate={onNavigate}
        />

        {/* Main Content */}
        <main className="min-w-0 flex-1 p-6">
          {children}
        </main>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}