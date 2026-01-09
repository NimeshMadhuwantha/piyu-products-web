"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";
import { foodItems } from "@/data/foodItems";

export default function BestsellersSection() {
  const [showAll, setShowAll] = useState(false);
  
  // Select specific items for bestsellers by their IDs
  const bestsellerIds = ["item-1", "item-3", "item-5", "item-6", "item-8", "item-9", "item-11", "item-12"];
  const bestsellerItems = foodItems.filter(item => bestsellerIds.includes(item.id));
  
  // For small screens, show only 4 items initially
  const displayedItems = showAll ? bestsellerItems : bestsellerItems.slice(0, 4);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
          Our Bestsellers
        </h2>

        {/* Responsive grid - On small screens show limited items, on sm+ show all */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {/* Small screens: use displayedItems */}
          <div className="contents sm:hidden">
            {displayedItems.map((item) => (
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
          
          {/* Medium screens and up: show all items */}
          <div className="contents hidden sm:block sm:contents">
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

        {/* Show More/Show Less button - only visible on small screens */}
        {bestsellerItems.length > 4 && (
          <div className="mt-6 text-center sm:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors"
            >
              {showAll ? "Show Less" : "Show More..."}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
