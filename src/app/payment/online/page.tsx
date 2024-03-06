"use client"

// import { gql } from "@apollo/client"
import Link from "next/link"
import Script from "next/script"
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
        <UserCardList />
        <div className="flex items-center">
          <input
            id="billing-consent-checkbox"
            type="checkbox"
            onChange={({ target: { checked } }) => {
              hasConsent = !checked
            }}
            className="bg-white-100 text-black-700 size-4 rounded"
          />
          <label
            htmlFor="billing-consent-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            예약 결제
          </label>
        </div>
        <div>
          <Link href="/card/register">
            <button
              type="button"
              className=" bg-white-100 hover:text-white-100 inline-block rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 "
            >
              카드등록
            </button>
          </Link>
          <button
            type="button"
            onClick={() => {}}
            className=" bg-white-100 hover:text-white-100 inline-block rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 "
          >
            결제하기
          </button>
        </div>
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
      <div>카드일번</div>
      <div>카드일번</div>
      <div>카드일번</div>
      {/*
  필요한 것

  카드번호
  유효기간(년/월) 
  생년월일(6자리) 
  비밀번호 앞 2자리 
 */}
    </div>
  )
}
