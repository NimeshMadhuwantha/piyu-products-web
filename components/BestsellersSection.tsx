import FoodCard from "./FoodCard";
import { foodItems } from "@/data/foodItems";

export default function BestsellersSection() {
  // Select specific items for bestsellers by their IDs
  const bestsellerIds = ["item-1", "item-3", "item-5", "item-6", "item-8", "item-9", "item-11", "item-12"];
  const bestsellerItems = foodItems.filter(item => bestsellerIds.includes(item.id));

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
          Our Bestsellers
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {bestsellerItems.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              badge={item.badge}
              category={item.category}
              weight={item.weight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
