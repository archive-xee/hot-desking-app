// import { gql } from "@apollo/client"
import Link from "next/link"

// const GET_USER_CARD_LIST = gql`
//   query GetUserCardList($userId: string) {
//     User(userId: $userId) {
//       card
//     }
//   }
// `

export default function PaymentOnlinePage() {
  return (
    <>
      일회권 온라인 결제
      <p>유저 카드목록</p>
      {/* 정기권 온라인결제랑 구별해야함 */}
      <div className="border"> query GetUserCardList($userId: string) [ User(userId: $userId) [ card ] ]</div>
      <Link href="/card/register">
        <button>카드 등록하기</button>
      </Link>
      <Link href="/user/ticket/oneoff">
        <button>동의하고 결제하기(portone 결제 요청 이후 리디렉션)</button>
      </Link>
    </>
  )
}
