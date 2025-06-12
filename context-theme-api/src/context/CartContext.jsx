import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize from localStorage with validation
    try {
      const savedCart = localStorage.getItem("cartItems");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      // Ensure parsedCart is an array
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:", error);
      return [];
    }
  });

  // Update localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity if item exists
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const isInCart = (productId) => {
    // Ensure cartItems is an array before calling some
    return Array.isArray(cartItems) && cartItems.some((item) => item.id === productId);
  };

  const getTotalItems = () => {
    return Array.isArray(cartItems)
      ? cartItems.reduce((total, item) => total + item.quantity, 0)
      : 0;
  };

  const getTotalPrice = () => {
    return Array.isArray(cartItems)
      ? cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)
      : "0.00";
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isInCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);