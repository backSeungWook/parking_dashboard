import React from 'react'
import styled from 'styled-components'
import './CSS/maincontent.scss'


const MainContentHeader = styled.div`
  display: flex;
  gap: 10px;
`

const MainContentBody = styled.div`

`

export default function MainContent() {
  return (
    <>
    <MainContentHeader>
      <div className="day-subscriber" >
        하루 가입자
      </div>
      <div className="week-subscriber">
        일주일 가입자
      </div>
      <div className="server-message">
        서비스 문자 발송 통계
      </div>
    </MainContentHeader>

    <MainContentBody>
      
    </MainContentBody>

    </>
  )
}
