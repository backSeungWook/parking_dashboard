import React from 'react'
import dayjs from 'dayjs';
import { DatePicker,Form,Button,Radio,Select,Input,Divider} from 'antd';

const { RangePicker } = DatePicker;



export default function SearchStatisticsBox({item,title}) {

  const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState('start')

  const onFinish = (values) => {
    let startDate = values.searchDate[0]
    let endDate = values.searchDate[1]

    startDate = `${startDate.$y}-${startDate.$M < 9 ? '0'+(startDate.$M+1):startDate.$M+1 }-${startDate.$D > 9? startDate.$D: '0'+startDate.$D }`
    endDate = `${endDate.$y}-${endDate.$M < 9 ? '0'+(endDate.$M+1):endDate.$M+1 }-${dayjs(endDate,"YYYY년 MM월DD일").daysInMonth() }`
    
    console.log('Success:',startDate,' ~ ',endDate);
    
  };
  // const onSearch = (value) => console.log(value);

  return (
    <>
    <Divider style={{background:'#fff',margin:'0px',paddingTop:'15px'}} orientation="left" >{title}</Divider>
    
    <Form
      className='parkingsms-search-form'
      form={form}
      initialValues={{
        searchTerm: 'daily',
        searchDate:[dayjs(new Date().toLocaleDateString(), "YYYY년 MM월DD일").startOf("month"), dayjs(new Date().toLocaleDateString(), "YYYY년 MM월DD일")],
        division:'all'
        
      }}
      // onValuesChange={onFormLayoutChange}
      name="basic"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24}}
      layout="vertical"
      style={{display:'flex'}}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      // autoComplete="off"
    >
      <Form.Item
        label="검색 기간"
        name="searchDate"
        
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <RangePicker format="YYYY년 MM월" picker="month" />
      </Form.Item>

      <Form.Item
        label="통계구분"
        name="searchTerm"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Radio.Group >
          <Radio.Button value="daily">일별</Radio.Button>
          <Radio.Button value="monthly">월별</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="구분"
        name="division"
      >
        <Radio.Group >
          <Radio.Button value="all">전 체</Radio.Button>
          <Radio.Button value="center">고정형</Radio.Button>
          <Radio.Button value="mov">이동형</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="검색"
        name="searchText"
      >
        <Input.Group style={{display:'flex'}}>
          {/* <Input placeholder="Basic usage" /> */}
          <Button type="primary" htmlType="submit">
            검색결과조회
          </Button>
          
        </Input.Group>
      </Form.Item>
      
      {/* <Form.Item
        wrapperCol={{
          offset: 2,
          span: 2,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
    
    </>
  )
}
