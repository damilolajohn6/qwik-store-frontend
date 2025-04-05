"use client";

import useCart from "@/lib/hooks/useCart";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoaded } = useUser(); // Add isLoaded for Clerk auth state
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  // Handle search submission (e.g., on Enter key or button click)
  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`);
      setQuery(""); // Clear search input after submission
    }
  };

  // If Clerk auth state is still loading, show a placeholder
  if (!isLoaded) {
    return (
      <div className="sticky top-0 z-10 py-7 h-14 px-10 flex justify-between items-center bg-white max-sm:px-2">
        <Link href="/">
          <h1 className="text-heading2-bold">
            Just <span className="text-red-500">Clothing</span>
          </h1>
        </Link>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <nav className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between  items-center bg-gray-800 max-sm:px-2">
      <Link href="/">
        {/* <Image src="/logo.png" alt="logo" width={130} height={100} priority />{" "} */}
        <h1 className="text-heading2-bold text-white">
          Just <span className="text-red-500">Clothing</span>
        </h1>
        {/* Add priority for LCP */}
      </Link>

      {/* Desktop Navigation */}
      <div className="flex gap-4 text-base font-bold max-lg:hidden">
        <Link
          href="#"
          className={`hover:text-red-500 ${
            pathname ===
            "#"
              ? "text-red-500"
              : "text-white"
          }`}
        >
          Women
        </Link>
        <Link
          href={user ? "#" : "/sign-in"}
          className={`hover:text-red-500 ${
            pathname === "/wishlist" ? "text-red-500" : "text-white"
          }`}
        >
          Men
        </Link>
        <Link
          href={user ? "/products" : "/sign-in"}
          className={`hover:text-red-500 ${
            pathname === "/products" ? "text-red-500" : "text-white"
          }`}
        >
          Shop
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3 border border-gray-300 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px] text-white placeholder-gray-400"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Add Enter key support
        />
        <button
          disabled={!query.trim()}
          onClick={handleSearch}
          aria-label="Search"
        >
          <Search
            className={`h-4 w-4 ${
              query.trim()
                ? "hover:text-red-500 cursor-pointer"
                : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Right Side (Cart, Menu, Auth) */}
      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 hover:bg-gray-900 hover:text-white transition-colors max-md:hidden"
        >
          <ShoppingCart className="h-5 w-5 text-white" />
          <p className="text-base font-bold text-white">
            Cart ({cart.cartItems.length || 0})
          </p>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 cursor-pointer text-white hover:text-red-500" />
        </button>

        {/* Mobile Dropdown */}
        {dropdownMenu && (
          <div className="absolute top-12 right-0 flex flex-col gap-4 p-4 rounded-lg border border-gray-300 bg-white shadow-lg text-base font-bold lg:hidden">
            <Link
              href="/"
              className="hover:text-red-500"
              onClick={() => setDropdownMenu(false)}
            >
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-red-500"
              onClick={() => setDropdownMenu(false)}
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-500"
              onClick={() => setDropdownMenu(false)}
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 hover:bg-gray-900 hover:text-white transition-colors"
              onClick={() => setDropdownMenu(false)}
            >
              <ShoppingCart className="h-5 w-5" />
              <p className="text-base font-bold">
                Cart ({cart.cartItems.length || 0})
              </p>
            </Link>
          </div>
        )}

        {/* Auth Section */}
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" aria-label="Sign in">
            <CircleUserRound className="h-6 w-6 hover:text-red-500" />
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
