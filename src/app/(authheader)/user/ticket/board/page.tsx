"use client"

// import { gql } from "@apollo/client"
import StretchedTicket from "@/components/molecules/Ticket/StretchedTicket"

// const GET_USER_COUPON_LIST = gql`
//   query GetUserTicketList($userId: string) {
//     UserTicket(userId: $userId) {
//       id
//       ticketType
//       expiresAt
//     }
//   }
// `

export default function UserSeatTicketPage() {
  return (
    <>
      <UserTicketBoardPageTitle />
      <StretchedTicket
        ticket={{
          id: "1",
          type: "time",
          bookable: "seat",
          price: 10000,
          period: 86400,
          issuedAt: 1706946429,
          expiresAt: 1707551229,
        }}
      ></StretchedTicket>
      <div className="border">
        <p>유저가 가진 모든 UserTicket을 보여줌</p>
        <p>일회권일때는 환불, 정기권일때는 환불+구독취소 버튼이 있음</p>
        <p>GetUserTicketList($userId: string) [ UserTicket(userId: $userId) ]</p>
      </div>
      <div className="border">
        <p>각 티켓을 눌렀을 때 상세정보 나옴</p>
        <p>GetUserTicket($userTicketId: string) [ UserTicket(id: $userTicketId) ]</p>
      </div>
      <div className="border">
        <p>환불 뮤테이션 (일회권, 정기권일 때)</p>
        <p>mutation RefundUserTicket($userId: string, $userTicketId: string) [ resultCode ] 끝나고 보여주려면?</p>
      </div>
      <div className="border">
        <p>구독취소 뮤테이션 (정기권일 때, 다음부터)</p>
        <p>mutation UnsubscribeUserTicket($userId: string, $userTicketId: string) [ resultCode ]</p>
      </div>
    </>
  )
}

const UserTicketBoardPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">내 이용권</h1>
}
