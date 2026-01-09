"use client";

import { useMemo, useState } from "react";
import Button from "@/components/button";
import Link from "next/link";
import CartFoodCard from "@/components/CartFoodCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Spicy Potato Chips",
      price: 350,
      quantity: 2,
      image: "/assets/images/chips.jpg",
      variant: "Extra Hot • Family Pack",
    },
    {
      id: "2",
      name: "Salted Peanuts",
      price: 500,
      quantity: 1,
      image: "/assets/images/peanuts.jpg",
      variant: "Roasted • 200g",
    },
  ]);

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const updateQty = (id: string, qty: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((i) => i.id !== id));
  };

  return (
    <>
    <Navbar/>
    <main className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-4xl font-black mb-2">Your Cart</h2>
        <p className="text-gray-500">
          You have {cartItems.length} items in your cart.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {cartItems.map((item) => (
            <CartFoodCard
              key={item.id}
              {...item}
              onQuantityChange={(qty) => updateQty(item.id, qty)}
              onRemove={() => removeItem(item.id)}
            />
          ))}

          <Link
            href="/food-items"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* Right */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-white dark:bg-[#2c241b] rounded-xl p-6 border">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">LKR {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Tax (5%)</span>
                <span className="font-bold">LKR {tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-black text-primary">
                  LKR {total.toFixed(2)}
                </span>
              </div>
            </div>

            <Button variant="primary" className="w-full py-4 text-lg">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
