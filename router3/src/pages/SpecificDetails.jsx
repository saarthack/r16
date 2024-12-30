import React from 'react'
import { useParams } from 'react-router-dom'

const SpecificDetails = () => {

    const data = useParams()
    console.log(data);

    return (
        <div>
            <h1>{data.child} Detail of {data.id} Page</h1>
        </div>
    )
}

export default SpecificDetails