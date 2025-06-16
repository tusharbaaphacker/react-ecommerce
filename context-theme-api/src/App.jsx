import { Route, Routes } from 'react-router-dom'
import Home from './componenets/Home'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Register from './componenets/Register'
import Login from './componenets/Login'
import MainLayout from './componenets/MainLayout'
import Profile from './componenets/Profile'
import SingleProducts from './componenets/SingleProduct'
import Cart from './componenets/Cart'
import {GoogleOAuthProvider} from "@react-oauth/google"
function App() {
  console.log(import.meta.env.VITE_APP_CLIENT_ID, "check")
  return (
    <>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_CLIENT_ID}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<SingleProducts />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
