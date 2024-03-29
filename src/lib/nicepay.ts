import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { AUTH_PAYMENT_POPUP_RESULT_ENDPOINT, NICEPAY_SERVER_AUTH_CLIENT_KEY } from "@/constant/nicepay"
import { Order } from "@/models/order"

// 이후에 order 객체로
export type AuthPaymentProps = {
  orderId: string
  ticketName: string
  price: number
  paymentMethod: "cardAndEasyPay" | "samsungpayCard"
}

export type AuthPaymentResponse = {
  errorMsg: string
}

// 인증결제(일회성결제)
export const executeAuthPaymentPopup = async (props: AuthPaymentProps): Promise<void> => {
  const { orderId, ticketName, price, paymentMethod } = props
  const { AUTHNICE } = window
  AUTHNICE.requestPay({
    clientId: NICEPAY_SERVER_AUTH_CLIENT_KEY,
    method: paymentMethod,
    orderId,
    amount: price,
    goodsName: ticketName,
    returnUrl: AUTH_PAYMENT_POPUP_RESULT_ENDPOINT, //API를 호출할 Endpoint
    fnError: (result: AuthPaymentResponse) => alert(result.errorMsg),
  })
}

export const sendOrder = async (order: Order) => {
  const SEND_ORDER = gql`
    mutation SendOrder($userId: String!, $cardId: String!, $ticketId: String!, $couponId: String!) {
      addOrder(input: { userId: $userId, cardId: $cardId, couponId: $couponId, ticketId: $ticketId })
    }
  `

  const data: { addOrder: { resultCode: string } } = await request(APOLLO_ROUTER_URL, SEND_ORDER, {
    ...order,
  })

  // orderId, price, ticketName 받아와야 함
  const resultCode = data.addOrder.resultCode
  return resultCode
}
