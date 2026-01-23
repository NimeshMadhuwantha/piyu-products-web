"use client";

import { X, ArrowLeft } from "lucide-react";
import Button from "./button";

interface PaymentConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onPlaceOrder: () => void;
}

export default function PaymentConfirmation({ 
  isOpen, 
  onClose, 
  onBack, 
  onPlaceOrder 
}: PaymentConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b-2 border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <h2 className="text-3xl font-black mb-2">Payment Information</h2>
          <p className="text-gray-600 mb-6">
            Complete your payment to confirm your order.
          </p>
          <p className="text-gray-600 mb-8">
            ඔබගේ ඇණවුම තහවුරු කිරීමට ඔබගේ ගෙවීම සම්පූර්ණ කරන්න.
          </p>

          {/* Payment Methods */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Payment Methods</h3>
            
            <div className="space-y-4">
              {/* BOC Bank */}
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="font-semibold text-gray-800 mb-2">Bank of Ceylon (BOC)</p>
                <div className="space-y-1 text-gray-700">
                  <p className="text-sm">
                    <span className="font-medium">Account Number:</span> 92392392734
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Account Name:</span> Piyu Products
                  </p>
                </div>
              </div>

              {/* Additional payment info can be added here */}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-gray-800 mb-3 text-lg">Important Instructions</h4>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-800 font-medium mb-1">English:</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  After completing your payment, please send the payment receipt (screenshot or photo) 
                  to our WhatsApp number along with your order confirmation. Once we verify your payment, 
                  your order will be confirmed and processed for delivery.
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-800 font-medium mb-1">සිංහල:</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  ඔබගේ ගෙවීම සම්පූර්ණ කිරීමෙන් පසු, කරුණාකර ගෙවීම් රිසිට්පත (තිර රුවක් හෝ ඡායාරූපයක්) 
                  ඔබගේ ඇණවුම් තහවුරු කිරීම සමඟ අපගේ WhatsApp අංකයට එවන්න. අපි ඔබගේ ගෙවීම සත්‍යාපනය 
                  කළ පසු, ඔබගේ ඇණවුම තහවුරු කර බෙදාහැරීම සඳහා ක්‍රියාත්මක කරනු ලැබේ.
                </p>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="pt-2">
            <Button 
              type="button" 
              variant="primary" 
              className="w-full py-4 text-lg"
              onClick={onPlaceOrder}
            >
              Place Order & Send to WhatsApp
            </Button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Your order details will be sent via WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}
