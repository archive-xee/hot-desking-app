"use client"

import Script from "next/script"
import Button from "@/components/molecules/Button/Button"
import { executeAuthPaymentPopup, sendOrder } from "@/lib/nicepay"
import { Order } from "@/models/order"
// todo: props로 order정보 받기
export default function NicepayPopupButton(props: { order: Order }) {
  const { order } = props
  return (
    <>
      <Button
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
      >
        앱카드결제
      </Button>
      <Script src="https://pay.nicepay.co.kr/v1/js/" />
    </>
  )
}
