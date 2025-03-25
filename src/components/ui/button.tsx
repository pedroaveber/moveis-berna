import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Button({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button 
      className={cn(
        "h-10 flex items-center gap-2 justify-center px-4 text-white bg-orange-400 enabled:hover:bg-orange-500 rounded-md w-full font-semibold",
        className,
      )}
      {...props}
    />
  )
}