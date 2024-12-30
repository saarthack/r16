import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Child from './pages/Child'
import Details from './pages/Details'
import SpecificDetails from './pages/SpecificDetails'
import ErrorPage from './pages/ErrorPage'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Child />} />
        <Route path='/product/:id/details' element={<Details />} />
        <Route path='/product/:id/details/:child' element={<SpecificDetails />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App