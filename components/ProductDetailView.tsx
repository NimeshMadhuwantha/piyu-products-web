"use client";

import { useState } from "react";
import { FoodItem } from "@/data/foodItems";
import Button from "./button";
import { useCart } from "@/lib/CartContext";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  item: FoodItem;
};

export default function ProductDetailView({ item }: Props) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const images = item.images || [item.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      category: item.category,
      weight: item.weight,
      quantity,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBack = () => {
    router.back();
  };

  const totalPrice = item.price * quantity;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Products</span>
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-6 md:p-10">
          {/* Top Section: Image and Basic Info */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Image Slider */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft size={24} className="text-gray-800" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight size={24} className="text-gray-800" />
                    </button>
                  </>
                )}

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-white text-sm px-3 py-1.5 rounded-lg font-semibold">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? "border-primary scale-105"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Basic Product Info */}
            <div className="flex flex-col gap-6">
              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Category: {item.category}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-br  bg-green-50 rounded-xl p-6 ">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Unit Price</p>
                    <div className="text-4xl md:text-4xl font-extrabold text-gray-900">
                      LKR {item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Weight</p>
                    <div className="text-xl font-bold text-gray-700">
                      {item.weight}g
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Description</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  {item.descriptionSinhala && (
                    <p className="text-gray-600 leading-relaxed">{item.descriptionSinhala}</p>
                  )}
                </div>
              </div>

              {/* Detailed Description */}
              {item.detailedDescription && (
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">About This Product</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 leading-relaxed">{item.detailedDescription}</p>
                    {item.detailedDescriptionSinhala && (
                      <p className="text-gray-600 leading-relaxed">{item.detailedDescriptionSinhala}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Quantity Selector & Add to Cart */}
              <div className="border-t border-gray-200 pt-6 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Quantity
                  </span>
                  <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300 h-11">
                    <button
                      type="button"
                      onClick={handleDecrease}
                      className="px-4 h-full text-gray-600 hover:text-primary transition-colors flex items-center justify-center text-xl font-bold"
                    >
                      −
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={quantity}
                      className="w-12 text-center bg-transparent border-none p-0 text-base font-bold text-gray-900 focus:ring-0"
                    />
                    <button
                      type="button"
                      onClick={handleIncrease}
                      className="px-4 h-full text-gray-600 hover:text-primary transition-colors flex items-center justify-center text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Price and Weight */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Total Price:</span>
                    <span className="text-2xl font-extrabold text-primary">LKR {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">Total Weight:</span>
                    <span className="text-lg font-bold text-gray-800">{(item.weight * quantity).toFixed(0)}g</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  className={`w-full text-lg py-4 ${
                    isAdded ? "bg-green-600 hover:bg-green-700" : ""
                  }`}
                >
                  {isAdded ? "Added to Cart! ✓" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section: Additional Details in Full Width */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column Details */}
              <div className="space-y-6">
                {/* Ingredients */}
                {item.ingredients && (
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Ingredients</h3>
                    <p className="text-gray-600 leading-relaxed">{item.ingredients}</p>
                  </div>
                )}

                {/* Nutritional Info */}
                {item.nutritionalInfo && (
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      Nutritional Information
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.nutritionalInfo}</p>
                  </div>
                )}

                {/* Allergen Info */}
                {item.allergenInfo && (
                  <div>
                    <h3 className="font-bold text-base mb-2 text-gray-900">
                      Allergen Information
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.allergenInfo}</p>
                  </div>
                )}
              </div>

              {/* Right Column Details */}
              <div className="space-y-6">
                {/* Source Information */}
                {item.sourceInfo && (
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">Source Information</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">English:</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.sourceInfo.english}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">සිංහල:</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.sourceInfo.sinhala}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Storage Instructions */}
                {item.storageInstructions && (
                  <div>
                    <h3 className="font-bold text-base mb-2 text-gray-900">
                      Storage Instructions
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.storageInstructions}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
