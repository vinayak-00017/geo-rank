import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";

interface NuclearToggleProps {
  includeNuclear: boolean;
  onToggle: (checked: boolean) => void;
}

export function NuclearToggle({ includeNuclear, onToggle }: NuclearToggleProps) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border/50">
      <Zap className="w-4 h-4 text-muted-foreground" />
      <Label htmlFor="nuclear-toggle" className="text-sm font-medium cursor-pointer">
        Include Nuclear Weapons
      </Label>
      <Switch
        id="nuclear-toggle"
        checked={includeNuclear}
        onCheckedChange={onToggle}
      />
    </div>
  );
}
