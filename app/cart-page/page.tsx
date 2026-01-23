"use client";

import { useMemo, useState } from "react";
import Button from "@/components/button";
import Link from "next/link";
import CartFoodCard from "@/components/CartFoodCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal, { OrderFormData } from "@/components/OrderModal";
import PaymentConfirmation from "@/components/PaymentConfirmation";
import { useCart } from "@/lib/CartContext";
import { useOrder } from "@/lib/OrderContext";
import { ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const { addOrder } = useOrder();
  const [shippingMethod, setShippingMethod] = useState<"Qurior" | "Sl Post">("Qurior");
  const [isShippingDropdownOpen, setIsShippingDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [customerData, setCustomerData] = useState<OrderFormData | null>(null);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const totalWeight = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.weight * item.quantity, 0),
    [cartItems]
  );

  // Calculate shipping based on selected method
  const shipping = useMemo(() => {
    if (totalWeight === 0) return 0;

    if (shippingMethod === "Qurior") {
      // 0-1300g: 400 LKR, then +130 LKR per 1000g
      if (totalWeight <= 1300) {
        return 400;
      } else {
        const extraWeight = totalWeight - 1300;
        const extra1000s = Math.ceil(extraWeight / 1000);
        return 400 + (extra1000s * 130);
      }
    } else {
      // SL Post rates
      if (totalWeight <= 250) return 150;
      if (totalWeight <= 500) return 200;
      if (totalWeight <= 1000) return 250;
      if (totalWeight <= 2000) return 300;
      // For weights above 2000g, you may want to add more logic
      return 300; // Default for > 2000g
    }
  }, [totalWeight, shippingMethod]);

  const total = subtotal + shipping;

  // Function to handle order form submission
  const handleOrderFormSubmit = (formData: OrderFormData) => {
    setCustomerData(formData);
    setIsModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  // Function to send WhatsApp order
  const sendWhatsAppOrder = () => {
    if (!customerData) return;
    
    // Generate unique order ID
    const orderId = Date.now().toString();
    
    // Save order to OrderContext
    addOrder({
      orderId,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        weight: item.weight,
      })),
      subtotal,
      totalWeight,
      shippingMethod,
      shipping,
      total,
      customerDetails: {
        name: customerData.name,
        address: customerData.address,
        district: customerData.district,
        mobile1: customerData.mobile1,
        mobile2: customerData.mobile2,
        needDate: customerData.needDate,
      },
      orderDate: new Date().toISOString(),
    });
    
    // Build WhatsApp order message with customer details
    let message = "*NEW ORDER*\n";
    message += "=====================\n\n";
  
    message += "*ORDER ITEMS*\n\n";

    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      const itemTotalWeight = item.weight * item.quantity;

      message += `*${index + 1}. ${item.name}*\n`;
      message += `• Unit Price: LKR ${item.price.toLocaleString()}\n`;
      message += `• Quantity: ${item.quantity}\n`;
      message += `• Unit Weight: ${item.weight}g\n`;
      message += `• Total Weight: ${itemTotalWeight}g\n`;
      message += `• Subtotal: LKR ${itemTotal.toLocaleString()}\n\n`;
    });

    message += "=====================\n";
    message += "*ORDER SUMMARY*\n";
    message += `• Total Items: ${cartItems.length}\n`;
    message += `• Total Weight: ${totalWeight}g\n`;
    message += `• Subtotal: LKR ${subtotal.toLocaleString()}\n`;
    message += `• Shipping Method: ${shippingMethod}\n`;
    message += `• Shipping: ${
      shipping === 0 ? "Free" : `LKR ${shipping.toLocaleString()}`
    }\n\n`;
    message += `*TOTAL: LKR ${total.toFixed(2)}*\n\n`;
    
    message += "=====================\n";
    message += "*CUSTOMER DETAILS*\n";
    message += `• Name: ${customerData.name}\n`;
    message += `• Address: ${customerData.address}\n`;
    message += `• District: ${customerData.district}\n`;
    message += `• Mobile: ${customerData.mobile1}\n`;
    if (customerData.mobile2) {
      message += `• Alt. Mobile: ${customerData.mobile2}\n`;
    }
    message += `• Need Date: ${customerData.needDate}\n\n`;
    
    message += "=====================\n";
    message += "*PAYMENT DETAILS*\n";
    message += "• Bank: Bank of Ceylon (BOC)\n";
    message += "• Account Number: 92392392734\n";
    message += "• Account Name: Piyu Products\n\n";
    message += "🔷 *IMPORTANT*\n";
    message += "After payment, please send the payment receipt to this WhatsApp number to confirm your order.\n";
    message += "ගෙවීමෙන් පසු, ඔබගේ ඇණවුම තහවුරු කිරීමට කරුණාකර ගෙවීම් රිසිට්පත මෙම WhatsApp අංකයට එවන්න.";

    // MUST encode
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp business number
    const phoneNumber = "94769963432";
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    
    // Clear the cart after sending order
    clearCart();
    
    // Close modals after sending
    setIsPaymentModalOpen(false);
    setIsModalOpen(false);
  };

// Function to open modal
const handlePlaceOrder = () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  setIsModalOpen(true);
};

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
              <div className="bg-white rounded-xl p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold">
                      LKR {subtotal.toLocaleString()}
                    </span>
                  </div>

                  {/* Shipping Method Selector */}
                  <div className="flex items-center justify-between relative">
                    <span className="text-gray-500">Shipping Method</span>
                    <div className="relative">
                      <button
                        onClick={() => setIsShippingDropdownOpen(!isShippingDropdownOpen)}
                        className="py-2 px-3 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-medium hover:border-primary transition-all flex items-center justify-between text-sm w-[100px]"
                      >
                        <span>{shippingMethod}</span>
                        {isShippingDropdownOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      
                      {/* Dropdown Options - Only show the other option */}
                      {isShippingDropdownOpen && (
                        <div className="absolute z-10 right-0 mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden w-[100px]">
                          <button
                            onClick={() => {
                              setShippingMethod(shippingMethod === "Qurior" ? "Sl Post" : "Qurior");
                              setIsShippingDropdownOpen(false);
                            }}
                            className="w-full py-2 px-3 text-left font-medium text-sm bg-white text-gray-700 hover:bg-gray-100 transition-all"
                          >
                            {shippingMethod === "Qurior" ? "SL Post" : "Qurior"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>
                    <span className={`font-bold ${shipping === 0 ? 'text-green-600' : ''}`}>
                      {shipping === 0 ? 'Free' : `LKR ${shipping.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                    
                  <div className="flex justify-between pb-2">
                    <span className="text-gray-500 text-sm">Total Weight</span>
                    <span className="font-medium text-gray-500 text-sm">{totalWeight}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-black text-primary">
                      LKR {total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 my-3 px-4">
                  Cash on delivery - order placed using WhatsApp
                </p>
                <Button 
                  variant="primary" 
                  className="w-full py-4 text-lg"
                  onClick={handlePlaceOrder}
                >
                  Place Order via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <OrderModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleOrderFormSubmit}
        />

        <PaymentConfirmation 
          isOpen={isPaymentModalOpen}
          onClose={() => {
            setIsPaymentModalOpen(false);
            setIsModalOpen(false);
          }}
          onBack={() => {
            setIsPaymentModalOpen(false);
            setIsModalOpen(true);
          }}
          onPlaceOrder={sendWhatsAppOrder}
        />
      </main>

      <Footer />
    </>
  );
}
