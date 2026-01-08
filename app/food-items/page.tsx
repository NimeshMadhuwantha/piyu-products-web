"use client";

import CategoryFilter, { CATEGORIES } from "@/components/CategoryFilter";
import FoodGrid from "@/components/FoodGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";

import { useMemo, useState } from "react";

type FoodItem = {
  name: string;
  price: string;
  image: string;
  description: string;
  badge?: string;
  category: string;
};

const PAGE_SIZE = 20;

const foodItems: FoodItem[] = [
  {
    name: "Spicy nut sgsgsd s gsrg srs",
    price: "Rs.2300",
    image: "/assets/images/piti.webp",
    description: "Crunchy peanuts coated in spicy masalunchy peanuts coated in spicy masalaa.",
    category: "Spicy",
  },
  {
    name: "Spicy",
    price: "$4.50",
    image: "/assets/images/piti.webp",
    description: "Crunchy peanuts coated in spicy masala.",
    category: "Spicy",
  },
  {
    name: "Peanuts",
    price: "$4.50",
    image: "/assets/images/kosBite.webp",
    description: "Crunchy peanuts coated in spicy masala.",
    category: "Savory",
  },
  {
    name: "Spanuts",
    price: "$4.50",
    image: "/assets/images/piti.webp",
    description: "Crunchy peanuts coated in spicy masala.",
    category: "Spicy",
  },
  {
    name: "art1",
    price: "$4.50",
    image: "/assets/images/piti.webp",
    description: "Crunchy peanuts coated in spicy masala.",
    category: "Sweet",
  },
  {
    name: "Ats",
    price: "$2.50",
    image: "/assets/images/piti.webp",
    description: "Crunchy peanuts coated in spicy masala.",
    category: "Sweet",
  },
  // add rest
];

export default function FoodItemsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setPage(1);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return foodItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.name.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));

  const currentPage = Math.min(Math.max(1, page), totalPages);

  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredItems.slice(start, start + PAGE_SIZE);
  }, [filteredItems, currentPage]);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="flex flex-col gap-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold">Our Delicious Snacks</h2>
              <p className="text-text-muted pl-1 py-3 sm:py-1 opacity-70 font-medium">
          Hand-picked flavors for your cravings
              </p>
            </div>
            <div className="md:min-w-100">
              <SearchBar value={query} onChange={handleQueryChange} />
            </div>
          </div>

          <CategoryFilter
            active={activeCategory}
            categories={CATEGORIES}
            onChange={handleCategoryChange}
          />
        </section>
        <FoodGrid items={pagedItems} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </main>
      <Footer />
    </>
  );
}
