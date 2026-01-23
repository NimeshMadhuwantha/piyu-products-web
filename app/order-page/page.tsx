"use client";

import { useOrder } from "@/lib/OrderContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderSummaryCard from "@/components/OrderSummaryCard";
import Link from "next/link";
import Button from "@/components/button";

export default function OrderPage() {
  const { orders, removeOrder } = useOrder();

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
        {/* Title */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-4xl font-black mb-2">Your Orders</h2>
          <p className="text-gray-500 pl-0 sm:pl-1">
            {orders.length === 0
              ? "You haven't placed any orders yet."
              : `You have ${orders.length} order${orders.length > 1 ? "s" : ""}.`}
          </p>
        </div>

        {/* Empty state */}
        {orders.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-6 text-lg">No orders yet.</p>
            <Link href="/food-items">
              <Button variant="primary" className="px-12 mx-auto sm:mx-0">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <OrderSummaryCard
                key={order.orderId}
                order={order}
                onDelete={() => removeOrder(order.orderId)}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
