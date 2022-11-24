import React, { useState } from 'react'
import './CSS/main.scss'
import UserSetting from '../setting/UserSetting'
import {mainCategory} from '../../Menu/Menu'
import MainContent from './MainContent'
import styled from "styled-components";
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { UserOutlined ,SettingOutlined,LoginOutlined } from '@ant-design/icons';
import { Layout, Menu ,Avatar} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

// STYLED 
const HeaderDiv = styled.div`
  display:flex;
  color:#fff;
`

export default function Main() {

  const [modal, setModal] = useState(false)
  const onModalReturn = (modal) =>{
    console.log('111',modal)
    setModal(modal)
  }

  const items2 = mainCategory.map((data, index) => {
    if(data.value !== '관리자 메뉴' ){
      return {
        key: data.key,
        // icon: React.createElement(icon),
        label: `${data.value}`,
        onClick:(e)=>{
          setContent(data.category.filter(subData => e.key === subData.value)[0].children)
        },
        children: data.category.map((subData, j) => {
          return {
            key: `${subData.value}`,
            label: `${subData.value}`,        
          }
        }),
      }
    }
  });

  const [content, setContent] = useState(MainContent)
  
  return (
    <Layout hasSider>
      <Sider
        width={220}
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
            {
              modal &&
              <UserSetting modal={modal} returnModal={onModalReturn} />
            }
            <div style={{width:'150px',cursor: 'pointer'}} onClick={()=> setModal(true)} >
              <Avatar style={{ backgroundColor: '#87d068' ,marginRight:'5px'}} icon={<UserOutlined />} />admin <SettingOutlined style={{marginLeft:'55px'}} />
            </div>    
            <div style={{paddingLeft:'20px',fontSize:'20px',fontWeight:'600'}}>
              OOO 주정차단속 알림시스템
            </div>    
            <div style={{
              position: 'absolute',
              right: '22px',
              fontWeight:'600',
              cursor: 'pointer'
            }}>
              로그아웃<LoginOutlined style={{fontSize:'15px'}}/>
            </div>
          </HeaderDiv>
          
        </Header>
        {/* 본문 */}
        <Content
          style={{
            // margin: '24px 16px 0',
            margin: '0px 0px 0px 220px',
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
            marginLeft:'220px'
          }}
        >
          copyright(c) 2009 IMCT.net all rights reserved.
        </Footer>
      </Layout>

    </Layout>
  )
}
