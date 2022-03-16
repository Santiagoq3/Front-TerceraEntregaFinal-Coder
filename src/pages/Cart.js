import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createOrderApi } from '../api/order'
import { AuthContext } from '../Context/AuthContextProvider'
import { CartContext } from '../Context/CartContextProvider'
import "./cart.scss"
export const Cart = () => {

  const {cart,removeProduct,total} = useContext(CartContext)
  const {user,setRefresh} = useContext(AuthContext)
  const navigate = useNavigate()

  const createOrder = async()=>{
    console.log({user})
   const result = await createOrderApi(user,cart);
   console.log(result);
    if(result){
      alert("orden generada correctamente")
      navigate(`/orden/${result.result._id}`)
    }
  }

  useEffect(()=>{

    setRefresh(true)
  },[])

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
                                <button onClick={()=>removeProduct(item._id)} >Remove</button>
                            </div>
                        </li>
                    })}
                    <div className='cart_comprar'>

                        <div className='cart_comprar_total'>

                            <p>Total</p>
                            <p>$ {total}</p>
                        </div>
                        
                       
                        <p onClick={async()=> {

                           const result= await createOrder();

                           console.log(result)
                        }} className='cart_btn-comprar'>Confirmar orden</p>
                        
                        
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
