import { Card } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

const Marketplace = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <ShoppingBag className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Marketplace</h1>
            <p className="text-muted-foreground">Browse and manage marketplace products</p>
          </div>
        </div>
      </div>

      <Card className="p-8 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">Marketplace Coming Soon</h3>
        <p className="text-muted-foreground">
          This feature is currently under development. Check back soon for marketplace functionality.
        </p>
      </Card>
    </div>
  );
};

export default Marketplace;