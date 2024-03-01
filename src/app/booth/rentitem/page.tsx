import Link from "next/link"

export default function RentItemViewPage() {
  return (
    <>
      <p>
        QR코드에서 rentItem의 id를 gql에 담아서 요청을 보내면 응답은 RentItem 클래스의 아래 필드만
        <br /> ticketId: string | null
        <br /> itemName: string
      </p>
      <div className="border">gql</div>
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
