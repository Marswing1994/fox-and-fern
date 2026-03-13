import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);



  return (
    <nav className="
      w-full sticky top-0 z-50
      bg-[var(--navbar-bg)]
      border-b
      border-[var(--navbar-border)]
      text-[var(--text-color)]
      transition-colors duration-300
    ">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/images/Fox_and_Fern_Logo_-_head_only.png"
            className="h-7"
            alt="Fox & Fern"
          />
          <span className="text-lg font-semibold text-neutral-100">
            <img
              src="/images/ffwordsonly.png"
              className="h-7"
              alt="Fox & Fern Logo Text"
            />
          </span>
        </NavLink>


        <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />
        {/* Mobile Cart Icon */}
        <div className="md:hidden">
          <NavLink to="/cart" className="relative flex items-center">
            <span className="text-xl">🛒</span>

            {itemCount > 0 && (
              <span className="
                absolute -top-2 -right-3
                bg-emerald-600 text-white text-xs
                px-1.5 py-0.5 rounded-full
                min-w-[1.25rem] text-center
              ">
                {itemCount}
              </span>
            )}
          </NavLink>
        </div>


        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            p-2
            rounded
            border
            bg-[var(--hamburger-bg)]
            border-[var(--navbar-border)]
            text-[var(--h1-text-color)]
            hover:bg-[var(--hamburger-hover)]
            transition-colors duration-300
            "
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><NavLink to="/shop" className="text-neutral-300 hover:text-orange-500">Shop</NavLink></li>
          <li><NavLink to="/request" className="text-neutral-300 hover:text-orange-500">Commissions</NavLink></li>
          <li><NavLink to="/cart" className="relative flex items-center gap-1">

                {/* Cart Icon */}
                <span className="text-xl">🛒</span>

                {/* Badge */}
                {itemCount > 0 && (
                  <span className="
                    absolute -top-2 -right-3
                    bg-emerald-600 text-white text-xs
                    px-1.5 py-0.5 rounded-full
                    min-w-[1.25rem] text-center
                  ">
                    {itemCount}
                  </span>
                )}

              </NavLink>
            </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3">
            <li><NavLink to="/shop" className="text-neutral-300 hover:text-orange-500" onClick={() => setOpen(false)}>Shop</NavLink></li>
            <li><NavLink to="/request" className="text-neutral-300 hover:text-orange-500" onClick={() => setOpen(false)}>Commissions</NavLink></li>
            <li className="hidden md:block">
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

