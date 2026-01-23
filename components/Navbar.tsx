"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, ClipboardList } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { useOrder } from "@/lib/OrderContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { getOrderCount } = useOrder();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const orderCount = getOrderCount();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/food-items", label: "Food Items" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100/95 backdrop-blur ">
      <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 text-xl font-bold text-primary"
        >
          <img
            src="/assets/images/Piyulogo.jpg"
            alt="Piyu Products Logo"
            className="w-10 h-10 rounded-4xl"
          />
          <span className="hidden sm:inline">Piyu Products</span>
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex gap-10 text-md font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-primary-green"
                  : "text-black hover:text-gray-700 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile & Desktop: Hamburger Menu & Cart */}
        <div className="flex items-center gap-4">
          {/* Order Icon - Mobile */}
          <Link href="/order-page" className="relative md:hidden">
            <ClipboardList />
            {orderCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </Link>

          {/* Cart Icon - Mobile */}
          <Link href="/cart-page" className="relative md:hidden">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Order Icon - Desktop */}
          <Link href="/order-page" className="relative hidden md:block">
            <ClipboardList />
            {orderCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </Link>

          {/* Cart Icon - Desktop */}
          <Link href="/cart-page" className="relative hidden md:block">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-200">
          <nav className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold py-2 ${
                  isActive(link.href)
                    ? "text-primary-green"
                    : "text-black hover:text-gray-700 transition-colors"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
