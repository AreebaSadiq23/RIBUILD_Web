import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "destructive" | "custom"
}

const buttonVariants = {
  default: "bg-orange-500 text-white hover:bg-orange-600",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  custom: "bg-[#f6f6f6] text-orange-500 hover:bg-orange-100 font-semibold",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2",
          buttonVariants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }