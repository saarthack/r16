import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [imageURL, setImageURL] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const newArr = [...allUsers, { name, position, imageURL }]

    setAllUsers(newArr)

    setName('')
    setPosition('')
    setImageURL('')
  }

  const deleteHandler = (i)=>{

    const copyUsers = [...allUsers]

    copyUsers.splice(i,1)

    setAllUsers(copyUsers)
    
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='p-5'>

        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          className='rounded font-medium text-xl px-4 py-2 w-[49%] border-2 border-black' type="text" placeholder='Enter Name' />

        <input
          value={position}
          onChange={(e) => {
            setPosition(e.target.value)
          }}
          className='rounded ml-2 font-medium text-xl px-4 py-2 w-[49%] border-2 border-black' type="text" placeholder='Enter Position' />

        <input
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value)
          }}
          className='rounded font-medium text-xl px-4 py-2 w-full mt-2 border-2 border-black' type="text" placeholder='Enter Image URL' />
        <button className='bg-black text-white font-medium px-4 py-2 mt-2 rounded text-xl'>Submit</button>
      </form>

      <div className='p-5 bg-gray-200'>
        {allUsers.map(function (elem,i) {

          return <div key={i} className='inline-block m-2 p-3 w-60 rounded-md text-center bg-white'>
            <img className='mx-auto h-40 w-40 rounded-full object-cover object-center mb-4' src={elem.imageURL} alt="" />
            <h1 className='text-3xl font-semibold'>{elem.name}</h1>
            <h3 className='mt-2 text-gray-600 font-medium text-xl'>{elem.position}</h3>
            <button onClick={()=>{
              deleteHandler(i)
            }} className='bg-red-600 text-sm mt-4 rounded text-white px-3 py-1'>Delete</button>
          </div>
        })}
      </div>

    </div>
  )
}

export default App
