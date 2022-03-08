import React, { useContext, useEffect, useState } from 'react'
import { createCartApi } from '../api/cart'
import { getAccessToken } from '../helpers/getToken'
import { AuthContext } from './AuthContextProvider'

export const CartContext = React.createContext()
export const CartContextProvider = ({children}) => {

    // const {user} = useContext(AuthContext)

    // const token = getAccessToken()
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    
    const addToCart = (item,)=>{
      if(isInCart(item)){
          // setYaexiste(true)
          // setTimeout(() => {
          //     setYaexiste(false)
          // }, 3000);
          alert("el producto ya existe en el carrito")
      }else{

        setCart([...cart,item])
      }
      
  }

    useEffect(()=>{
      checkTotal()
    },[cart])

    const removeProduct = (id)=>{

      // console.log(id)
      // console.log(Cart.)
      setCart(cart.filter(item => item._id !== id))

  }

  const clearCart = ()=>{
      setCart([])
  }

  const checkTotal = ()=>{
      let checkTotal = 0;
      cart.map(item => {
          checkTotal = checkTotal + item.price
          setTotal(checkTotal)
      })
  }


  const isInCart = (item)=>{
      return cart.some(producto =>producto._id === item._id )
  }
  return (
    <CartContext.Provider value={{cart,setCart,addToCart,removeProduct,total,clearCart}}>
          {children}
    </CartContext.Provider>
  )
}


const createCart = async(user)=>{

  const result = await createCartApi(user._id)
  console.log(result)
}
