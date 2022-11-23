import React from 'react'
import { DatePicker,Form,Button } from 'antd';
const { RangePicker } = DatePicker;

export default function ParkingSearchBox() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 16 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="검색 기간"
        name="date"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <RangePicker  />
      </Form.Item>
      <Form.Item
        label="검색 기간"
        name="date"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <RangePicker  />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 2,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
