"use client"

import Script from "next/script"
import { executeAuthPaymentPopup, sendOrder } from "@/lib/nicepay"
import { Order } from "@/models/order"

// todo: props로 order정보 받기
export default function NicepayPopupButton(props: { order: Order }) {
  const { order } = props
  return (
    <>
      <button
        type="button"
        onClick={async () => {
          console.log("order", order)
          const orderId = await sendOrder(order)
          await executeAuthPaymentPopup({
            orderId,
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
