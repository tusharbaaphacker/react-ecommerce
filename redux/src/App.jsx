import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import CreateProduct from "./components/CreateProduct";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import ProductEdit from "./components/ProductEdit";
import Register from "./components/Register";
import ProductDetail from "./components/ProductDetail";
import CreateCategory from "./components/CreateCategory";
import CategoryDetail from "./components/CategoryDetail";
import CategoryEdit from "./components/CategoryEdit";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/cart" element={<h1>Cart Page</h1>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/edit/:id" element={<ProductEdit />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/category/create" element={<CreateCategory />} />
        <Route path="/category/edit/:id" element={<CategoryEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;