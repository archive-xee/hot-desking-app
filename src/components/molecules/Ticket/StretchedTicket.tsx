import Image from "next/image"
import { BookableType } from "@/src/models/bookable"
import type { Ticket } from "@/src/models/ticket"

const StretchedTicket = (props: { ticket: Ticket }) => {
  const { ticket } = props
  const bookableKorean = getBookableKorean(ticket.bookable)

  const borderColors: { [key in BookableType]: string } = {
    seat: "border-blue-100",
    meetingroom: "border-yellow-500",
    rentbox: "border-teal-100",
    locker: "border-purple-100",
  }

  const bookableColors: { [key in BookableType]: string } = {
    seat: "bg-blue-700",
    meetingroom: "bg-yellow-700",
    rentbox: "bg-teal-500",
    locker: "bg-purple-700",
  }

  return (
    <div className={`flex ${borderColors[ticket.bookable]} bg-white-300 flex-row rounded-lg border border-solid`}>
      <div
        className={`flex ${bookableColors[ticket.bookable]} size-20 flex-col items-center justify-center gap-1 rounded-l-lg`}
      >
        <Image src={`/icons/bookable/${ticket.bookable}.png`} alt="이것도 해야겠네" width="24" height="24"></Image>
        <p className="text-white-100">{bookableKorean}</p>
      </div>
      <div className="flex grow flex-row justify-between pl-2">
        <div className="flex flex-col justify-center">
          <p className="font-bold">90일</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="font-bold">남은 수량</p>
            <p className="text-center">8개</p>
          </div>
          <div className="bg-white-700 flex size-20 flex-col items-center justify-center rounded-r-lg">
            <p className="text-black-700 font-bold line-through ">8000원</p>
            <p className="font-bold text-red-700">6000원</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const getBookableKorean = (type: BookableType): string => {
  switch (type) {
    case "seat":
      return "좌석"
    case "meetingroom":
      return "미팅룸"
    case "rentbox":
      return "대여함"
    default:
      return "사물함"
  }
}

export default StretchedTicket
