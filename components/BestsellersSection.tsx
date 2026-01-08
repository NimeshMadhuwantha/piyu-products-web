import ProductCard from "./ProductCard";

export default function BestsellersSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
          Our Bestsellers
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          <ProductCard
            name="Authentic Chakli"
            price="LKR 150"
            image="/assets/images/piti.webp"
            description="Crunchy savory spiral snack made with rice flour."
          />
          <ProductCard
            name="Besan Laddu"
            price="LKR 300"
            image="/assets/images/piti.webp"
            description="Traditional sweet made with gram flour and ghee."
          />
          <ProductCard
            name="Spicy Mixture"
            price="LKR 180"
            image="/assets/images/piti.webp"
            description="Crunchy spicy mix with peanuts and noodles."
          />
          <ProductCard
            name="Butter Murukku"
            price="LKR 200"
            image="/assets/images/piti.webp"
            description="Melt-in-mouth rice flour snack."
          />
        </div>
      </div>
    </section>
  );
}
