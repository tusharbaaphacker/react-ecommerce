import React from "react";

const Cart = () => {
  return (
    <div style={styles.container}>
      <h2>Your Cart 🛒</h2>
      <p>No items in cart yet.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
};

export default Cart;