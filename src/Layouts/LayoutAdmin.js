import React, { useContext } from 'react'
import {Layout} from "antd"
import "./layoutadmin.scss"
import { Menu } from '../Components/Menu'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'


export const LayoutAdmin = () => {

  const navigate = useNavigate()

  const {user,isLoading}= useContext(AuthContext)
      
  if(!user && !isLoading){
              
      navigate("/login-register")
              
  }
    const {Header,Content,Footer} = Layout

  return (
    <Layout>
        <h1>Bievenido, {user?.name}.</h1>

        <Layout className='layoutadmin'>

            <Header className='layout-admin__header'>
              <Menu /> 
            </Header>
            <Content className='layout-admin__content'>
              <Outlet />
            </Content>
            <Footer className='layout-admin__footer'>Footer</Footer>
        </Layout>
    </Layout>
  )
}
