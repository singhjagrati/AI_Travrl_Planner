import * as React from "react";
import { cn } from "../../lib/utils"; // Make sure the utility works or fallback to clsx or classnames

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  icon: Icon,
  iconPosition = "left", // left or right
  type = "button",
  onClick = () => {},
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      )}

      {Icon && iconPosition === "left" && (
        <Icon className="mr-2 h-5 w-5" />
      )}

      {children}

      {Icon && iconPosition === "right" && (
        <Icon className="ml-2 h-5 w-5" />
      )}
    </button>
  );
};

export default Button;
