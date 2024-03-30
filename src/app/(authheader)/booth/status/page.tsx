import Link from "next/link"
import Button from "@/components/molecules/Button"

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
        <Button>티켓사용</Button>
      </Link>
    </>
  )
}
