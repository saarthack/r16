import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [images, setImages] = useState([])
  
  const clickHandler = async ()=>{
    
    const response  = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setImages(response.data)
  }

  return (
    <div className='p-5'>
      <button className='text-xl font-medium bg-emerald-600 px-6 py-3 rounded text-white' onClick={clickHandler}>Get Data</button>
      <div className='p-5'>
      {images.map(function(elem){
        
        return <div className='bg-gray-100 flex justify-between items-center p-4'>
          <img className='h-40 w-60 rounded-lg object-cover' src={elem.download_url} alt="" />
          <h1 className='text-2xl font-medium'>{elem.author}</h1>
        </div>
      })}
      </div>
    </div>
  )
}

export default App