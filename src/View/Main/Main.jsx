import React, { useState } from 'react'
import './CSS/main.scss'
import Parking from '../ParkingSms/Parking'
import {mainCategory} from '../../Menu/Menu'
import styled from "styled-components";
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

// STYLED 
const HeaderDiv = styled.div`
  display:flex;
  color:#fff;
`



export default function Main() {

  const items2 = mainCategory.map((data, index) => {
  
    return {
      key: data.key,
      // icon: React.createElement(icon),
      label: `${data.value}`,
      onClick:(e)=>{
        setContent(data.category.filter(subData => e.key === subData.value)[0].children)
        // console.log(data.category.filter(subData => e.key === subData.value)[0].children)
  
        // data.category.map((subData, j) => {
        //   console.log(subData.children)
        // })
      },
      children: data.category.map((subData, j) => {
        
        return {
          key: `${subData.value}`,
          label: `${subData.value}`,        
        }
        
      }),
    };
  });

  const [content, setContent] = useState('')
  

  const menuEvent = (e)=>{
    // setContent(Parking)
    console.log('ss')
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: '64px',
          bottom: 0,
        }}
      >
        
        <Menu
          mode="inline"
          theme={'dark'}
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
            color:'#fff',
            fontWeight:'600'
          }}
          items={items2}
          onClick={(e)=>menuEvent(e)}
        />
      </Sider>

      <Layout
        className="site-layout"
        style={{
          // marginLeft: 200,
        }}
      >
        <Header
          className="site-layout-background"
          style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
        >
          <HeaderDiv>
            
            <div style={{width:'150px'}}>
              로그인
            </div>    
            <div style={{paddingLeft:'20px',fontSize:'20px',fontWeight:'600'}}>
              OOO 주정차단속 알림시스템
            </div>    
            <div style={{
              position: 'absolute',
              right: '10px'
            }}>
              로그아웃
            </div>
          </HeaderDiv>
          
        </Header>
        {/* 본문 */}
        <Content
          style={{
            // margin: '24px 16px 0',
            margin: '0px 0px 0px 200px',
            paddingLeft: '15px',
            paddingTop:'10px',
            overflow: 'initial',
          }}
        >
          
          <div
            className="site-layout-background"
            style={{
              // padding: 24, 
              // textAlign: 'center',
            }}
          >
            {content}
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>

    </Layout>
  )
}
