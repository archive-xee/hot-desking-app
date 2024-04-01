import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
// import { nipoutTicket } from "@/actions/booth"
import { getActivatedUserTicket } from "@/actions/userticket"

export default async function NipoutPage() {
  const userId = await getUserIdAfterCheckAuthRedirect() // 1: 로그인을 먼저 물어볼 것
  const activatedUserTicket = await getActivatedUserTicket(userId) // 2: 유저가 사용하고 있는 티켓 중 좌석(좌석티켓)만 외출 가능
  // @서버 getActivatedUserTicket()의 ticket모델에 bookable파라미터가 없어서 추가해야 함
  if (activatedUserTicket) {
    // await nipoutTicket(userId, activatedUserTicket.id)
    return <p>30분동안 외출 가능하고, 전원은 연결되지 않습니다</p> // @클라 4: 리디렉션페이지로 수정
    // 결과 실패하면... return <p>"30분동안 외출 가능하고, 전원은 연결되지 않습니다"</p> // @클라 4: 리디렉션페이지로 수정
  } else {
    return <p>현재 사용중인 좌석이 없어 외출할수 없습니다.</p> // @클라 4: 리디렉션페이지로 수정
  }
}
