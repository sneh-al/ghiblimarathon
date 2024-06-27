"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-green-500 transition-all duration-700 animate-in"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

const CircleProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} {...props}>
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative h-16 w-16">
        <div className="bg-primary-500/20 absolute h-full w-full rounded-full">
          <div
            className="absolute h-full w-full rounded-full bg-green-500"
            style={{
              transform: `rotate(-90deg) translate(-50%, -50%) rotate(${value}deg)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  </ProgressPrimitive.Root>
));

CircleProgress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, CircleProgress };
