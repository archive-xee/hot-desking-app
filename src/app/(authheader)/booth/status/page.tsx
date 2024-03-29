import Link from "next/link"

// 모든 현황을 다 받는 페이지 (쿼리스트링으로 구별하지 않음)
// 서버액션
export default function BoothStatusPage() {
  return (
    <>
      <p>
        QR코드에서 id를 gql에 담아서 요청을 보내면 응답은 Seat 클래스의 아래 필드만
        <br /> ticketId: string | null
      </p>
      <div className="border">query GetTicketId($lockerId: String!) [ locker(id: $lockerId) [ ticketId ] ]</div>
      <Link href="/user/ticket/use/locker">
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
