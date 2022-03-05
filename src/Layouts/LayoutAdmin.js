import React from 'react'
import {Layout} from "antd"
import "./layoutadmin.scss"
import { Menu } from '../Components/Menu'


export const LayoutAdmin = () => {

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
