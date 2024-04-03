import Link from "next/link"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getUserActivatedBoookable } from "@/actions/booth"
import { nipoutUserTicket } from "@/actions/userticket"
import BookableCard from "@/components/molecules/BookableCard"
import Button from "@/components/molecules/Button/Button"
import { Bookable } from "@/models/bookable"

export default async function NipoutPage() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const userActivatedBookableList = await getUserActivatedBoookable(userId, ["seat", "meetingroom"])
  if (userActivatedBookableList) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>현재 이용중인 예약의 외출버튼을 누르면 30분간 외출할 수 있으며 전원은 결되지 않습니다.</p>
        <p>사용시간은 자동으로 연장됩니다.</p>
        {userActivatedBookableList.map((activatedBookable: Bookable) => {
          const nipoutUserTicketByTicketId = nipoutUserTicket.bind(null, userId, activatedBookable.ticketId!)
          return (
            <div key={activatedBookable.id}>
              <BookableCard bookable={activatedBookable} />
              <form action={nipoutUserTicketByTicketId}>
                <Button form={true}>외출</Button>
              </form>
            </div>
          )
        })}
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
    ) // @클라 4: 리디렉션페이지로 수정
  }
}
