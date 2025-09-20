import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ordersData } from "@/data/dashboard-data";
import { Package, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-success/10 text-success";
    case "Processing":
      return "bg-warning/10 text-warning";
    case "Shipped":
      return "bg-primary/10 text-primary";
    case "Pending":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Orders</h1>
            <p className="text-muted-foreground">Manage and track all your orders</p>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Total Orders</div>
          <div className="text-2xl font-bold text-foreground">{ordersData.length}</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Completed</div>
          <div className="text-2xl font-bold text-success">
            {ordersData.filter(o => o.status === "Completed").length}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Processing</div>
          <div className="text-2xl font-bold text-warning">
            {ordersData.filter(o => o.status === "Processing").length}
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
            <p className="text-sm text-muted-foreground">A list of recent orders and their status</p>
          </div>
          <div className="flex space-x-2">
            <div className="relative flex items-center">
              <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                className="max-w-sm pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Processing">Processing</SelectItem>
                <SelectItem value="Shipped">Shipped</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Order ID</TableHead>
                <TableHead className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Customer</TableHead>
                <TableHead className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Amount</TableHead>
                <TableHead className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} className="border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors">
                  <TableCell className="py-4 px-2">
                    <span className="text-sm font-medium text-foreground">{order.id}</span>
                  </TableCell>
                  <TableCell className="py-4 px-2">
                    <span className="text-sm text-foreground">{order.customer}</span>
                  </TableCell>
                  <TableCell className="py-4 px-2 text-right">
                    <span className="text-sm font-medium text-foreground">{order.amount}</span>
                  </TableCell>
                  <TableCell className="py-4 px-2 text-center">
                    <Badge className={getStatusColor(order.status)} variant="secondary">
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Orders;