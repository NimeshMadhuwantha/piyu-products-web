import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search for snacks, chips, and more...",
}: Props) {
  return (
    <label className="relative w-full group">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-hover:text-gray-500 group-focus-within:text-gray-500">
        <Search className="h-5 w-5" aria-hidden="true" />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-16 pr-4 outline-none transition duration-200 placeholder:text-gray-500 hover:border-primary/40 hover:ring-1 hover:ring-primary/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/25"
      />
    </label>
  );
}
