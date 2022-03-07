import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContextProvider'
import "./product.scss"
export const Product = ({product}) => {

  const {serCart,addToCart} = useContext(CartContext)

  return (

    <div className='product'>
        <img src={product.img} />
        <div>
            <h2 className='product-name'>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <button onClick={()=> addToCart(product)} className='product-btn'>
                Agregar al Carrito
            </button>
        </div>
    </div>
  )
}
