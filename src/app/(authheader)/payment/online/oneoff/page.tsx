import Link from "next/link"
import NicepayPopupButton from "@/components/organisms/NicepayPopupButton"
import UserCardList from "@/components/organisms/UserCardList"
import { order1 } from "@/models/order"
// import { useSearchParams } from "next/navigation"
// import { useState, useEffect } from "react"

// 여기도 Order정보 뿌려야 함

export default function PaymentOnlineOneoffPage() {
  // const searchParams = useSearchParams()
  // const ticketId = searchParams.get("ticketId")
  // 티켓id를 path에서 받을 것

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
        <NicepayPopupButton order={order1} />
      </div>
      portone 결제 요청 이후 /user/ticket/oneoff으로 리디렉션
    </>
  )
}
