import Link from "next/link"
export default function CardRegisterPage() {
  return (
    <>
      카드 등록 페이지
      <div className="border">gql</div>
      <Link href="/payment/online">
        <button>등록하기</button>
      </Link>
    </>
  )
}
