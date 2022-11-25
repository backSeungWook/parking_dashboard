import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

export default function LineChart() {

  // const [data, setData] = useState([]);

  useEffect(() => {
 //   asyncFetch();
  }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };

  const data = [
    {
      "year": "2022-11-01",
      "value": 10,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-01",
      "value": 54,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-01",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-01",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-01",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-02",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-02",
      "value": 54,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-02",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-02",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-02",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-03",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-03",
      "value": 57,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-03",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-03",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-03",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-04",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-04",
      "value": 59,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-04",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-04",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-04",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-05",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-05",
      "value": 69,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-05",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-05",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-05",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-06",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-06",
      "value": 71,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-06",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-06",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-06",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-07",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-07",
      "value": 76,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-07",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-07",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-07",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-08",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-08",
      "value": 77,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-08",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-08",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-08",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-09",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-09",
      "value": 78,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-09",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-09",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-09",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-10",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-10",
      "value": 83,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-10",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-10",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-10",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-11",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-11",
      "value": 91,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-11",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-11",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "2022-11-11",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-12",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-12",
      "value": 95,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-12",
      "value": 1000,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-12",
      "value": 581,
      "category": "Cement production"
    },
    {
      "year": "2022-11-12",
      "value": 1010,
      "category": "Gas flarinl"
    },
    {
      "year": "2022-11-13",
      "value": 1500,
      "category": "Liquid fuel"
    },
    {
      "year": "2022-11-13",
      "value": 96,
      "category": "Solid fuel"
    },
    {
      "year": "2022-11-13",
      "value": 151,
      "category": "Gas fuel"
    },
    {
      "year": "2022-11-13",
      "value": 1000,
      "category": "Cement production"
    },
    {
      "year": "2022-11-13",
      "value": 100,
      "category": "Gas flarinl"
    },
    
  ]

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  return(
    <Line {...config} />
  )
}