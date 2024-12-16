import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')

  const [allUsers, setAllUsers] = useState([])


  const submitHandler = (e)=>{
    e.preventDefault()

    const newArr = [...allUsers,username]

    setAllUsers(newArr)

    setUsername('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-5'>

          <input 
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          className='border-2 border-zinc-800 px-4 rounded py-2 text-xl' 
          type="text" 
          placeholder='Enter your name' 
          />
          <button className='bg-black rounded ml-4 text-white px-4 py-2 text-xl font-medium'>Submit</button>
      </form>

      <div className='bg-blue-200 p-5 '>
          {allUsers.map(function(elem){
            
            return <h1>{elem}</h1>
          })}
      </div>
    </div>
  )
}

export default App
