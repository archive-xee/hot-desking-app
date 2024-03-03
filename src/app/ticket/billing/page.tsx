"use client"
// import { Modal } from "@/src/components/organisms/Modal"
// import { gql } from "@apollo/client"
// import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
// import Link from "next/link"
// import { useSearchParams } from "next/navigation"
import CardTicket from "@/src/components/molecules/Ticket/CardTicket"

// const GET_BILLING_TICKET_LIST = gql`
//   query GetBillingTicketList {
//     BillingTicket {
//       TicketType
//       remaining
//     }
//   }
// `

export default function BillingTicketPage() {
  return (
    <>
      <BillingTicketPageTitle />
      <CardTicket
        ticket={{
          id: "1",
          type: "time",
          bookable: "seat",
          price: 10000,
          period: 86400,
          issuedAt: 1706946429,
          expiresAt: 1707551229,
        }}
      ></CardTicket>
      <CardTicket
        ticket={{
          id: "1",
          type: "time",
          bookable: "seat",
          price: 10000,
          period: 86400,
          issuedAt: 1706946429,
          expiresAt: 1707551229,
        }}
      ></CardTicket>
      <p>
        <br /> Ticket[ id, ticketType, expiresAt ]의 리스트
        <br /> 구매하기 위해 티켓을 눌렀을 때 나오는 모달에는
        <br /> 선택된 티켓을 프로퍼티로 보내겠음
        <br /> 일회성결제, 예약결제, 정기결제 3가지 옵션 보여줄 거임
        <br /> 각 버튼을 누르면 각 결제타입에 맞는 Order객체를 서버에 보내겠음
      </p>
      <div className="border">query GetBillingTicketList [ BillingTicket [ TicketType remaining ] ]</div>
    </>
  )
}

const BillingTicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">정기권 구매하기</h1>
}
