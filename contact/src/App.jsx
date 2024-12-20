import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    const newArr = [...allContacts,{name,favorite}]
    setAllContacts(newArr)
    setName('')
    setFavorite(false)
  }

  const [name, setName] = useState('')
  
  const [favorite, setFavorite] = useState(false)

  const [allContacts, setAllContacts] = useState([])

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} type="text" placeholder='Enter name' />
        <br />
        
        <input checked={favorite} onChange={(e)=>{
          setFavorite(e.target.checked)
        }} type="checkbox" />

        <br />
        <button>Submit</button>
      </form>

      <div>
        {allContacts.map(function(elem){

          return <h1>{elem.name} {elem.favorite?'Fav':''}</h1>
        })}
      </div>
    </div>
  )
}

export default App
