"use client"

import { TypedDocumentNode, gql, useSuspenseQuery } from "@apollo/client"
import Link from "next/link"
import BottomSheetButton from "@/components/molecules/Button/BottomSheetButton"
import BottomSheetModal from "@/components/molecules/Modal/BottomSheetModal"
import StretchedTicket from "@/components/molecules/Ticket/StretchedTicket"
import useIsReactNativeWebview from "@/hooks/useIsReactNativeWebview"

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

const OneoffTicketList = (props: { ticketType: string }) => {
  const isReactNativeWebview = useIsReactNativeWebview()
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
              {isReactNativeWebview ? (
                <BottomSheetButton
                  onClick={() => {
                    window.ReactNativeWebView.postMessage(JSON.stringify("1"))
                  }}
                >
                  구매하기
                </BottomSheetButton>
              ) : (
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
              )}
            </div>
          }
        ></BottomSheetModal>
      ))}
    </>
  )
}

export default OneoffTicketList
