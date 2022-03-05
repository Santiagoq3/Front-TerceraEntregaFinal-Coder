import React, { useState } from 'react'
import "./login.scss"
import {UserOutlined,LockOutlined} from '@ant-design/icons';

export const Login = () => {

    const [inputsLogin, setinputsLogin] = useState({
        email: "",
        password: ""
    })

    const {email,password} = inputsLogin

    const handleInputChange = (e)=>{

        setinputsLogin({
            ...inputsLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        
        console.log(inputsLogin)
    }
  return (
    <form onSubmitCapture={handleSubmit} className="login">
        <label>Nombre:</label>
        <input className='login_input' type="email" placeholder='Ingrese su email' value={email} name="email" onChange={handleInputChange} />
        <label>Contraseña:</label>
        <input className='login_input' type="password" placeholder='Ingrese su contraseña' value={password} name="password" onChange={handleInputChange} />
        <button className='login-btn' type='submit' >
            Entrar
        </button>
    </form>
  )
}
