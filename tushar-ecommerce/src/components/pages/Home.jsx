import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Electronics",
      image: "https://cdn-icons-png.flaticon.com/512/838/838016.png",
      path: "electronics",
    },
    {
      name: "Fashion",
      image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
      path: "fashion",
    },
    {
      name: "Jewelry",
      image: "https://cdn-icons-png.flaticon.com/512/2543/2543979.png",
      path: "jewelry",
    },
    {
      name: "Sports",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      path: "sports",
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>
        Welcome to <span style={styles.brand}>TS Shop</span> 🛍️
      </h1>

      <p style={styles.subText}>One place for all your shopping needs 💯</p>

      <div style={styles.rotationWrapper}>
        <div style={styles.rotationCircle}>
          {categories.map((cat, index) => (
            <div
              key={index}
              style={{ ...styles.bubble, transform: `rotate(${index * 90}deg) translate(150px) rotate(-${index * 90}deg)` }}
              onClick={() => navigate(`/products/${cat.path}`)}
            >
              <img src={cat.image} alt={cat.name} style={styles.image} />
              <p style={styles.label}>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.infoBox}>
        <h2>🛒 Why TS Shop?</h2>
        <ul>
          <li>✅ Latest Electronics, Fashion & more</li>
          <li>✅ Fast delivery & Secure checkout</li>
          <li>✅ User-friendly and Responsive UI</li>
        </ul>
      </div>
    </div>
  );
};

// 🔥 Inline styles
const styles = {
  page: {
    textAlign: "center",
    padding: "3rem",
    fontFamily: "'Segoe UI', sans-serif",
    background: "#f4f4f4",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  brand: {
    color: "#ff6600",
    fontWeight: "bold",
  },
  subText: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#555",
  },
  rotationWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  rotationCircle: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    position: "relative",
    animation: "spin 12s linear infinite",
  },
  bubble: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-50px 0 0 -50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  image: {
    width: "40px",
    height: "40px",
    marginBottom: "0.5rem",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "bold",
  },
  infoBox: {
    marginTop: "2rem",
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
};

// ⏺️ Animation styles (added dynamically)
const animationStyle = document.createElement("style");
animationStyle.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(animationStyle);

export default Home;
