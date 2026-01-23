"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight: number;
};

export type OrderData = {
  orderId: string;
  items: OrderItem[];
  subtotal: number;
  totalWeight: number;
  shippingMethod: "Qurior" | "Sl Post";
  shipping: number;
  total: number;
  customerDetails: {
    name: string;
    address: string;
    district: string;
    mobile1: string;
    mobile2?: string;
    needDate: string;
  };
  orderDate: string;
};

type OrderContextType = {
  orders: OrderData[];
  addOrder: (order: OrderData) => void;
  removeOrder: (orderId: string) => void;
  getOrderCount: () => number;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load orders from localStorage on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders);
        setOrders(parsedOrders);
      } catch (e) {
        console.error("Failed to load orders from localStorage", e);
      }
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders, mounted]);

  const addOrder = (order: OrderData) => {
    setOrders((prev) => [order, ...prev]); // Add new order at the beginning
  };

  const removeOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((order) => order.orderId !== orderId));
  };

  const getOrderCount = () => {
    return orders.length;
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        removeOrder,
        getOrderCount,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
