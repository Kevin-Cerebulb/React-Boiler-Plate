import * as React from "react";
import { cn } from "@/lib/utils";
import { inputVariants } from "@/lib/variants";

const Input = React.forwardRef(({ className, type, variant, ...props }, ref) => {

  return (
    <input
      type={type}
      className={cn(inputVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };