import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
    @keyframes fall {
      0% { transform: translateY(-100%); opacity: 0; }
      100% { transform: translateY(100vh); opacity: 0.3; }
    }

    .ribbon {
      position: absolute;
      width: 4px;
      height: 80px;
      background: linear-gradient(#ff69b4, #ffa500, #00ffff);
      opacity: 0.15;
      animation: fall linear infinite;
    }

    .fade {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeIn 1s ease forwards;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    `;
    document.head.appendChild(styleTag);
  }, []);

  const description = [
    "TS Shop is a modern e-commerce platform built with React.",
    "It allows users to browse, filter, and buy products by categories.",
    "The project uses Redux Toolkit for global state management.",
    "Category-based product pages improve navigation and UX.",
    "Users can add items to their cart and review them.",
    "Axios is used for API communication with the backend.",
    "Animations are used for better visual engagement.",
    "Each product is displayed with title, price, and image.",
    "You can also add new products via the Add Product page.",
    "Home page features rotating category bubbles.",
    "Routing is managed using react-router-dom v6.",
    "Navbar has dropdown animation and category navigation.",
    "Mobile responsiveness is considered in the layout.",
    "Background visuals use CSS animations and gradients.",
    "Project is scalable for more features like login/payment.",
    "The design is minimalist, smooth and fast.",
    "CSS-in-JS (inline styles) is used for modular design.",
    "The structure is based on components and pages folders.",
    "The UI is attractive and encourages user interaction.",
    "TS Shop reflects real-world e-commerce design principles."
  ];

  // Generate ribbons randomly
  const ribbons = Array.from({ length: 30 }).map((_, i) => ({
    left: `${Math.random() * 100}vw`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 5}s`,
  }));

  return (
    <div style={styles.page}>
      <h1 style={styles.heading} className="fade">🎉 About <span style={styles.brand}>TS Shop</span></h1>

      <div style={styles.description}>
        {description.map((line, idx) => (
          <p key={idx} className="fade" style={{ animationDelay: `${0.3 * idx}s` }}>
            {line}
          </p>
        ))}
      </div>

      {/* Party ribbons */}
      {ribbons.map((r, idx) => (
        <div
          key={idx}
          className="ribbon"
          style={{
            left: r.left,
            top: "-100px",
            animationDelay: r.delay,
            animationDuration: r.duration,
          }}
        ></div>
      ))}
    </div>
  );
};

const styles = {
  page: {
    position: "relative",
    overflow: "hidden",
    padding: "3rem",
    background: "#fefefe",
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
    color: "#333",
  },
  heading: {
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "2rem",
  },
  brand: {
    color: "#ff6600",
  },
  description: {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "1.1rem",
    lineHeight: "1.7rem",
    padding: "1rem",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.85)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default About;
