import React, { useState } from 'react'
import "./register.scss"
import { Form, Input, Button, Checkbox,Alert } from 'antd';
import {MailOutlined,LockOutlined} from '@ant-design/icons';
import { registerApi } from '../api/auth';
import { toast } from 'react-toastify';


export const Register = () => {

    const [inputsRegister, setinputsRegister] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [alertMessage, setalertMessage] = useState(false)

    const handleInputChange = (e)=>{

        setinputsRegister({
            ...inputsRegister,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const result = await registerApi(inputsRegister)
        if(result.ok){
            alert(result.msg)
        }else{
            alert(result.msg.msg)
        }
        setinputsRegister({
            name: "",
            email: "",
            password: ""
        })
    }

    const  {name,email,password} = inputsRegister
  return (
    <div>
        
        <form onSubmitCapture={handleSubmit} className="register">
            <label>Nombre:</label>
            <input className='register-input' type="text" name='name' value={name} placeholder="Ingrese su nombre" onChange={handleInputChange} />
            <label>email:</label>
            <input className='register-input' type="email" name='email' value={email} placeholder="Ingrese su email" onChange={handleInputChange}  />
            <label>Contraseña:</label>
            <input className='register-input' type="password" name='password' value={password} placeholder="Ingrese su contraseña" onChange={handleInputChange} />
            <button className='register-btn' type='submit'>
                Registrarse
            </button>
        </form>
    </div>
  )
}
