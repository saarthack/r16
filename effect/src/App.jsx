import React, { useRef } from 'react'

const App = () => {

  const boxRef = useRef(null)

  function randomColor(){
    const value1 = Math.floor(Math.random()*256)
    const value2 = Math.floor(Math.random()*256)
    const value3 = Math.floor(Math.random()*256)
    
    boxRef.current.style.backgroundColor = `rgb(${value1},${value2},${value3})`
  }

  return (
    <div>
      <div id="box" ref={boxRef}>

      </div>
      <button onClick={randomColor}>Click</button>
    </div>
  )
}

export default App