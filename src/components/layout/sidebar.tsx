import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-provider";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Truck,
  Users,
  Tag,
  BookOpen,
  Receipt,
  Settings,
  Moon,
  Sun,
  Menu,
  X
} from "lucide-react";
import { ISidebarProps } from "../types/component-interfaces";

const menuItems = [
  { icon: LayoutDashboard, label: " Dashboard", href: "/" },
  { icon: ShoppingBag, label: "Marketplace", href: "/marketplace" },
  { icon: Package, label: "Orders", href: "/orders" },
  { icon: Truck, label: "Tracking", href: "/tracking" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Tag, label: "Discounts", href: "/discounts" },
  { icon: BookOpen, label: "Ledger", href: "/ledger" },
  { icon: Receipt, label: "Taxes", href: "/taxes" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar({ isCollapsed, onToggle }: ISidebarProps) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={cn(
      "fixed left-0 top-0 z-50 h-screen bg-dashboard-sidebar border-r border-border transition-all duration-300 ease-in-out",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-full flex-col">

        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-foreground">Deep Vox.ai</h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="h-8 w-8"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link key={item.href} to={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start h-10 px-3",
                    isActive && "bg-dashboard-sidebar-active text-primary",
                    !isActive && "hover:bg-dashboard-nav-hover",
                    isCollapsed && "justify-center px-2"
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 truncate">{item.label}</span>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Footer - Theme Toggle */}
        <div className="p-2 border-t border-border">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className={cn(
              "w-full justify-start h-10 px-3",
              isCollapsed && "justify-center px-2"
            )}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 flex-shrink-0" />
            ) : (
              <Moon className="h-4 w-4 flex-shrink-0" />
            )}
            {!isCollapsed && (
              <span className="ml-3 truncate">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}