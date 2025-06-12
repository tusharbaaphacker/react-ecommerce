import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Star, Tag, ArrowLeft, Package, Truck, RotateCcw, Ruler } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SingleProduct = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const { addToCart, isInCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full"
        ></motion.div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <p className={`text-lg font-semibold ${theme === "dark" ? "text-red-400" : "text-red-600"}`}>{error || "Product not found"}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className={`inline-flex items-center space-x-2 text-sm font-medium mb-8 ${
            theme === "dark" ? "text-teal-400 hover:text-teal-300" : "text-teal-600 hover:text-teal-700"
          } transition-colors duration-300`}
        >
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </Link>

        {/* Main Product Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden shadow-2xl ${
            theme === "dark" ? "bg-gray-800/80 backdrop-blur-md" : "bg-white/80 backdrop-blur-md"
          } p-6 sm:p-8`}
        >
          {/* Image Section */}
          <div className="relative">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="h-96 overflow-hidden rounded-2xl"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedImage === index ? "ring-2 ring-teal-500" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            {/* Price Tag */}
            <div
              className={`absolute top-4 right-4 flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-semibold ${
                theme === "dark" ? "bg-teal-600/90 text-white" : "bg-teal-100/90 text-teal-800"
              } backdrop-blur-sm`}
            >
              <Tag size={16} />
              <span>${product.price.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-xs text-green-500">({product.discountPercentage}% OFF)</span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between p-4">
            <div>
              <h1 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{product.title}</h1>
              <p className={`text-base mb-6 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{product.description}</p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className={`flex items-center space-x-1 ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.round(product.rating) ? "currentColor" : "none"} stroke="currentColor" />
                  ))}
                  <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                </div>
                <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>({product.reviews?.length || 0} reviews)</span>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <Package size={16} className="mr-2" />
                    Brand:
                  </span>{" "}
                  {product.brand}
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <Package size={16} className="mr-2" />
                    Category:
                  </span>{" "}
                  {product.category}
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <Package size={16} className="mr-2" />
                    Stock:
                  </span>{" "}
                  {product.availabilityStatus} ({product.stock} available)
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <Ruler size={16} className="mr-2" />
                    Dimensions:
                  </span>{" "}
                  {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <Truck size={16} className="mr-2" />
                    Shipping:
                  </span>{" "}
                  {product.shippingInformation}
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <RotateCcw size={16} className="mr-2" />
                    Return Policy:
                  </span>{" "}
                  {product.returnPolicy}
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <Package size={16} className="mr-2" />
                    Warranty:
                  </span>{" "}
                  {product.warrantyInformation}
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <span className="font-semibold flex items-center">
                    <Package size={16} className="mr-2" />
                    Minimum Order:
                  </span>{" "}
                  {product.minimumOrderQuantity} units
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => !isInCart(product.id) && addToCart(product)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isInCart(product.id)
                    ? theme === "dark"
                      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                      : "bg-gray-300 text-gray-700 cursor-not-allowed"
                    : theme === "dark"
                    ?  "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                } shadow-lg`}
                disabled={isInCart(product.id)}
              >
                <ShoppingCart size={16} />
                <span>{isInCart(product.id) ? "Already in Cart" : "Add to Cart"}</span>
              </button>
              <button
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  theme === "dark" ? "bg-amber-600 text-white hover:bg-amber-700" : "bg-amber-500 text-white hover:bg-amber-600"
                } shadow-lg`}
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-8 rounded-3xl p-6 ${theme === "dark" ? "bg-gray-800/80" : "bg-white/80"} backdrop-blur-md shadow-2xl`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Customer Reviews</h2>
          {product.reviews.length > 0 ? (
            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{review.reviewerName}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" className={theme === "dark" ? "text-yellow-400" : "text-yellow-500"} />
                      ))}
                    </div>
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{review.comment}</p>
                  <p className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-500"} mt-1`}>{new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>No reviews yet.</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SingleProduct;