import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderApi } from '../api/order';
import { CartContext } from '../Context/CartContextProvider';
import "./orden.scss"
export const Orden = () => {

  const params =   useParams();
  const {clearCart} = useContext(CartContext)
  const navigate = useNavigate()

  const {id} = params
  const [orden, setorden] = useState(null)
  useEffect(()=>{
    getOrderApi(id)
    .then((data)=> {
        setorden(data.orders[0])
    })
    .catch((err)=> console.log(err))
  },[])

  const handleBack = ()=>{

    clearCart()
    navigate("/admin/products")
  }

  console.log(orden)

  return (
    <div className='orden'>

        {
            orden ? 
            <>

               <h1>Detalle del orden</h1>
                <p>Orden numero : {orden.ordernum} - {orden.timestamp}</p>
                <p>Muchas gracias por la compra {orden.user.name}!</p>
                <div className='orden-productos'>
                    {
                        orden.products.map((product,idx) =>{
                            return <div key={idx} className='orden-product' >

                                <img className='orden-product-img' src={product.img} />
                                <div className='orden-product-details'>
                                    <h2>{product.name}</h2>
                                    <p>{product.price}$</p>
                                    <p>{product.description}</p>

                                </div>
                            </div>
                        })
                    }
                </div>
                <p className='orden-thx'>Muchas Gracias por su compra! Nos comunicaremos con usted Pronto</p>
                <span className='btn-back' onClick={()=> handleBack()}>Volver al home</span>

            </>
            

            :

            <p>Generando orden...</p>
        }
    </div>
  )
}
