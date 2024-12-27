import React from 'react'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Courses from './pages/Courses'
import Frontend from './pages/Frontend'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/frontend' element={<Frontend />} />
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />
      </Routes>
    </div>
  )
}

export default App