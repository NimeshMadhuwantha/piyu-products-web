"use client";

import { useEffect, useState } from "react";
import Button from "./button";

type Props = {
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
};

export default function FoodCard({
  name,
  price,
  image,
  description,
  badge,
}: Props) {
  const [quantity, setQuantity] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Load quantity from localStorage after component mounts (client-side only)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const storageKey = `food-quantity-${name}`;
    const savedQuantity = localStorage.getItem(storageKey);
    if (savedQuantity) {
      const parsed = parseInt(savedQuantity, 10);
      if (!isNaN(parsed) && parsed > 0) {
        setQuantity(parsed);
      }
    }
  }, [name]);

  // Save quantity to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      const storageKey = `food-quantity-${name}`;
      localStorage.setItem(storageKey, quantity.toString());
    }
  }, [quantity, name, mounted]);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const totalPrice = price * quantity;

  return (
    <div className="group bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-white/2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-4/3 w-full bg-gray-100 dark:bg-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-primary text-white text-[10px] px-2 py-1 rounded">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-text-main dark:text-white leading-tight">
            {name}
          </h3>
        </div>

        <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed line-clamp-2 opacity-50 font-medium">
          {description}
        </p>
        <div className="pt-2">
          <div className="font-bold text-primary text-2xl text-primary-green">
            LKR {totalPrice.toFixed(2)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Unit Price: LKR {price.toFixed(2)}
          </div>
        </div>
        {/* Quantity & Buttons */}
        <div className="mt-auto pt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Quantity
            </span>

            <div className="flex items-center bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 h-8">
              <button
                type="button"
                onClick={handleDecrease}
                className="px-2 h-full text-gray-500 hover:text-primary transition-colors flex items-center justify-center text-lg leading-none"
              >
                −
              </button>

              <input
                type="text"
                readOnly
                value={quantity}
                className="w-8 text-center bg-transparent border-none p-0 text-sm font-medium text-text-main dark:text-white focus:ring-0"
              />

              <button
                type="button"
                onClick={handleIncrease}
                className="px-2 h-full text-gray-500 hover:text-primary transition-colors flex items-center justify-center text-lg leading-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary">View</Button>

            {/* <Button variant="primary" icon={<ShoppingCart size={15} />}> */}
            <Button variant="primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
