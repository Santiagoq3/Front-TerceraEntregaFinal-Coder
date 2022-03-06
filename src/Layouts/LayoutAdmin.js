import React, { useContext } from 'react'
import {Layout} from "antd"
import "./layoutadmin.scss"
import { Menu } from '../Components/Menu'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

export const LayoutAdmin = () => {

  const navigate = useNavigate()

  const {user,isLoading}= useContext(AuthContext)
  // const user = null

  console.log(user,isLoading);
      
  if(!user && !isLoading){
              
      navigate("/login-register")
              
  }

    const {Header,Content,Footer} = Layout

  return (
    <Layout>
        <Layout className='layoutadmin'>

            <Header className='layoutadmin__header'>
              <Menu /> 
            </Header>
            <Content className='layoutadmin__content'>Content</Content>
            <Footer className='layoutadmin__footer'>Footer</Footer>
        </Layout>
    </Layout>
  )
}
