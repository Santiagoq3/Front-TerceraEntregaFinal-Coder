import React from 'react'
import "./product.scss"
export const Product = ({product}) => {
  return (
    <div className='product'>
        <img src={product.img} />
        <div>
            <h2 className='product-name'>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <button className='product-btn'>
                Agregar al Carrito
            </button>
        </div>
    </div>
  )
}
