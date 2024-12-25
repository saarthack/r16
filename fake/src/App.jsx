import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [storeData, setStoreData] = useState([])

  const [cartData, setCartData] = useState([])

  const btnClicked = (idx)=>{
    const copyCart = [...cartData,storeData[idx]]

    setCartData(copyCart)
  }

  const getData = async ()=>{
      const response = await axios.get('https://fakestoreapi.com/products')

      setStoreData(response.data)
  }

  useEffect(function(){
    getData()
  },[])
  

  return (
    <div className='p-5'>
      <div className='bg-gray-200 flex'>
      <div className='p-3 w-3/4 flex flex-wrap gap-5 justify-center'>
        {storeData.map(function(elem,idx){
          return <div key={idx} className='bg-white text-center p-5 rounded w-60'>
            <img className='h-40 mx-auto object-cover' src={elem.image} alt="" />
            <h1 className='mt-4 h-20 font-medium text-lg  overflow-hidden'>{elem.title}</h1>
            {/* <p className='text-sm m-2'>{elem.description}</p> */}
            <h2 className='text-3xl font-semibold mt-4'>${elem.price}</h2>
            <button onClick={()=>{
              btnClicked(idx)
            }} className='w-full bg-emerald-600 p-3 text-white rounded text-lg mt-5 font-semibold'>Add to Cart</button>
          </div>
        })}
      </div>
      <div className='w-1/4 bg-gray-600'>
        {cartData.map(function(elem){
          
          return <div className='w-full bg-gray-100 p-2 flex items-center gap-3'>
            <img className='h-20 w-20 object-cover' src={elem.image} alt="" />
            <div>
            <h2>{elem.title}</h2>
            <h3>{elem.price}</h3>
            </div>
          </div>
        })}
      </div>
      </div>
      
    </div>
  )
}

export default App