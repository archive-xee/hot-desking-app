import { AUTH_PAYMENT_POPUP_RESULT_ENDPOINT, CLIENT_KEY_SERVER_AUTH } from "@/constant/nicepay"

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
    clientId: CLIENT_KEY_SERVER_AUTH,
    method: paymentMethod,
    orderId,
    amount: price,
    goodsName: ticketName,
    returnUrl: AUTH_PAYMENT_POPUP_RESULT_ENDPOINT, //API를 호출할 Endpoint
    fnError: (result: AuthPaymentResponse) => alert(result.errorMsg),
  })
}
