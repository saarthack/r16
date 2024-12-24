import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const oggyRef = useRef(null)
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)

  const btnClicked = ()=>{
    const x = Math.random()*90
    const y = Math.random()*90 
    
    setXValue(x)
    setYValue(y)
  }

  useEffect(function(){
    oggyRef.current.style.left = xValue+'%'
    oggyRef.current.style.top = yValue+'%'

    console.log('Use Effect Running');
  },[xValue,yValue])

  return (
    <div>
      <img ref={oggyRef} src="https://i.pinimg.com/474x/49/4d/2e/494d2e25fad7412b4f11beb7242ba804.jpg" alt="" />
      <button onClick={btnClicked}>Button</button>
      
    </div>
  )
}

export default App