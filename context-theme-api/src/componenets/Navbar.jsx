import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { ShoppingCart, Moon, Sun, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { theme, toogleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 ${
        theme === "dark" ? "bg-gray-950" : "bg-white"
      } shadow-lg transition-colors duration-500 animate-fade-in`}
    >
      {/* Logo */}
      <Link
        to="/"
        className={`text-2xl font-bold tracking-tight ${
          theme === "dark" ? "text-teal-400" : "text-teal-600"
        } hover:text-teal-500 transition-colors duration-300`}
      >
        ShopTrend
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          to="/"
          className={`text-sm font-medium ${
            theme === "dark"
              ? "text-gray-200 hover:text-teal-400"
              : "text-gray-700 hover:text-teal-600"
          } px-3 py-2 transition-colors duration-300`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-sm font-medium ${
            theme === "dark"
              ? "text-gray-200 hover:text-teal-400"
              : "text-gray-700 hover:text-teal-600"
          } px-3 py-2 transition-colors duration-300`}
        >
          About
        </Link>
        <Link
          to="/cart"
          className={`text-sm font-medium ${
            theme === "dark"
              ? "text-gray-200 hover:text-teal-400"
              : "text-gray-700 hover:text-teal-600"
          } px-3 py-2 transition-colors duration-300`}
        >
          Cart
        </Link>
        <Link
          to="/contact-us"
          className={`text-sm font-medium ${
            theme === "dark"
              ? "text-gray-200 hover:text-teal-400"
              : "text-gray-700 hover:text-teal-600"
          } px-3 py-2 transition-colors duration-300`}
        >
          Contact Us
        </Link>
        <Link
          to="/login"
          className={`text-sm font-medium ${
            theme === "dark"
              ? "text-gray-200 hover:text-teal-400"
              : "text-gray-700 hover:text-teal-600"
          } px-3 py-2 transition-colors duration-300`}
        >
          Login
        </Link>
        <Link
          to="/register"
          className={`text-sm font-medium ${
            theme === "dark"
              ? "text-gray-200 hover:text-teal-400"
              : "text-gray-700 hover:text-teal-600"
          } px-3 py-2 transition-colors duration-300`}
        >
          Register
        </Link>
      </div>

      {/* Right Section: Cart, Theme Toggle, Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        {/* Cart Icon with Badge */}
        <Link
          to="/cart"
          className={`relative p-2 rounded-full ${
            theme === "dark"
              ? "text-gray-200 hover:bg-gray-800"
              : "text-gray-700 hover:bg-gray-100"
          } transition-colors duration-300`}
        >
          <ShoppingCart size={20} />
          <span
            className={`absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full text-xs font-semibold ${
              theme === "dark" ? "bg-teal-600 text-white" : "bg-teal-500 text-white"
            }`}
          >
            {getTotalItems()}
          </span>
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={toogleTheme}
          className={`p-2 rounded-full ${
            theme === "dark"
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-gray-100 text-yellow-500 hover:bg-gray-200"
          } transition-colors duration-300`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 rounded-full ${
            theme === "dark"
              ? "text-gray-200 hover:bg-gray-800"
              : "text-gray-700 hover:bg-gray-100"
          } transition-colors duration-300`}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 ${
          theme === "dark" ? "bg-gray-950" : "bg-white"
        } shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "text-gray-200 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors duration-300`}
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>
          {/* Menu Items */}
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className={`text-base font-medium ${
                theme === "dark"
                  ? "text-gray-200 hover:text-teal-400"
                  : "text-gray-700 hover:text-teal-600"
              } transition-colors duration-300`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className={`text-base font-medium ${
                theme === "dark"
                  ? "text-gray-200 hover:text-teal-400"
                  : "text-gray-700 hover:text-teal-600"
              } transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              to="/cart"
              onClick={toggleMobileMenu}
              className={`text-base font-medium ${
                theme === "dark"
                  ? "text-gray-200 hover:text-teal-400"
                  : "text-gray-700 hover:text-teal-600"
              } transition-colors duration-300`}
            >
              Cart
            </Link>
            <Link
              to="/contact-us"
              onClick={toggleMobileMenu}
              className={`text-base font-medium ${
                theme === "dark"
                  ? "text-gray-200 hover:text-teal-400"
                  : "text-gray-700 hover:text-teal-600"
              } transition-colors duration-300`}
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              onClick={toggleMobileMenu}
              className={`text-base font-medium ${
                theme === "dark"
                  ? "text-gray-200 hover:text-teal-400"
                  : "text-gray-700 hover:text-teal-600"
              } transition-colors duration-300`}
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={toggleMobileMenu}
              className={`text-base font-medium ${
                theme === "dark"
                  ? "text-gray-200 hover:text-teal-400"
                  : "text-gray-700 hover:text-teal-600"
              } transition-colors duration-300`}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;