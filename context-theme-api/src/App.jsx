import { Route, Routes } from 'react-router-dom'
import Home from './componenets/Home'
import About from './componenets/About'
import Gallery from './componenets/Gallery'
import Contact from './componenets/Contact'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
