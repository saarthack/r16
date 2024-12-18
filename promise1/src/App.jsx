import React from 'react'
import axios from 'axios';

const App = () => {
  
  async function clickHandler(){
    
    const response = await axios.get('https://picsum.photos/v2/list')

    console.log(response);
  }

  return (
    <div>
      <button onClick={clickHandler}>Get Data</button>
    </div>
  )
}

export default App