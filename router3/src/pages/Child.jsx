import React from 'react'
import { useParams } from 'react-router-dom'

const Child = () => {

    const data = useParams()
    return (
        <div>
            <h1>{data.id}'s Collctions</h1>
        </div>
    )
}

export default Child