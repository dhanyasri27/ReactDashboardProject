import { LucideIcon } from "lucide-react";

export interface IDashboardProps {}

// Interface for MetricCard component
export interface IMetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  className?: string;
}

// Interface for DashboardLayout component
export interface IDashboardLayoutProps {
  children: React.ReactNode;
}

// Interface for Sidebar component
export interface ISidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

// Interface for Tracking component (no props)
export interface ITrackingProps {}
