import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const newUser = [...allUsers,{name,details,imageUrl}]
    
    setAllUsers(newUser)

    setName('')
    setDetails('')
    setImageUrl('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-4'>

        <input 
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        placeholder='Enter your name'
        className='border-2 border-black px-4 py-2 rounded text-xl' 
        type="text" 
        />

        <input 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        className='border-2 border-black px-4 py-2 rounded text-xl ml-2' 
        placeholder='Enter Details' 
        type="text" />

        <input 
        value={imageUrl}
        onChange={(e)=>{
          setImageUrl(e.target.value)
        }}
        placeholder='Enter Image URL' 
        className='border-2 w-full border-black px-4 py-2 rounded text-xl my-2' 
        type="text" />

        <button className='text-xl bg-black text-white px-4 py-2 rounded mt-2'>Submit</button>
      </form>

      <div className='mt-2 p-4 bg-emerald-50'>
          {allUsers.map(function(elem){

            return <div className='inline-block m-3 bg-white p-4 text-center rounded'>
                <img className='h-20 w-20 rounded-full object-cover mb-4' src={elem.imageUrl} alt="" />
                <h1 className='text-xl mb-2 font-semibold'>{elem.name}</h1>
                <p className='text-sm font-medium'>{elem.details}</p>
            </div>
          })}
      </div>
    </div>
  )
}

export default App