import { Card } from "@/components/ui/card";
import { Tag } from "lucide-react";

const Discounts = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <Tag className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Discounts</h1>
            <p className="text-muted-foreground">Manage promotional offers and discounts</p>
          </div>
        </div>
      </div>

      <Card className="p-8 text-center">
        <Tag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">Discount Management</h3>
        <p className="text-muted-foreground">
          Create and manage discount codes and promotional offers. Coming soon.
        </p>
      </Card>
    </div>
  );
};

export default Discounts;