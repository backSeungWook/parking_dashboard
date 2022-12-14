import React from 'react'
import DataTable from '../../util/DataTable';
import ParkingSearchBox from './ParkingSearchBox';
import { Card,Button } from 'antd';



export default function Parking() {

  const columns = [
    {
      title: '번호',
      dataIndex: 'num',
      width: 70,
    },
    {
      title: '차량번호',
      dataIndex: 'carNum',
      width: 110,
      
    },
    {
      title: '휴대폰',
      dataIndex: 'phone',
      width: 120,
    },
    {
      title: '초기단속',
      dataIndex: 'startDate',
      width: 145,
    },
    {
      title: '단속구분',
      dataIndex: 'grade',
      width: 95,
    },
    {
      title: '발송구분',
      dataIndex: 'sms',
      width: 85,
    },
    {
      title: '단속장비',
      dataIndex: 'eqcd',
      width: 150,
    },
    {
      title: '단속위치',
      dataIndex: 'gps',
    },
    {
      title: '발송결과',
      dataIndex: 'rslt',
    },
  ];

  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      key: i,
      num: `${i}`,
      carNum: `전북11로00${i}`,
      phone: `010-1234-3333`,
      startDate: `2022-11-11 20:20:59`,
      grade: `사전단속`,
      sms: `SMS`,
      eqcd: `BuCheon-Moving106`,
      gps: `테스트지역 테스트지역:07001`,
      rslt: `전송성공`,
    });
  }

  return (
    <div>      
      <ParkingSearchBox />
      <Card title={
          
          <div className='table-header-text' style={{display:'flex'}}>
            전체 발송수 : {data.length}	(엑셀파일저장시 발송수가 많다면 excel에서 열지못할수 있습니다. 기간지정을 활용하세요.)
            <div style={{position: 'fixed',right: '24px',top: '246px'}}>
              <Button style={{fontSize:'12px'}}>엑셀다운로드</Button>
            </div>
          </div>
        } 
       bordered={false}>
        <DataTable columns={columns} data={data} pageSize={25} position={'bottomCenter'}/>
      </Card>
      
    </div>
  )
}
