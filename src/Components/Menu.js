import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { logOutApi } from '../api/auth';
import { CartContext } from '../Context/CartContextProvider';
import "./menu.css"
export const Menu = () => {

  const {cart} = useContext(CartContext)
  
  const logOut = ()=>{
    logOutApi();
    window.location.reload()
  }
  return (
    <div className='menu'>
      <div className='menutop-left'>
        <NavLink to="/products">
          <p className=''>Productos</p>
        </NavLink>
      </div>
      <div className='menutop-right'>
        <NavLink to="/cart">

          <i className="fas fa-shopping-cart"> {cart.length}</i>

        </NavLink>
        <p className='menutop-right__logout' onClick={logOut}>Logout</p>
      </div>
    </div>
  )
}
