import { Card } from "@/components/ui/card";
import { customersData } from "@/data/dashboard-data";
import { Users, Mail, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customersData.filter((customer) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      customer.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      customer.email.toLowerCase().includes(lowerCaseSearchTerm) ||
      customer.country.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Customers</h1>
            <p className="text-muted-foreground">Manage your customer relationships</p>
          </div>
        </div>
      </div>

      {/* Customer Stats */}
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Total Customers</div>
          <div className="text-2xl font-bold text-foreground">{customersData.length}</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Countries</div>
          <div className="text-2xl font-bold text-primary">
            {new Set(filteredCustomers.map(c => c.country)).size}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Active This Month</div>
          <div className="text-2xl font-bold text-success">
            {Math.floor(filteredCustomers.length * 0.8)}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Growth Rate</div>
          <div className="text-2xl font-bold text-success">+12.3%</div>
        </div>
      </div>

      {/* Customers Table */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Customer Directory</h3>
            <p className="text-sm text-muted-foreground">All registered customers and their information</p>
          </div>
          <div className="relative flex items-center">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              className="max-w-sm pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Name</TableHead>
                <TableHead className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Email</TableHead>
                <TableHead className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Country</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer, index) => (
                <TableRow key={index} className="border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors">
                  <TableCell className="py-4 px-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-muted">
                        <span className="text-xs font-medium text-primary">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{customer.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{customer.country}</span>
                    </div>
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

export default Customers;