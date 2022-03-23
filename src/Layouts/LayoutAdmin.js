import React, { useContext, useEffect } from 'react'
import {Layout} from "antd"
import "./layoutadmin.scss"
import { Menu } from '../Components/Menu'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'


export const LayoutAdmin = () => {

  const navigate = useNavigate()

  const {user}= useContext(AuthContext)
  
      if(!user.user){
              
        navigate("/login-register")
                
      }
  
  
    const {Header,Content,Footer} = Layout
  console.log(user)
  return (
    <Layout>

        
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
