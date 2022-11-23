import React from 'react'
import DataTable from '../../util/DataTable';
import ParkingSearchBox from './ParkingSearchBox';


export default function Parking() {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <div>      
      <ParkingSearchBox />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
