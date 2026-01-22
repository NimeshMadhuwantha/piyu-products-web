import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({ 
  children, 
  onClick, 
  variant = "primary",
  icon,
  type = "button",
  className = ""
}: ButtonProps) {
  const baseClasses = "flex items-center justify-center font-medium text-sm rounded-lg transition-all duration-200";
  
  const variantClasses = {
    primary: "gap-2 py-2 px-1 bg-primary-green text-white hover:bg-primary-green/85 shadow-sm",
    secondary: "py-2 px-1 border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}
