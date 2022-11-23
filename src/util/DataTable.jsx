import React from 'react'
import { Table } from 'antd';
import './CSS/util.scss'

export default function DataTable({columns,data}) {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        
        pagination={{
          position:['bottomCenter' ],
          pageSize: 20,
          
        }}
        scroll={{
          y: 770,
        }}
      />

    </>
  )
}
