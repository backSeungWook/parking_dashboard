import React, { useState } from 'react'
import {  Modal,Form,Input ,Tag,Divider} from 'antd';

export default function UserSetting({modal,returnModal}) {

  const [isModalVisible, setIsModalVisible] = useState(modal);


  const handleOk = (values) =>{
    returnModal(false)
    setIsModalVisible(false)
    console.log(values);
  }

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  return (
    <>
      <Modal
        title="사용자 정보"
        style={{
          top: 40,
        }}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <div>
        <Form {...layout}  name="control-ref" onFinish={handleOk}>
          <Form.Item
            name="id"
            label="아이디"
            rules={[
              {
                required: true,
              },
            ]}
          >
            admin
          </Form.Item>
          <Form.Item
            name="name"
            label="이 름"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="password2"
            label="비밀번호 확인"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password/>
          </Form.Item>         
          <Form.Item
            name="phone"
            label="휴대폰 번호"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
          >
            <Input />
          </Form.Item>
          
          <Divider />

          <Form.Item
            name="authority"
            label="메뉴권한 관리"
          >
            <Tag color="#3b5999">관리자 사용자</Tag>
          </Form.Item>

          <Form.Item
            name="menu"
            label="메뉴권한 관리"
          >
            <Tag color="success">주정차알림서비스 목록</Tag>
            <Tag color="success">신청서비스 목록</Tag>
            <Tag color="success">CCTV연계모듈상태보기</Tag>
            <Tag color="success">관리자메뉴</Tag>
          </Form.Item>

          <Form.Item
            name="regDate"
            label="등록 날짜"
          >
            2022-10-11 23:59:50
          </Form.Item>

        </Form>
        </div>
      </Modal>
    </>
  )
}
