import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { logOutApi } from '../api/auth';
import "./menu.css"
export const Menu = () => {

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
        <i class="fas fa-shopping-cart"></i>
        <p className='menutop-right__logout' onClick={logOut}>Logout</p>
      </div>
    </div>
  )
}
