"use client"

import { gql } from "@apollo/client"
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const GET_TICKET_ID = gql`
  query GetTicketId($meetingRoomId: String!) {
    MeetingRoom(id: $meetingRoomId) {
      ticketId
    }
  }
`
export default function MeetingRoomViewPage() {
  const searchParams = useSearchParams()
  // 궁창/booth/MeetingRoom/?id=1
  const meetingRoomId = searchParams.get("id")
  // const { data } = useQuery(GET_TICKET_ID, {
  //   variables: { meetingRoomId },
  // })

  // if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`
  return (
    <>
      <p>
        QR코드에서 id를 gql에 담아서 요청을 보내면 응답은 MeetingRoom 클래스의 아래 필드만
        <br /> ticketId: string | null
      </p>
      <div className="border">
        query GetTicketId($meetingRoomId: String!) [ MeetingRoom(id: $meetingRoomId) [ ticketId ] ]
      </div>
      <Link href="/user/ticket/meetingroom">
        <button
          type="submit"
          className="bg-white-100 hover:text-white-100 rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 "
        >
          티켓 사용
        </button>
      </Link>
    </>
  )
}
