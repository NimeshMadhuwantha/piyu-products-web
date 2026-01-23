"use client";

import ProductDetailView from "@/components/ProductDetailView";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { foodItems } from "@/data/foodItems";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function FoodDescriptionPage() {
  const params = useParams();
  const id = params.id as string;

  const item = foodItems.find((food) => food.id === id);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ProductDetailView item={item} />
      <Footer />
    </>
  );
}
