import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>

            <h1>Product Page</h1>
        </div>
    )
}

export default Product