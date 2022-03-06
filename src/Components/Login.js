import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.scss"
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import { loginApi } from '../api/auth';
import { getAccessToken } from '../helpers/getToken';

export const Login = () => {

    const [inputsLogin, setinputsLogin] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    

    const {email,password} = inputsLogin

    useEffect(()=>{

        if(getAccessToken()){
            navigate("/admin")
        }
    },[])

    const handleInputChange = (e)=>{

        setinputsLogin({
            ...inputsLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const result = await loginApi(inputsLogin)
        console.log(result)
        if(result.ok){
            alert(result.msg)
            localStorage.setItem("token",result.token)

            window.location.href= "/admin";
        }else{
            alert(result.error)
        }

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
