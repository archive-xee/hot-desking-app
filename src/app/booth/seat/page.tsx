"use client"

// import { gql } from "@apollo/client"
// import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import Link from "next/link"
// import { useSearchParams } from "next/navigation"

// const GET_TICKET_ID = gql`
//   query GetTicketId($seatType: String!, $seatNumber: String!) {
//     Seat(seatType: $seatNumber, seatNumber: $seatNumber) {
//       ticketId
//     }
//   }
// `
export default function SeatViewPage() {
  // const searchParams = useSearchParams()
  // 궁창/booth/seat/?seattype=prime&seatnumber=1
  // const seatType = searchParams.get("seattype")
  // const seatNumber = searchParams.get("seatnumber")
  // const { data } = useQuery(GET_TICKET_ID, {
  //   variables: { seatType, seatNumber },
  // })

  // if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`

  return (
    <>
      <p>
        QR코드에서 seatType, seatNumber를 gql에 담아서 요청을 보내면 응답은 Seat 클래스의 아래 필드만
        <br /> ticketId: string | null
      </p>
      <div className="border">
        query GetTicketId($seatType: String!, $seatNumber: String!) [ Seat(seatType: $seatNumber, seatNumber:
        $seatNumber) [ ticketId ] ]
      </div>
      <Link href="/user/ticket/seat">
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
