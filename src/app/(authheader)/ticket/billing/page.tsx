"use client"
// import { Modal } from "@/components/organisms/Modal"
// import { gql } from "@apollo/client"
// import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
// import Link from "next/link"
// import { useSearchParams } from "next/navigation"
import Link from "next/link"
import BottomSheetButton from "@/components/molecules/Button/BottomSheetButton"
import CardTicket from "@/components/molecules/Ticket/CardTicket"
import Title from "@/components/molecules/Title"
import BottomSheetModal from "@/components/organisms/BottomSheetModal"

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
      <Title text="정기권 구매하기" />
      <BottomSheetModal
        trigger={
          <CardTicket
            ticket={{
              id: "1",
              billingType: "oneoff",
              type: "time",
              bookable: "seat",
              price: 10000,
              period: 86400,
              issuedAt: 1706946429,
              expiresAt: 1707551229,
            }}
          ></CardTicket>
        }
        content={
          <div className="flex flex-row justify-center">
            <Link
              href={{
                pathname: "/payment/online/billing",
                query: {
                  // 티켓타입, 티켓이름 정도
                  ticketId: "1",
                },
              }}
            >
              <BottomSheetButton>구매하기</BottomSheetButton>
            </Link>
          </div>
        }
      ></BottomSheetModal>
      <p>
        <br /> Ticket[ id, ticketType, expiresAt ]의 리스트
        <br /> 구매하기 위해 티켓을 눌렀을 때 나오는 모달에는
        <br /> 선택된 티켓을 프로퍼티로 보내겠음
        <br /> 일회성결제(이거는 여기서 안하는 것), 예약결제, 정기결제 3가지 옵션 보여줄 거임
        <br /> 각 버튼을 누르면 각 결제타입에 맞는 Order객체를 서버에 보내겠음
      </p>
      <div className="border">query GetBillingTicketList [ BillingTicket [ TicketType remaining ] ]</div>
    </>
  )
}
