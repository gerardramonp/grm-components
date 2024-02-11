import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { SchadcnSwitch } from "./SchadcnSwitch";

import { cn } from "@/lib/utils";

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SchadcnSwitch
> & {
  label: string;
};

const SchadcnSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={(cn(), className)}>
    <SchadcnSwitch />
    <label>myLabel</label>
  </div>
));
SchadcnSwitch.displayName = SwitchPrimitives.Root.displayName;

export { SchadcnSwitch };
