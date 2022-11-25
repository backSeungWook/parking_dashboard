import React from 'react'
import styled from 'styled-components'
import LineChart from './Component/LineChart'
import PieChart from './Component/PieChart'
import './CSS/maincontent.scss'


const MainContentHeader = styled.div`
  display: flex;
  gap: 15px;
  padding:0px 50px;
  height: 335px;
  padding-top: 20px;
  background:#fff;
`

const MainContentBody = styled.div`
  margin:15px 0px;
  padding:10px 50px;
  background:#fff;
`

export default function MainContent() {

  const data1 = [
    {
      type: '관리자 입력',
      value: 2,
    },
    {
      type: '사용자 가입',
      value: 25,
    },
    
  ];

  const data2 = [
    {
      type: '1일',
      value: 7,
    },
    {
      type: '2일',
      value: 25,
    },
    {
      type: '3일',
      value: 8,
    },
    {
      type: '4일',
      value: 1,
    },
    {
      type: '5일',
      value: 18,
    },
    {
      type: '6일',
      value: 0,
    },
    {
      type: '7일',
      value: 0,
    },
    
  ];

  const data3 = [
    {
      type: '성공',
      value: 270,
    },
    {
      type: '실패',
      value: 25,
    },
    {
      type: '전송중',
      value: 18,
    },
    
  ];



  return (
    <>
    <MainContentHeader>
      <div className="day-subscriber" >
        하루 가입자
        <PieChart data={data1} />
      </div>
      <div className="week-subscriber">
        일주일 가입자
        <PieChart data={data2} />
      </div>
      <div className="server-message">
        서비스 문자 발송 통계
        <PieChart data={data3}/>
      </div>
    </MainContentHeader>

    <MainContentBody>
      <div>
        <h3>전체 장비 단속 데이터</h3>
      </div>
      <LineChart/>
    </MainContentBody>

    </>
  )
}
