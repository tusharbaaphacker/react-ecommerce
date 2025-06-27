import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import ProductPage from './components/productCard';
// import CategoryPage from './components/pages/CategoryPage';
import About from './components/pages/about';
import CategoryPage from './components/pages/CategoryPage';
// import CategoryPage from './components/pages/CategoryPage';






function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      
        <Route path="/products/:category" element={<CategoryPage />} />

        <Route path="/about" element={<About />} />
      </Routes>
      </>
  );
}

export default App;