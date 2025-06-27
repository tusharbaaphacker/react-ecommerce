import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyShop</h2>

      <ul style={styles.menu}>
        <li style={styles.dropdown}>
          <span style={styles.link}>Home</span>
        </li>

        <li style={styles.dropdown}>
          <span style={styles.link}>Products</span>
          <div style={styles.dropdownContent}>
            <Link to="/products/electronics" style={styles.dropdownLink}><h1>Electronics</h1></Link>
            <Link to="/products/fashion" style={styles.dropdownLink}><h1>Fashion</h1></Link>
            <Link to="/products/jewelry" style={styles.dropdownLink}><h1>Jewelry</h1></Link>
            <Link to="/products/sports" style={styles.dropdownLink}><h1>Sports</h1></Link>
          </div>
        </li>

        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/cart" style={styles.link}>Cart</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#333",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 1000,
  },
  logo: {
    color: "#fff",
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    position: "relative",
    cursor: "pointer",
  },
  dropdown: {
    position: "relative",
  },
  dropdownContent: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#444",
    minWidth: "200px",
    padding: "1rem",
    display: "none",
    flexDirection: "column",
    gap: "0.5rem",
    animation: "slideDown 0.4s ease forwards",
  },
  dropdownLink: {
    textDecoration: "none",
    color: "#fff",
  },
};

// 🔄 Apply dropdown show on hover using raw CSS
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  li:hover > div {
    display: flex !important;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleTag);

export default Navbar;
