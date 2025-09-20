import { Card } from "@/components/ui/card";
import { Receipt } from "lucide-react";

const Taxes = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <Receipt className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Taxes</h1>
            <p className="text-muted-foreground">Tax management and reporting</p>
          </div>
        </div>
      </div>

      <Card className="p-8 text-center">
        <Receipt className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">Tax Management</h3>
        <p className="text-muted-foreground">
          Handle tax calculations, reporting, and compliance. This module is under development.
        </p>
      </Card>
    </div>
  );
};

export default Taxes;