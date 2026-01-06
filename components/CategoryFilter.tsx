type Props = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          aria-pressed={cat === active}
          onClick={() => onChange(cat)}
          className={`inline-flex items-center justify-center whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25
            ${cat === active
              ? "bg-primary text-white border-white/90 shadow-sm"
              : "bg-white text-gray-900 border-gray-200 dark:bg-white/5 dark:text-white/90 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-primary/40"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
