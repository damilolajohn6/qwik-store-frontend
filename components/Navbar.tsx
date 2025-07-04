"use client";

import useCart from "@/lib/hooks/useCart";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = async () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const cart = useCart();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");
  const collections = await getCollections();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`);
      setQuery("");
      setDropdownMenu(false); // Close mobile menu on search
    }
  };

  if (!isLoaded) {
    return (
      <nav className="sticky top-0 z-10 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-white flex justify-between items-center">
        <Link href="/">
          <h1
            className="text-3xl sm:text-4xl font-black text-[#014421]"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            Lina" Clothing
          </h1>
        </Link>
        <div className="text-sm sm:text-base">Loading...</div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-10 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-[#F7E6E0] flex flex-wrap items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <h1
          className="text-3xl sm:text-4xl font-black text-[#014421]"
          style={{ fontFamily: "'Newsreader', serif" }}
        >
          Lina" Clothing
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold">
        {!collections || collections.length === 0 ? (
          <p className="text-sm sm:text-base font-semibold">
            No collections found
          </p>
        ) : (
          collections.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="hover:text-[#014421] transition-colors"
            >
              {collection.title}
            </Link>
          ))
        )}
        <Link
          href={user ? "/products" : "/sign-in"}
          className={`hover:text-[#014421] transition-colors ${
            pathname === "/products" ? "text-red-500" : "text-[#1A1A1A]"
          }`}
        >
          Shop
        </Link>
      </div>

      {/* Right Side (Search, Cart, Menu, Auth) */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-lg px-2 sm:px-3 py-1 w-32 sm:w-40 md:w-48">
          <input
            className="bg-transparent outline-none text-sm sm:text-base text-[#1A1A1A] placeholder-gray-400 w-full"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            disabled={!query.trim()}
            onClick={handleSearch}
            aria-label="Search"
          >
            <Search
              className={`h-4 w-4 sm:h-5 sm:w-5 ${
                query.trim()
                  ? "hover:text-red-500 cursor-pointer"
                  : "text-gray-400"
              }`}
            />
          </button>
        </div>

        {/* Cart */}
        <Link
          href="/cart"
          className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded-lg px-2 py-1 hover:bg-gray-900 hover:text-white transition-colors"
        >
          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-[#1A1A1A]" />
          <span className="text-sm sm:text-base font-bold text-[#1A1A1A]">
            ({cart.cartItems.length || 0})
          </span>
        </Link>

        {/* Auth Section */}
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" aria-label="Sign in">
            <CircleUserRound className="h-5 w-5 sm:h-6 sm:w-6 hover:text-red-500" />
          </Link>
        </SignedOut>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
          aria-label="Toggle menu"
          aria-expanded={dropdownMenu}
        >
          <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-[#1A1A1A] hover:text-red-500" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {dropdownMenu && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col gap-3 p-4 w-full z-20">
          {!collections || collections.length === 0 ? (
            <p className="text-sm font-semibold text-center">
              No collections found
            </p>
          ) : (
            collections.map((collection: CollectionType) => (
              <Link
                href={`/collections/${collection._id}`}
                key={collection._id}
                className="text-sm font-semibold hover:text-red-500 transition-colors"
                onClick={() => setDropdownMenu(false)}
              >
                {collection.title}
              </Link>
            ))
          )}
          <Link
            href={user ? "/products" : "/sign-in"}
            className="text-sm font-semibold hover:text-red-500 transition-colors"
            onClick={() => setDropdownMenu(false)}
          >
            Shop
          </Link>
          <Link
            href={user ? "/wishlist" : "/sign-in"}
            className="text-sm font-semibold hover:text-red-500 transition-colors"
            onClick={() => setDropdownMenu(false)}
          >
            Wishlist
          </Link>
          <Link
            href={user ? "/orders" : "/sign-in"}
            className="text-sm font-semibold hover:text-red-500 transition-colors"
            onClick={() => setDropdownMenu(false)}
          >
            Orders
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
