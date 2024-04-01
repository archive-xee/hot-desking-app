"use client"

import { gql, TypedDocumentNode, useSuspenseQuery } from "@apollo/client"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useState } from "react"
import BottomSheetButton from "@/components/molecules/Button/BottomSheetButton"
import Button from "@/components/molecules/Button/Button"
import LoadingSpinner from "@/components/molecules/LoadingSpinner"
import BottomSheetModal from "@/components/molecules/Modal/BottomSheetModal"
import StretchedTicket from "@/components/molecules/Ticket/StretchedTicket"
import Title from "@/components/molecules/Title/Title"

// Data: List<OneoffTicket>
// interface Variables {
//   typeName: string
// }

// usedAt(UserTicket구별), portOneType구별(일회/정기권) 필요
const GET_ONEOFF_TICKET_LIST: TypedDocumentNode = gql`
  query GetOneoffTicketList($typeName: String!) {
    ticket(typeName: $typeName) {
      id
      expiresAt
      issuedAt
      ticketType {
        type
        bookableType {
          name
          type
        }
      }
    }
  }
`
// price, remaining Query에 없음
//  id: "1",
//  type: "oneday",
//  bookable: "locker",
//  price: 10000,
//  period: 86400,
//  issuedAt: 1706946429,
//  expiresAt: 1707551229,

export default function OneoffTicketPurchasePage() {
  const ticketTypeList = ["시간권", "당일권", "기간권", "할인권"]
  const ticketTypeColorList = ["hover:bg-yellow-300", "hover:bg-purple-100", "hover:bg-blue-300", "hover:bg-teal-100"]
  const ticketTypeIconList = ["period", "oneday", "time", "discount"]
  const [ticketType, setTicketType] = useState("시간권")

  return (
    <>
      <Title text="이용권 구매하기" />
      <div className="flex flex-row bg-white-300">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            onClick={() => {
              setTicketType(ticketTypeList[index])
            }}
            className={`flex grow flex-row justify-center p-2 ${ticketTypeColorList[index]} max-sm:flex-col max-sm:items-center`}
          >
            <Image
              src={`/icons/ticket/${ticketTypeIconList[index]}.png`}
              alt={ticketType}
              width="24"
              height="24"
            ></Image>
            <span className="ms-3 max-sm:ms-0">{ticketTypeList[index]}</span>
          </div>
        ))}
      </div>
      {/* 결제 페이지로 이동 */}
      <CouponApplicationButton />
      <Suspense fallback={<LoadingSpinner />}>
        <OneoffTicketList ticketType={ticketType} />
      </Suspense>
    </>
  )
}

const OneoffTicketList = (props: { ticketType: string }) => {
  const { ticketType } = props
  const { data } = useSuspenseQuery(GET_ONEOFF_TICKET_LIST, {
    variables: { typeName: ticketType },
  })
  const { ticket: oneoffTicketList } = data
  return (
    <>
      {oneoffTicketList.map((oneoffTicket: any, idx: number) => (
        <BottomSheetModal
          key={idx}
          trigger={<StretchedTicket key={idx} ticket={oneoffTicket}></StretchedTicket>}
          content={
            <div className="flex flex-row justify-center">
              <Link
                href={{
                  pathname: "/payment/online/oneoff",
                  query: {
                    ticketId: oneoffTicket.id,
                  },
                }}
              >
                <BottomSheetButton>구매하기</BottomSheetButton>
              </Link>
            </div>
          }
        ></BottomSheetModal>
      ))}
    </>
  )
}

const CouponApplicationButton = () => {
  return (
    <Link href="/user/coupon">
      <Button fullWidth={true}>쿠폰 적용</Button>
    </Link>
  )
}
