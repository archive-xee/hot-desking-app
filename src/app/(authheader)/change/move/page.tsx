import { headers } from "next/headers"
import Link from "next/link"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getBoookableById, getUserActivatedBoookable, moveToNewBookable } from "@/actions/booth"
import BookableCard from "@/components/molecules/BookableCard"
import Button from "@/components/molecules/Button/Button"
import { Bookable } from "@/models/bookable"

export default async function BookableMovePage() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const urlObject = new URL(headers().get("x-url")!)
  const id = urlObject.searchParams.get("id") ?? "bookableIdError"
  const currentBookable = await getBoookableById(id)
  const userActivatedBookableList = await getUserActivatedBoookable(userId, [currentBookable.bookableType.type])
  if (userActivatedBookableList) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>현재 이용중인 {currentBookable.bookableType.name}입니다.</p>
        {userActivatedBookableList.map((activatedBookable: Bookable) => {
          const moveToNewBookableByTicketId = moveToNewBookable.bind(null, userId, activatedBookable.ticketId!)
          return (
            <div key={activatedBookable.id}>
              <BookableCard bookable={activatedBookable} />
              <form action={moveToNewBookableByTicketId}>
                <Button form={true}>이동</Button>
              </form>
            </div>
          )
        })}
        <p>이동하실 {currentBookable.bookableType.name}입니다.</p>
        <BookableCard bookable={currentBookable} />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center">
        <p>현재 사용중인 {currentBookable.bookableType.name}이 없어 이동할수 없습니다.</p>
        <Link href="/">
          <Button>홈으로 돌아기기</Button>
        </Link>
      </div>
    )
  }
}
