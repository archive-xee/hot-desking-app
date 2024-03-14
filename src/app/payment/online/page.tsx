"use client"

// import { gql } from "@apollo/client"
import Link from "next/link"
import Script from "next/script"
import { v4 as uuidv4 } from "uuid"
import CardWithDeleteForm from "@/components/molecules/CardWithDeleteForm"
import { executeAuthPaymentPopup } from "@/lib/nicepay"
import { card1 } from "@/models/card"
// import { useSearchParams } from "next/navigation"
// import { useState, useEffect } from "react"

// const GET_USER_CARD_LIST = gql`
//   query GetUserCardList($userId: string) {
//     User(userId: $userId) {
//       card
//     }
//   }
// `

export default function PaymentOnlinePage() {
  // 티켓 아이디 or 티켓name만 넘기면 사실은 됨
  // const searchParams = useSearchParams()
  // const ticketId = searchParams.get("ticketId")
  let hasConsent = false // eslint-disable-line
  // const [response, setResponse] = useState<PaymentResponse | undefined>(undefined)

  // 티켓정보를 받을 것
  // 정기권인지, 일회권인지에 따라 예약결제가 동의약관이 보일 것
  // 유저가 예약결제에 동의했는지도 db에 들어가야 함
  return (
    <>
      <div className="flex flex-col items-center">
        일회권 온라인 결제
        <div>
          <input
            id="payment-registered-card"
            type="checkbox"
            // onChange={({ target: { checked } }) => {}}
            className="size-4 rounded bg-white-100 text-black-700"
          />
          <label
            htmlFor="payment-registered-card"
            className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium"
          >
            등록된 카드로 결제
          </label>
        </div>
        <UserCardList />
        <div>
          <Link href="/card/register">
            <button
              type="button"
              className=" inline-block rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              카드등록
            </button>
          </Link>
        </div>
        <div>
          <input
            id="payment-registered-card"
            type="checkbox"
            // onChange={({ target: { checked } }) => {}}
            className="size-4 rounded bg-white-100 text-black-700"
          />
          <label
            htmlFor="payment-registered-card"
            className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium"
          >
            앱카드 결제
          </label>
        </div>
        <button
          type="button"
          onClick={() => {
            executeAuthPaymentPopup({
              orderId: uuidv4(),
              ticketName: "온라인 일회권",
              price: 1000,
              paymentMethod: "cardAndEasyPay",
            })
          }}
          className=" inline-block rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
        >
          결제하기
        </button>
      </div>
      portone 결제 요청 이후 /user/ticket/oneoff으로 리디렉션
      <div className="border"> query GetUserCardList($userId: string) [ User(userId: $userId) [ card ] ]</div>
      <Script src="https://pay.nicepay.co.kr/v1/js/" />
    </>
  )
}

const UserCardList = () => {
  return (
    <div className="flex flex-col">
      <CardWithDeleteForm card={card1}></CardWithDeleteForm>
      <CardWithDeleteForm card={card1}></CardWithDeleteForm>
      <CardWithDeleteForm card={card1}></CardWithDeleteForm>
    </div>
  )
}
