import Link from "next/link"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getBoookableById, getUserActivatedBoookable } from "@/actions/booth"
import BookableCard from "@/components/molecules/BookableCard"
import Button from "@/components/molecules/Button/Button"
import SubTitle from "@/components/molecules/Title/SubTitle"
import { Bookable } from "@/models/bookable"

export default async function BookablePage({ params }: { params: { id: string } }) {
  const { id } = params // QR코드에서 들어옴
  const userId = await getUserIdAfterCheckAuthRedirect()
  const currentBookable = await getBoookableById(id)
  if (currentBookable.ticketId) {
    return (
      <div className="flex flex-col items-center justify-center">
        <SubTitle bold={true} text="이미 사용되고 있는 자리입니다." />
      </div>
    )
  } else {
    const userActivatedBookableList = await getUserActivatedBoookable(userId, [currentBookable.bookableType.type])
    if (userActivatedBookableList) {
      return (
        <div className="flex flex-col items-center justify-center">
          <p>현재 사용중인 {currentBookable.bookableType.name}이 있습니다.</p>
          {userActivatedBookableList.map((activatedBookable: Bookable) => (
            <div key={activatedBookable.id}>
              <BookableCard bookable={activatedBookable} />
            </div>
          ))}
          {["seat", "meetingroom"].includes(currentBookable.bookableType.type) ? (
            <div className="flex flex-col items-center justify-center">
              <p>새로운 {currentBookable.bookableType.name}으로 이동하시겠습니까?</p>
              <BookableCard bookable={currentBookable} />
              <Link href={`${process.env.BASE_URL}/change/move/?id=${id}`}>
                <Button> {currentBookable.bookableType.name}이동</Button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      )
    } else {
      return (
        <div className="flex flex-col items-center justify-center">
          <SubTitle text="현재 사용중인 좌석이 없습니다. 티켓을 사용하시면 좌석을 사용할 수 있습니다." />
          <SubTitle text="티켓을 사용하시겠습니까?" />
          <Link href={`${process.env.BASE_URL}/user/ticket/use/${currentBookable.bookableType.name}`}>
            <Button>티켓사용</Button>
          </Link>
        </div>
      )
    }
  }
}
