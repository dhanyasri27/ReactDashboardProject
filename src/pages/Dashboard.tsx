import { MetricCard } from "@/components/dashboard/metric-card";
import { Card } from "@/components/ui/card";
import { dashboardMetrics, productSalesData, salesByCategoryData, salesByCountryData } from "@/data/dashboard-data";
import { Users, DollarSign, Package, RotateCcw } from "lucide-react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const metricIcons = [Users, DollarSign, Package, RotateCcw];

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardMetrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            isPositive={metric.isPositive}
            icon={metricIcons[index]}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Bar Chart - Product Sales */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Product Sales</h3>
            <p className="text-sm text-muted-foreground">Gross Margin vs Revenue</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productSalesData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
                            <YAxis
                              className="text-xs"
                              tick={{ fill: "hsl(var(--muted-foreground))" }}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "6px",
                              }}
                            />
                            <Legend />              <Bar dataKey="grossMargin" fill="hsl(var(--chart-1))" name="Gross Margin" />
              <Bar dataKey="revenue" fill="hsl(var(--chart-2))" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Pie Chart - Sales by Category */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Sales by Category</h3>
            <p className="text-sm text-muted-foreground">Distribution by product category</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={salesByCategoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {salesByCategoryData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === activeIndex ? "hsl(var(--primary))" : entry.color} 
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Sales by Country Table */}
      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground">Sales by Country</h3>
          <p className="text-sm text-muted-foreground">Top performing markets</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Country</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Sales</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {salesByCountryData.map((item) => (
                <tr key={item.country} className="border-b border-border/50 last:border-0">
                  <td className="py-3 px-2 text-sm font-medium text-foreground">{item.country}</td>
                  <td className="py-3 px-2 text-sm text-right text-foreground">{item.sales}</td>
                  <td className="py-3 px-2 text-sm text-right">
                    <span className="inline-flex items-center rounded-full bg-primary-muted px-2 py-1 text-xs font-medium text-primary">
                      {item.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;