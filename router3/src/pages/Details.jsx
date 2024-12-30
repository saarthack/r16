import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const data = useParams()
    console.log(data);

    return (
        <div>
            <h1>{data.id}'s Details Page</h1>
        </div>
    )
}

export default Details