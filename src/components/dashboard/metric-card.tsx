import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { IMetricCardProps } from "../types/component-interfaces";

export function MetricCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  className
}: IMetricCardProps) {  return (
    <Card className={cn("p-6 hover:shadow-md transition-shadow", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className={cn(
              "text-sm font-medium",
              isPositive ? "text-success" : "text-destructive"
            )}>
              {change}
            </span>
          </div>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-muted">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
}