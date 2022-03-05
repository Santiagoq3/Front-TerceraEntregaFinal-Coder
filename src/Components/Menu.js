import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./menu.css"
export const Menu = () => {
  return (
    <div className='menu'>
      <div className='menutop-left'>
        <NavLink to="/products">
          <p className=''>Productos</p>
        </NavLink>
      </div>
      <div className='menutop-right'>
        <i class="fas fa-shopping-cart"></i>
        <p>Logout</p>
      </div>
    </div>
  )
}
