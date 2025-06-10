import { Route, Routes } from 'react-router-dom'
import Home from './componenets/Home'
import About from './componenets/About'
import Gallery from './componenets/Gallery'
import Contact from './componenets/Contact'
import Register from './componenets/Register'
import Login from './componenets/Login'
import MainLayout from './componenets/MainLayout'
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
