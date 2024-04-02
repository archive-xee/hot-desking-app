import Link from "next/link"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { checkoutTicket, getActivatedUserTicket } from "@/actions/userticket"
import Button from "@/components/molecules/Button/Button"

export default async function CheckoutPage() {
  const userId = await getUserIdAfterCheckAuthRedirect() // 1: 로그인을 먼저 물어볼 것
  const activatedUserTicket = await getActivatedUserTicket(userId) // 2: 유저가 사용하고 있는 티켓 중 좌석(좌석티켓)만 퇴실 가능. seat
  // @서버 getActivatedUserTicket()의 ticket모델에 bookable파라미터가 없어서 추가해야 함
  // activatedUserTicket
  if (true) {
    // @클라, @서버 04/02 getActivatedUserTicket이 getActivatedBookable로 바꿔야할 수도. bookable이...
    const checkoutUserTicketByTicketId = checkoutTicket.bind(null, userId, "activatedUserTicket.id")
    // @클라: 액션 안에서 RedirectPage로 갑니다.
    return (
      <div className="flex flex-col items-center justify-center">
        <p>현재 이용중인 좌석은</p>
        <p>좌석타입: 좌석타입, 좌석번호: 좌석번호</p>
        <p>입니다. 퇴실하시겠습니까?</p>
        <div className="h-4"></div>
        <form action={checkoutUserTicketByTicketId}>
          <Button form={true}>퇴실</Button>
        </form>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center">
        <p>현재 사용중인 좌석이 없어 외출할수 없습니다.</p>
        <Link href="/">
          <Button>홈으로 돌아기기</Button>
        </Link>
      </div>
    )
  }
}
