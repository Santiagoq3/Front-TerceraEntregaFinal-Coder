import React from 'react'

import "./loginandregister.scss"
import { Login } from '../Components/Login';
import { Register } from '../Components/Register';


export const LoginAndRegister = () => {
  return (
    <div className='loginandregister'>
      <div className='loginandregister__container'>
          <div className='loginandregister__login'>
            <Login />
          </div>
          <div className='loginandregister__register'>
            <Register />
          </div>
      </div>
    </div>
  )
}
