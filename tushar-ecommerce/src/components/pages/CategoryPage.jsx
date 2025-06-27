import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../slice/productSlice";





const CategoryPage = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const productsState = useSelector((state) => state.products);

    

const items = productsState?.items || [];
const loading = productsState?.loading;
const error = productsState?.error;

    
  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  // Step 1: Use a mapping
const categoryMap = {
  electronics: "electronics",
  fashion: ["men's clothing", "women's clothing"],
  jewelry: "jewelery", // 🟢 correct spelling
};

// Step 2: Map current param
const mappedCategory = categoryMap[category.toLowerCase()];

const filtered = Array.isArray(items)
  ? items
      .filter((item) => {
        const cat = item.category?.toLowerCase();
        return Array.isArray(mappedCategory)
          ? mappedCategory.includes(cat)
          : cat === mappedCategory;
      })
      .slice(0, 20)
  : [];


  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>{category.toUpperCase()} Products</h2>

      {loading ? (
        <p style={styles.loading}>Loading products...</p>
      ) : (
        <div style={styles.cardGrid}>
          {filtered.map((p) => (
            <div key={p.id} className="product-card" style={styles.card}>
              <img src={p.image} alt={p.title} style={styles.image} />
              <h4>{p.title}</h4>
              <p style={styles.desc}>{p.description.slice(0, 100)}...</p>
              <p style={styles.price}>₹ {(p.price * 83.5).toFixed(0)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    padding: "2rem",
    background: "#fdfdfd",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#ff6600",
  },
  loading: {
    textAlign: "center",
    fontSize: "1.2rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
  },
  card: {
    padding: "1rem",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    animation: "fadeIn 1s ease",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "1rem",
  },
  desc: {
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "0.5rem",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#2c3e50",
  },
};

// 🔄 Global animation style for card shake + fade
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.product-card:hover {
  animation: shake 0.5s infinite alternate ease-in-out;
}

@keyframes shake {
  0% { transform: translateX(-2px); }
  100% { transform: translateX(2px); }
}
`;
document.head.appendChild(styleTag);

export default CategoryPage;
