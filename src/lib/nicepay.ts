import { CLIENT_KEY_SERVER_AUTH, AUTH_PAYMENT_POPUP_RESULT_ENDPOINT } from "@/constant/nicepay"

// 이후에 order 객체로
export type AuthPaymentProps = {
  orderId: string
  ticketName: string
  price: number
  paymentMethod: "cardAndEasyPay" | "samsungpayCard"
}

// 인증결제(일회성결제)
export const executeAuthPaymentPopup = async (props: AuthPaymentProps): Promise<void> => {
  const { orderId, ticketName, price, paymentMethod } = props
  const payElem: any = window
  const { AUTHNICE } = payElem
  AUTHNICE.requestPay({
    clientId: CLIENT_KEY_SERVER_AUTH,
    method: paymentMethod,
    orderId,
    amount: price,
    goodsName: ticketName,
    returnUrl: AUTH_PAYMENT_POPUP_RESULT_ENDPOINT, //API를 호출할 Endpoint
    fnError: (result: any) => alert("개발자확인용 : " + result.errorMsg + ""),
  })
}
