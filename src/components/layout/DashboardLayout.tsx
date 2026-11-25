
import { useState } from "react";
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
  search :string;
  onSearchChange: (value: string) => void;
};

export function DashboardLayout({
  children,
  theme,
  onThemeToggle,
  activePage,
  onNavigate,
  search,
  onSearchChange,
}: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-slate-200 dark:bg-slate-950">

      {/* Header */}
      <Header
        theme={theme}
        onThemeToggle={onThemeToggle}
        onSidebarToggle={() =>
          setSidebarCollapsed((prev) => !prev)
        }
        onMobileMenuToggle={() =>
          setMobileSidebarOpen((prev) => !prev)
        }
        search = {search}
        onSearchChange={onSearchChange}
      />

      {/* Main Layout */}
      <div className="relative flex min-h-0 flex-1 overflow-hidden">

        {/* Mobile Backdrop */}
        {mobileSidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setMobileSidebarOpen(false)}
            className="absolute inset-0 z-30 bg-black/40 md:hidden"
          />
        )}

        {/* Sidebar */}
        <Sidebar
          activePage={activePage}
          onNavigate={(page) => {
            onNavigate(page);
            setMobileSidebarOpen(false);
          }}
          collapsed={sidebarCollapsed}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto ">
          <div className="p-3 sm:p-6">
            {children}
          </div>
          

          {/* Footer */}
          <div className="mt-3 p-0">
            <Footer />
          </div>
          
        </main>

      </div>
      
    </div>
  );
}
