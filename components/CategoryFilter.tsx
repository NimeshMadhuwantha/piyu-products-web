export const CATEGORIES = ["All", "Sweet", "Spicy", "Savory", "Healthy", "Drinks"];

type Props = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          aria-pressed={cat === active}
          onClick={() => onChange(cat)}
          className={`inline-flex items-center justify-center whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25
            ${cat === active
              ? "bg-primary-green text-white border-white/90 shadow-sm"
              : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50 hover:border-primary/40"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
