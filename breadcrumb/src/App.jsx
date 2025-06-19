import { Route, Routes } from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import Products from "./components/Products"
import Home from "./components/Home"
import BreadCrumbs from "./components/Breadcrumbs"
import DragDropList from "./components/DragDrop"

function App() {
  return (
    <>
    <BreadCrumbs />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/drag-drop" element={<DragDropList />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product:/id" element={<ProductDetails />}></Route>
    </Routes>
    </>
  )
}

export default App
