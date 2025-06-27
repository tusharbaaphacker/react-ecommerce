import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts}  from  "../components/slice/productSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Products</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {items.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
            }}
          >
            <img src={product.image} alt={product.title} width="100%" height="150" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
