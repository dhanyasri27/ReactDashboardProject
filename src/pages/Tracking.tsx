import { Card } from "@/components/ui/card";
import { Truck } from "lucide-react";
import { ITrackingProps } from "../types/component-interfaces";

const Tracking = ({}: ITrackingProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <Truck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tracking</h1>
            <p className="text-muted-foreground">Monitor shipments and deliveries</p>
          </div>
        </div>
      </div>

      <Card className="p-8 text-center">
        <Truck className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">Tracking System</h3>
        <p className="text-muted-foreground">
          Track your shipments and manage deliveries. This feature will be available soon.
        </p>
      </Card>
    </div>
  );
};

export default Tracking;