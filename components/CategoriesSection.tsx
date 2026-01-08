import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Snacks", image: "/assets/images/snacks.jpg" },
  { title: "Bites", image: "/assets/images/bites.jpg" },
  { title: "Herbal Powders", image: "/assets/images/herbal.jpg" },
  { title: "Sweets", image: "/assets/images/sweets.jpg" },
  { title: "Dry Foods", image: "/assets/images/dryfoods.jpg" },
];

export default function CategoriesSection() {
  return (
    <section className="py-10">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
