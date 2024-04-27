import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    const { name, price, pid , imageUrl  , idx} = props
    return (
        <div  className='box' >
            
               
            <h4> Product Name : {name}</h4>
             <p>Price : {price} RS </p> 
            <img className='shortimg' src={imageUrl || 'placeholder.jpg'} alt={name} />
            <Link to={`/product/${pid}`}> View Product </Link>
             
        </div>
    )
}

export default memo(ProductCard)