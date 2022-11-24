import React from 'react'

import { Card,Button,Text,Table } from 'antd';
import DataTable from '../../util/DataTable';
import SearchStatisticsBox from '../../util/SearchStatisticsBox';

export default function ParkingStatistics() {

  const columns = [
    {
      title: '월|구분',
      dataIndex: 'day',
      render: (_, record) => (
        <font style={{fontSize:'13px',fontWeight:'600'}}>{record.day}</font>  
      )
      // width: 150,
    },
    {
      title: 'SMS총발송',
      dataIndex: 'count',
      // width: 150,
    },
    {
      title: 'SMS성공',
      dataIndex: 'success',
    },
    {
      title: 'SMS실패',
      dataIndex: 'fail',
    },
    {
      title: 'SMS전송중',
      dataIndex: 'sending',
    },
  ];

  const data = [];
  for (let i = 1; i <= 31; i++) {
    data.push({
      key: i,
      day: `2022-11-${i}`,
      count: i,
      success: i,
      fail:i,
      sending:i

    });
  }


  
  return (
    <div>
      <SearchStatisticsBox  title={"주정차 문자 알림 서비스 발송 통계"}/>
      <Card title={
          <div className='table-header-text' style={{display:'flex'}}>
            전체 발송수 : {data.length}	(엑셀파일저장시 발송수가 많다면 excel에서 열지못할수 있습니다. 기간지정을 활용하세요.)
            <div style={{position: 'fixed',right: '24px',top: '246px'}}>
              <Button style={{fontSize:'12px'}}>엑셀다운로드</Button>
            </div>
          </div>
        } 
       bordered={false}>
        <DataTable columns={columns} data={data} pageSize={data.length} position={'none'} />
      </Card>
    </div>
  )
}
