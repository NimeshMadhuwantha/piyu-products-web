"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import Button from "@/components/button";
import ConfirmationModal from "@/components/ConfirmationModal";
import { OrderData } from "@/lib/OrderContext";
import { useCart } from "@/lib/CartContext";

type OrderSummaryCardProps = {
  order: OrderData;
  onDelete: () => void;
};

export default function OrderSummaryCard({ order, onDelete }: OrderSummaryCardProps) {
  const { addToCart, clearCart } = useCart();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleReturnToCart = () => {
    // Clear existing cart first
    clearCart();
    
    // Add all order items back to cart
    order.items.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        weight: item.weight,
        description: "", // We don't store description in order
        category: "", // We don't store category in order
        quantity: item.quantity,
      });
    });
    
    // Optionally navigate to cart page
    window.location.href = "/cart-page";
  };
const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsDeleteModalOpen(false);
    onDelete();
  };

  return (
    <div className="bg-white rounded-xl border-2 border-gray-300 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header with Order ID and Delete */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Order #{order.orderId}</h3>
          <p className="text-sm text-gray-500">{new Date(order.orderDate).toLocaleString()}</p>
        </div>
        <button
          onClick={handleDeleteClick}
          className="text-gray-400 hover:text-black transition"
          aria-label="Delete order"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Order Items */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-700 mb-3">Items</h4>
        <div className="space-y-3">
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 pb-3 border-b border-gray-200 last:border-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">
                  LKR {item.price.toLocaleString()} × {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800 text-sm">
                  LKR {(item.price * item.quantity).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">{item.weight * item.quantity}g</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="mb-4 bg-gray-50 rounded-lg p-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">LKR {order.subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Weight:</span>
            <span className="font-medium">{order.totalWeight}g</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping ({order.shippingMethod}):</span>
            <span className="font-medium">
              {order.shipping === 0 ? "Free" : `LKR ${order.shipping.toLocaleString()}`}
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-300">
            <span className="font-bold text-gray-800">Total:</span>
            <span className="font-bold text-primary text-lg">LKR {order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="mb-4 bg-blue-50 rounded-lg p-4">
        <h4 className="text-sm font-bold text-gray-700 mb-2">Customer Details</h4>
        <div className="space-y-1 text-sm">
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {order.customerDetails.name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Address:</span> {order.customerDetails.address}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">District:</span> {order.customerDetails.district}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Mobile:</span> {order.customerDetails.mobile1}
          </p>
          {order.customerDetails.mobile2 && (
            <p className="text-gray-700">
              <span className="font-medium">Alt. Mobile:</span> {order.customerDetails.mobile2}
            </p>
          )}
          <p className="text-gray-700">
            <span className="font-medium">Need Date:</span> {order.customerDetails.needDate}
          </p>
        </div>
      </div>

      {/* Payment Bank Details */}
      <div className="mb-4 bg-green-50 rounded-lg p-4 border border-green-200">
        <h4 className="text-sm font-bold text-gray-800 mb-2">Payment Details / ගෙවීම් විස්තර</h4>
        <div className="space-y-1 text-sm">
          <p className="text-gray-700"><span className="font-medium">Bank:</span> Commercial Bank</p>
          <p className="text-gray-700"><span className="font-medium">Account:</span> Piyu Products - 1234567890</p>
                    <p className="text-gray-700"><span className="font-medium">Branch:</span> Middeniya</p>
          <p className="text-xs text-gray-600 mt-2">Pay and send receipt via WhatsApp / ගෙවා රිසිට්පත WhatsApp එවන්න</p>
        </div>
      </div>

      {/* Return to Cart Button */}
      <Button
        variant="primary"
        className="w-full py-3"
        onClick={handleReturnToCart}
      >
        Order Return to Cart
      </Button>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Order"
        message="Are you sure you want to delete this order? This action cannot be undone."
      />
    </div>
  );
}
