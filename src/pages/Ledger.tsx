import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Ledger = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Ledger</h1>
            <p className="text-muted-foreground">Financial records and accounting</p>
          </div>
        </div>
      </div>

      <Card className="p-8 text-center">
        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">Financial Ledger</h3>
        <p className="text-muted-foreground">
          View and manage your financial records and accounting data. Feature in development.
        </p>
      </Card>
    </div>
  );
};

export default Ledger;