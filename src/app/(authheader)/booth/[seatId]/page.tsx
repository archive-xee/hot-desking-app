import Link from "next/link"
import { redirect } from "next/navigation"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getBoookableOccupied } from "@/actions/booth"
import { getActivatedUserTicket } from "@/actions/userticket"

export default async function BookableStatusPage({ params }: { params: { seatId: string } }) {
  const { seatId } = params // QR코드에서 들어옴
  const userId = await getUserIdAfterCheckAuthRedirect() // 1: 로그인을 먼저 물어볼 것
  const { bookable, bookableOccupied } = await getBoookableOccupied(seatId) // 2: 자리의 ticketId이 있는지 물어봄(사용중인지)
  if (bookableOccupied) {
    return <p>이미 사용되고 있는 자리입니다</p> //3: 이미 사용되는 자리가 있음. redirect
  } else {
    const activatedUserTicket = await getActivatedUserTicket(userId, bookable) // 3-2: 유저가 사용하고 있는 자리가 있는지 물어봄
    if (activatedUserTicket) {
      // bookable, type, number 필요함
      return (
        <>
          <p>현재 사용중인 좌석이 있습니다. 새로운 좌석으로 이동하시겠습니까?</p>
          <Link href={`change/move/?seatId=${seatId}`}></Link>
        </>
      )
      // 누르면 이동 페이지로 간 이후, 거기서 서버액션(클라이언트컴포넌트로 바꿔야 해서)
    } else {
      // 4-2: 새로 입실 → 유저가 보유한 티켓페이지로 보내기
      // 사용완료되었습니다?
      // redirect(`/user/ticket/use/${bookable}`)
      redirect(`/user/ticket/use/seat`)
    }
  }
}
