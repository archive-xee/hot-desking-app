"use client"

// import { gql } from "@apollo/client"
import Link from "next/link"
import Button from "@/components/molecules/Button"
import StretchedTicket from "@/components/molecules/Ticket/StretchedTicket"
import BottomSheetModal from "@/components/organisms/BottomSheetModal"

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
      <UserTicketPageTitle />
      <BottomSheetModal
        trigger={
          <StretchedTicket
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
          ></StretchedTicket>
        }
        content={
          <div className="flex flex-row justify-center">
            <button className="rounded-full bg-white-100 px-10 py-2 font-bold text-black-700">사용하기</button>
          </div>
        }
      ></BottomSheetModal>

      <div className="flex flex-row gap-2">
        <Link href="/ticket/oneoff">
          <Button>일회권 구매</Button>
        </Link>
        <Link href="/ticket/billing">
          <Button color="teal">정기권 구매</Button>
        </Link>
      </div>
      <div className="border">
        <p>url route의 맞는 bookableType에 따라 UserTicket [ id ticketType expiresAt, userId ]의 리스트를 요청</p>
        <p>query GetUserTicketList($userId: string) [ UserTicket(userId: $userId) ]</p>
      </div>
      <div className="border">
        <p>사용하기 위해 티켓을 눌렀을 때 나오는 모달에는 선택된 티켓을 프로퍼티로 보냄</p>
        <p>
          mutation ActivateUserTicket($userId: string, $userTicketId: string) [ UserTicket(id: $userTicketId, activated:
          true) ]
        </p>
      </div>
    </>
  )
}

const UserTicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">이용권 사용하기</h1>
}
