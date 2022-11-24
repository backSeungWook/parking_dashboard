import React from 'react'
import { Table } from 'antd';
import './CSS/util.scss'

export default function DataTable({columns,data,pageSize,position}) {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        
        pagination={{
          position:[position ],
          pageSize,
          
        }}
        scroll={{
          y: position === 'none'? 'calc(100vh - 400px)': 'calc(100vh - 464px)',
        }}
      />

    </>
  )
}
