"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Piyu Products
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/food-items">Food Items</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Cart */}
        <Link href="/cart" className="relative">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}
