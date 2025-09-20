import { useState } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { IDashboardLayoutProps } from "../types/component-interfaces";

export function DashboardLayout({ children }: IDashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "ml-16" : "ml-64"
      )}>
        <div className="h-full overflow-auto">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}