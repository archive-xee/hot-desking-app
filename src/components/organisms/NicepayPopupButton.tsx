"use client"

import Script from "next/script"
import { v4 as uuidv4 } from "uuid"
import { executeAuthPaymentPopup } from "@/lib/nicepay"

// todo: props로 order정보 받기
export default function NicepayPopupButton() {
  return (
    <>
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
      <Script src="https://pay.nicepay.co.kr/v1/js/" />
    </>
  )
}
