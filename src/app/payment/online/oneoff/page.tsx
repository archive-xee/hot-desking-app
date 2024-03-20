"use client"

import Link from "next/link"
import { redirect } from "next/navigation"
import Script from "next/script"
import { useSession } from "next-auth/react"
import { v4 as uuidv4 } from "uuid"
import UserCardList from "@/components/organisms/UserCardList"
import { executeAuthPaymentPopup } from "@/lib/nicepay"
// import { useSearchParams } from "next/navigation"
// import { useState, useEffect } from "react"

export default function PaymentOnlinePage() {
  const { data: session, status: authStatus } = useSession()
  // const searchParams = useSearchParams()
  // const ticketId = searchParams.get("ticketId")
  let hasConsent = false // eslint-disable-line
  // const [response, setResponse] = useState<PaymentResponse | undefined>(undefined)

  // 티켓id를 path에서 받을 것
  if (authStatus === "loading") return <>로딩중</>
  else if (authStatus === "unauthenticated") {
    redirect("/auth/signin")
  } else
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
          <UserCardList userId={session?.userId!} />
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
        <Script src="https://pay.nicepay.co.kr/v1/js/" />
      </>
    )
}
