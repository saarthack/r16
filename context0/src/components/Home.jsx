import React from 'react'
import Header from './Header'

const Home = (props) => {
    
    return (
        <div className='h-screen w-full bg-blue-100'>
            <Header changeBrand={props.changeBrand} brand={props.brandName} />

            <button className='bg-black text-white text-xl px-5 py-2 rounded'>Change Brand</button>

        </div>
    )
}

export default Home