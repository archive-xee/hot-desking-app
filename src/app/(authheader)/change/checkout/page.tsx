import Link from "next/link"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getUserActivatedBoookable } from "@/actions/booth"
import { checkoutUserTicket } from "@/actions/userticket"
import BookableCard from "@/components/molecules/BookableCard"
import Button from "@/components/molecules/Button/Button"
import { Bookable } from "@/models/bookable"

export default async function CheckoutPage() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const userActivatedBookableList = await getUserActivatedBoookable(userId, ["seat", "meetingroom"])
  if (userActivatedBookableList) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>현재 이용중인 예약의 퇴실버튼을 누르면 퇴실됩니다.</p>
        {userActivatedBookableList.map((activatedBookable: Bookable) => {
          const checkoutUserTicketByTicketId = checkoutUserTicket.bind(null, userId, activatedBookable.ticketId!)
          return (
            <div key={activatedBookable.id}>
              <BookableCard bookable={activatedBookable} />
              <form action={checkoutUserTicketByTicketId}>
                <Button form={true}>퇴실</Button>
              </form>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center">
        <p>현재 사용중인 좌석이 없어 퇴실할수 없습니다.</p>
        <Link href="/">
          <Button>홈으로 돌아기기</Button>
        </Link>
      </div>
    )
  }
}
