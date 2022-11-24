
import Parking from '../View/ParkingSms/Parking'
import ParkingStatistics from '../View/ParkingSms/ParkingStatistics'

// 주정차문자알림서비스 메뉴
const parking = [
  {
    key:1,
    value:'서비스 발송결과',
    children:Parking
  },
  {
    key:2,
    value:'서비스 발송결과 통계',
    children:ParkingStatistics
  },
  {
    key:3,
    value:'전체 장비 데이터'
  },
]

// 서비스신청 메뉴
const member = [
  {
    key:1,
    value:'홈페이지신청자',
    children:Parking
  },
  {
    key:2,
    value:'홈페이지신청자통계',
    children:Parking
  },
  {
    key:3,
    value:'블랙리스트',
    children:Parking
  },
  {
    key:4,
    value:'블랙리스트통계',
    children:Parking
  },
  {
    key:5,
    value:'신청자엑셀업로드',
    children:Parking
  },
  {
    key:6,
    value:'신청자메시지발송내역',
    children:Parking
  },
  {
    key:7,
    value:'신청자메시지발송통계',
    children:Parking
  },
]

// 연계모듈 메뉴
const module =[{key:1,value:'CCTV연계 모듈',children:Parking}]

// 관리자 메뉴
const adminMenu =[
  {
    key:1,
    value:'발송환경',
    children:Parking
  },
  {
    key:2,
    value:'메시지 문구',
    children:Parking
  },
  {
    key:3,
    value:'사용자',
    children:Parking
  },
  {
    key:4,
    value:'지역 모듈',
    children:Parking
  },
  {
    key:5,
    value:'사용자 기록',
    children:Parking
  },
]


const mainCategory = [
  {
    key:1,
    value:'주정차 문자알림서비스',
    category:parking,  
  },
  {
    key:2,
    value:'신청서비스',
    category:member,
    
  },
  {
    key:3,
    value:'연계 모듈',
    category:module,
  },
  {
    key:4,
    value:'관리자 메뉴',
    category:adminMenu
  }
]



export {
  mainCategory,

}