"use client"

// import { gql } from "@apollo/client"
// import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import Link from "next/link"
// import { useSearchParams } from "next/navigation"

// const GET_TICKET_ID = gql`
//   query GetTicketId($rentItemId: String!) {
//     RentItem(id: $rentItemId) {
//       ticketId
//       itemName
//     }
//   }
// `
export default function RentItemViewPage() {
  // const searchParams = useSearchParams()
  // 궁창/booth/rentItem/?id=1
  // const rentItemId = searchParams.get("id")
  // const { data } = useQuery(GET_TICKET_ID, {
  //   variables: { rentItemId },
  // })

  // if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`
  return (
    <>
      <p>
        QR코드에서 rentItem의 id를 gql에 담아서 요청을 보내면 응답은 RentItem 클래스의 아래 필드만
        <br /> ticketId: string | null
        <br /> itemName: string
      </p>
      <div className="border">
        query GetTicketId($rentItemId: String!) [ RentItem(id: $rentItemId) [ ticketId itemName ] ]
      </div>
      <Link href="/user/ticket/rentitem">
        <button
          type="submit"
          className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
        >
          티켓 사용
        </button>
      </Link>
    </>
  )
}
