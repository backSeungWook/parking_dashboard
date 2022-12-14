import React from 'react'
import dayjs from 'dayjs';
import { DatePicker,Form,Button,Radio,Select,Input,Divider} from 'antd';
const { Search } = Input;
const { RangePicker } = DatePicker;



export default function ParkingSearchBox() {

  const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState('start')

  const onFinish = (values) => {
    let startDate = values.searchDate[0]
    let endDate = values.searchDate[1]

    startDate = `${startDate.$y}-${startDate.$M < 9 ? '0'+(startDate.$M+1):startDate.$M+1 }-${startDate.$D > 9? startDate.$D: '0'+startDate.$D }`
    endDate = `${endDate.$y}-${endDate.$M < 9 ? '0'+(endDate.$M+1):endDate.$M+1 }-${endDate.$D > 9? endDate.$D: '0'+endDate.$D }`
    
    console.log('Success:',startDate,' ~ ',endDate);
    
  };
  // const onSearch = (value) => console.log(value);

  return (
    <>
    <Divider style={{background:'#fff',margin:'0px',paddingTop:'15px'}} orientation="left" >주정차 문자 알림 서비스 발송 조회</Divider>
    
    <Form
      className='parkingsms-search-form'
      form={form}
      initialValues={{
        searchGrade: 'START',
        searchOption:'car_num',
        searchDate:[dayjs(new Date().toLocaleDateString(), "YYYY년 MM월DD일").startOf("month"), dayjs(new Date().toLocaleDateString(), "YYYY년 MM월DD일")]
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
        <RangePicker format="YYYY년 MM월DD일" />
      </Form.Item>

      <Form.Item
        label="단속선택"
        name="searchGrade"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Radio.Group >
          <Radio.Button value="START">사전단속</Radio.Button>
          <Radio.Button value="FINAL">단속확정</Radio.Button>
        </Radio.Group>
      </Form.Item>


      <Form.Item
        label="상세검색"
        name="searchOption"
      >
        <Select style={{width:'130px'}} >
          <Select.Option value="car_num">차량번호</Select.Option>
          <Select.Option value="phone_no">휴대폰번호</Select.Option>
          <Select.Option value="eq_cd">단속장비</Select.Option>
          
        </Select>
      </Form.Item>

      <Form.Item
        label="검색"
        name="searchText"
      >
        <Input.Group style={{display:'flex'}}>
          <Input placeholder="Basic usage" />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Input.Group>
      </Form.Item>
      
     
      <p style={{position:'absolute',top:185,fontSize:'12px',color:'red',fontWeight:'400'}}>* 휴대폰 검색시에는 정확한 전체번호를 입력. 예)01012344568</p>
      
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
