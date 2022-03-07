import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContextProvider'
import "./cart.scss"
export const Cart = () => {

  const {cart,removeProduct} = useContext(CartContext)
  return (
    <div className='cart'>
            <h1>Shopping Cart</h1>
            {

                cart.length > 0 ?

                <ul>

                   { cart.map(item => {
                        return <li className='cart_container'>
                            <div className='cart_container-top'>

                            <p className='cart_item-nombre'>{item.name}</p>
                            <p>$ {item.price}</p>

                            </div>
                            <p>descripcion: {item.description}</p>
                            <div className='cart_container-bottom'>
                                <p>Cantidad: 0</p>
                                <button onClick={()=>removeProduct(item._id)} >Remove</button>
                            </div>
                        </li>
                    })}
                    <div className='cart_comprar'>

                        <div className='cart_comprar_total'>

                            <p>Total</p>
                            <p>$ 1000</p>
                        </div>
                        
                        <Link to="/checkout">
                                <p className='cart_btn-comprar'>Generar orden</p>
                        </Link>
                        
                        <Link to="/admin/products" className='cart_continuar-comprando' >
                            <p style={{color: "black"}}>o Continuar Comprando</p> 
                        </Link>
                    </div>
                </ul>
                

                : <div className='cart_vacio'>
                     <p>No hay productos en el carrito</p>
                     <Link to="/admin/products">Volver al home</Link>

                </div>
                
            }

            
            
        </div>
  )
}
