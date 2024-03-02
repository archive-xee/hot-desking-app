// import { gql } from "@apollo/client"
import Link from "next/link"

// const REGISTER_USER_COUPON = gql`
//   mutation RegisterUserCard($userId: string, $card: Card) {
//     registerUserCard(userId: $userId, card: $card) {
//       User {
//         Card
//       }
//     }
//   }
// `

export default function CardRegisterPage() {
  return (
    <>
      카드 등록 페이지
      <p>카드 객체를 임시로 만들었는데, 카드의 정보를 직접 db에 넣을 수는 없으니 billingKey를 집어넣을것 같긴함</p>
      <p></p>
      <div className="border">
        mutation RegisterUserCard($userId: string, $card: Card) [ registerUserCard($userId: string, $card: Card) [ User
        [ Card ] ] ]
      </div>
      <Link href="/payment/online">
        <button>등록하기</button>
      </Link>
    </>
  )
}
