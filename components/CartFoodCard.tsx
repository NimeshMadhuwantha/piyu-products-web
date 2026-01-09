"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";

type Props = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
  onQuantityChange: (qty: number) => void;
  onRemove: () => void;
};

export default function CartFoodCard({
  name,
  price,
  quantity,
  image,
  variant,
  onQuantityChange,
  onRemove,
}: Props) {
  const increase = () => onQuantityChange(quantity + 1);
  const decrease = () => quantity > 1 && onQuantityChange(quantity - 1);

  return (
    <div className="bg-white dark:bg-[#2c241b] rounded-xl p-4 shadow-sm border hover:border-primary/20 transition">
      <div className="flex gap-4 sm:gap-6">
        
        {/* Image */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">{name}</h3>
              {variant && (
                <p className="text-sm text-gray-500 font-medium">{variant}</p>
              )}
            </div>

            <button
              onClick={onRemove}
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 mt-2">
            
            {/* Quantity */}
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-lg border bg-gray-50 dark:bg-[#221910]">
                <button
                  onClick={decrease}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3d3228]"
                >
                  −
                </button>

                <span className="w-10 text-center text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={increase}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3d3228]"
                >
                  +
                </button>
              </div>

              <span className="text-xs text-gray-500">
                LKR {price.toLocaleString()} / unit
              </span>
            </div>

            {/* Total */}
            <p className="text-lg font-bold">
              LKR {(price * quantity).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
