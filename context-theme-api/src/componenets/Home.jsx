import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Star, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const { addToCart, isInCart } = useCart();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-950" : "bg-gray-50"
      } py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500`}
    >
      <h1
        className={`text-5xl font-bold text-center mb-16 tracking-tight animate-fade-in ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Explore Our Collection
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className={`group relative rounded-2xl overflow-hidden shadow-lg ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                  theme === "dark"
                    ? "bg-teal-600 text-white"
                    : "bg-teal-100 text-teal-800"
                } transition-colors duration-300`}
              >
                <Tag size={14} />
                <span>${product.price.toFixed(2)}</span>
              </div>
            </div>
            <div className="p-5">
              <h3
                className={`text-base font-semibold mb-2 line-clamp-2 ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                } transition-colors duration-300`}
              >
                {product.title}
              </h3>
              <p
                className={`text-sm mb-3 line-clamp-2 leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center space-x-1 ${
                    theme === "dark" ? "text-yellow-400" : "text-yellow-500"
                  }`}
                >
                  <Star size={16} fill="currentColor" />
                  <span className="text-xs font-medium">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <button
                  onClick={(e) => !isInCart(product.id) && handleAddToCart(e, product)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isInCart(product.id)
                      ? theme === "dark"
                        ? "bg-gray-600 text-gray-300"
                        : "bg-gray-300 text-gray-700"
                      : theme === "dark"
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-teal-500 text-white hover:bg-teal-600"
                  }`}
                  disabled={isInCart(product.id)}
                >
                  <ShoppingCart size={14} />
                  <span>{isInCart(product.id) ? "Already Added" : "Add to Cart"}</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;