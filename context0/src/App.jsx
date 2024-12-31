import React, { useState } from 'react'
import Home from './components/Home'

const App = () => {

  const [brandName, setBrandName] = useState('Sheryians')

  const changeBrand = (a)=>{
    setBrandName(`Sarthak ${a}`)
  }
  
  return (
    <div>
      <Home changeBrand={changeBrand} brandName={brandName} />
    </div>
  )
}

export default App