"use client";

import { useState, FormEvent } from "react";
import { X, ArrowLeft } from "lucide-react";
import Button from "./button";
import Input from "./Input";
import Select from "./Select";
import DatePicker from "./DatePicker";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: OrderFormData) => void;
}

export interface OrderFormData {
  name: string;
  address: string;
  district: string;
  mobile1: string;
  mobile2?: string;
  needDate: string;
}

const SRI_LANKA_DISTRICTS = [
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya"
];

export default function OrderModal({ isOpen, onClose, onSubmit }: OrderModalProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    address: "",
    district: "",
    mobile1: "",
    mobile2: "",
    needDate: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});

  const validateMobile = (mobile: string): boolean => {
    // Format: "07********" (10 chars) OR starts with "+" (max 15 chars)
    if (mobile.startsWith("+")) {
      return mobile.length <= 15 && /^\+\d+$/.test(mobile);
    } else if (mobile.startsWith("07")) {
      return mobile.length === 10 && /^07\d{8}$/.test(mobile);
    }
    return false;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // Validate district
    if (!formData.district) {
      newErrors.district = "Please select a district";
    }

    // Validate mobile1
    if (!formData.mobile1.trim()) {
      newErrors.mobile1 = "Mobile number is required";
    } else if (!validateMobile(formData.mobile1)) {
      newErrors.mobile1 = "Invalid format. Use 07******** or +***********";
    }

    // Validate mobile2 (optional, but if provided must be valid)
    if (formData.mobile2 && formData.mobile2.trim() && !validateMobile(formData.mobile2)) {
      newErrors.mobile2 = "Invalid format. Use 07******** or +***********";
    }

    // Validate needDate
    if (!formData.needDate) {
      newErrors.needDate = "Please select a date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b-2 border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <button
            onClick={onClose}
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
          <h2 className="text-3xl font-black mb-2">Complete Your Order</h2>
          <p className="text-gray-600 mb-6">
            Please fill in your details to complete the order via WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <Input
              label="Name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={errors.name}
              placeholder="Enter your full name"
            />

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-green transition-colors resize-none ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={3}
                placeholder="Enter your full address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            {/* District */}
            <Select
              label="District"
              options={SRI_LANKA_DISTRICTS}
              value={formData.district}
              onChange={(e) => handleInputChange("district", e.target.value)}
              error={errors.district}
            />

            {/* Mobile 1 */}
            <Input
              label="Mobile Number"
              type="tel"
              value={formData.mobile1}
              onChange={(e) => handleInputChange("mobile1", e.target.value)}
              error={errors.mobile1}
              placeholder="07******** or +***********"
            />

            {/* Mobile 2 */}
            <Input
              label="Alternative Mobile Number"
              type="tel"
              value={formData.mobile2}
              onChange={(e) => handleInputChange("mobile2", e.target.value)}
              error={errors.mobile2}
              placeholder="07******** or +***********"
              optional
            />

            {/* Need Date */}
            <DatePicker
              label="Need Date"
              value={formData.needDate}
              onChange={(e) => handleInputChange("needDate", e.target.value)}
              error={errors.needDate}
            />

            {/* Description */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> After clicking &quot;Next&quot;, your order details will be sent via WhatsApp. 
                Please ensure all information is correct before proceeding.
              </p>
              <p className="text-sm text-gray-700">
                <strong>සටහන:</strong> &quot;ඊළඟ&quot; බොත්තම ක්ලික් කිරීමෙන් පසු, ඔබගේ ඇණවුම් විස්තර WhatsApp හරහා යවනු ලැබේ. 
                ඉදිරියට යාමට පෙර සියලු තොරතුරු නිවැරදි බව සහතික කරන්න.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full py-4 text-lg"
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
