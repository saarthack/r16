import React from 'react'

const Navbar = (props) => {
  return (
    <div className='flex px-8 py-4 font-medium text-xl justify-between items-center'>
        <h2>{props.brand}</h2>
        <div className='gap-7 flex'>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <h4>Accounts</h4>
            <button onClick={()=>{
                props.changeBrand(10)
            }} className='bg-black text-base px-3 py-1 rounded'>Change Brand</button>
        </div>
    </div>
  )
}

export default Navbar