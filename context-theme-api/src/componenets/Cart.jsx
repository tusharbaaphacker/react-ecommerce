import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { Trash2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { theme } = useTheme();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-950" : "bg-gray-50"
      } py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500`}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-4xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Your Cart ({getTotalItems()} items)
        </h1>
        {cartItems.length === 0 ? (
          <div
            className={`text-center p-8 rounded-xl ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <ShoppingCart
              size={48}
              className={`mx-auto mb-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <p
              className={`text-lg mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Your cart is empty
            </p>
            <Link
              to="/"
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold ${
                theme === "dark"
                  ? "bg-teal-600 text-white hover:bg-teal-700"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
            >
              <span>Continue Shopping</span>
            </Link>
          </div>
        ) : (
          <div
            className={`rounded-xl overflow-hidden ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center p-4 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <Link
                    to={`/product/${item.id}`}
                    className={`text-base font-semibold ${
                      theme === "dark" ? "text-gray-100" : "text-gray-900"
                    } hover:underline`}
                  >
                    {item.title}
                  </Link>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    ${item.price.toFixed(2)} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={`px-2 py-1 rounded ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      -
                    </button>
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={`px-2 py-1 rounded ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={`p-2 rounded-full ${
                      theme === "dark"
                        ? "text-red-400 hover:bg-gray-700"
                        : "text-red-500 hover:bg-gray-100"
                    }`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            <div
              className={`p-4 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <span
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Total
                </span>
                <span
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  ${getTotalPrice()}
                </span>
              </div>
              <button
                className={`w-full mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
                  theme === "dark"
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;