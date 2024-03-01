import Link from "next/link"
export default function PaymentOnlinePage() {
  return (
    <>
      일회권 온라인 결제
      {/* 정기권 온라인결제랑 구별해야함 */}
      <div className="border">gql</div>
      <Link href="/cardregister">
        <button>카드 등록하기</button>
      </Link>
      {/* portone 결제 요청 이후 리디렉션 */}
      <Link href="/user/ticket/oneoff">
        <button>동의하고 결제하기</button>
      </Link>
    </>
  )
}
