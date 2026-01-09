"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

type Props = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  variant?: string;
  onQuantityChange: (qty: number) => void;
  onRemove: () => void;
};

export default function CartFoodCard({
  name,
  price,
  quantity,
  image,
  description,
  variant,
  onQuantityChange,
  onRemove,
}: Props) {
  const increase = () => onQuantityChange(quantity + 1);
  const decrease = () => quantity > 1 && onQuantityChange(quantity - 1);

  return (
    <div className="bg-white dark:bg-[#2c241b] rounded-xl p-4  border-2 border-gray-300 dark:border-white/2 ">
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
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">{description}</p>
              {variant && (
                <p className="text-sm text-gray-500 font-medium">{variant}</p>
              )}
            </div>

            <button
              onClick={onRemove}
              className="text-gray-400 hover:text-black transition"
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 mt-2">
            
            {/* Quantity */}
            <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10 h-8">
                <button
                    type="button"
                    onClick={decrease}
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
                    onClick={increase}
                    className="px-2 h-full text-gray-500 hover:text-primary transition-colors flex items-center justify-center text-lg leading-none"
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
