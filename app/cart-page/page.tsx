"use client";

import { useMemo } from "react";
import Button from "@/components/button";
import Link from "next/link";
import CartFoodCard from "@/components/CartFoodCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/CartContext";
import { ChevronLeft } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-4xl font-black mb-2">Your Cart</h2>
          <p className="text-gray-500 pl-0 sm:pl-1">
            {cartItems.length === 0
              ? "Your cart is empty."
              : `You have ${cartItems.length} item${
                  cartItems.length > 1 ? "s" : ""
                } in your cart.`}
          </p>
        </div>

        {/* Empty cart */}
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-6 text-lg">No items in cart yet.</p>
            <Link href="/food-items">
              <Button variant="primary" className="px-12 mx-auto sm:mx-0">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {cartItems.map((item) => (
                <CartFoodCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  description={item.description}
                  weight={item.weight}
                  onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}

              <Link
                href="/food-items"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4"
              >
                <ChevronLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>

            {/* Right */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-white dark:bg-[#2c241b] rounded-xl p-6 border-2 border-gray-300 dark:border-white/2">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold">
                      LKR {subtotal.toLocaleString()}
                    </span>
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
                <p className="text-center text-sm text-gray-500 my-3 px-4">
                  Cash on delivery - order placed using WhatsApp Cash on
                  delivery - order placed usin
                </p>
                <Button variant="primary" className="w-full py-4 text-lg">
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
