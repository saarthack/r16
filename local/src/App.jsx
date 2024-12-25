import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const mainRef = useRef(null)

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const changeMode = () => {
    if (theme == 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }
  
  useEffect(function(){
    mainRef.current.setAttribute('id',theme)
  },[theme])


  return (
    <div ref={mainRef} className='h-screen w-full flex justify-center items-center'>
      <div className='w-full fixed top-0 left-0 flex justify-between px-10 py-5 items-center'>
        <h2 className='font-medium'>Sheryians</h2>
        <div className='flex gap-6 font-medium'>
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Services</h4>
          <h4>Login</h4>
          <h5 onClick={changeMode}>Mode</h5>
        </div>
      </div>
      <h1 className='text-5xl font-medium'>Sheryians</h1>
    </div>
  )
}

export default App