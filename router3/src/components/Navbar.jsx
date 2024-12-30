import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-7 py-4 bg-pink-600 text-white'>
        <h2>Sheryians</h2>
        <div className='flex gap-7'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar