import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  optional?: boolean;
}

export default function Input({ 
  label, 
  error, 
  optional = false,
  className = "",
  ...props 
}: InputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {optional && <span className="text-gray-400 ml-1">(Optional)</span>}
      </label>
      <input
        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-green transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
