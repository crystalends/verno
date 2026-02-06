import * as React from "react";
import { cn } from "@/app/_lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex font-circe w-full min-w-0 bg-transparent pb-2.5 pt-5 text-base transition-colors outline-none md:text-sm",
        "border-b border-[#A09790] rounded-none px-2.5 min-h-12.25",
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:border-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
