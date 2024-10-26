import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-[0.125rem] border border-[#828FA33F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-1 data-[state=checked]:text-neutral-50 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-primary-1 bg-white dark:bg-[#2B2C37] dark:data-[state=checked]:text-neutral-900",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <svg
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.27588 3.06605L4.03234 5.82251L9.03234 0.82251"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
