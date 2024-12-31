import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'

const Header = (props) => {
  return (
    <div className='bg-pink-500 text-white w-full'>
        <Slider />
        <Navbar changeBrand={props.changeBrand}  brand={props.brand} />
    </div>
  )
}

export default Header