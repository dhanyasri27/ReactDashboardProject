import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, User, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
            <SettingsIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Manage your account and application preferences</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Settings */}
        <Card className="p-6 border-2 border-gray-400">
          <div className="flex items-center space-x-3 mb-4">
            <User className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Profile Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Acme Corp" />
            </div>
            
            <Button onClick={handleSave} className="w-full">
              Update Profile
            </Button>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 border-2 border-gray-400">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Security</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <Button onClick={handleSave} className="w-full">
              Change Password
            </Button>
          </div>
        </Card>


      </div>
    </div>
  );
};

export default Settings;