import Image from "next/image"
import { BookableType } from "@/models/bookable"
import type { Ticket, TicketType } from "@/models/ticket"

const CardTicket = (props: { ticket: Ticket }) => {
  const { ticket } = props
  const bookableKorean = getBookableKorean(ticket.bookable)
  const ticketTypeKorean = getTicketTypeKorean(ticket.type)

  const borderColors: { [key in BookableType]: string } = {
    seat: "border-blue-100",
    meetingroom: "border-yellow-500",
    rentbox: "border-teal-100",
    locker: "border-purple-100",
  }

  const bookableColors: { [key in BookableType]: string } = {
    seat: "bg-blue-500",
    meetingroom: "bg-yellow-500",
    rentbox: "bg-teal-300",
    locker: "bg-purple-500",
  }

  return (
    <div className="flex flex-row justify-center">
      <div
        className={`flex ${borderColors[ticket.bookable]} bg-white-300 w-56 flex-col overflow-hidden rounded-lg border border-solid`}
      >
        <div className={`flex ${bookableColors[ticket.bookable]} flex-row items-center justify-center gap-2 py-2`}>
          <h3 className="text-white-100 text-lg font-bold">8{ticketTypeKorean}권</h3>
          <Image src={`/icons/ticket/${ticket.type}.png`} alt="이것도 해야겠네" width="24" height="24"></Image>
        </div>
        <div className={`flex h-44 w-full flex-col items-center justify-center gap-1 py-4 `}>
          <Image src={`/icons/bookable/${ticket.bookable}.png`} alt="이것도 해야겠네" width="48" height="48"></Image>
          <p className="text-black-700 font-bold">{bookableKorean}</p>
          <div className="grow"></div>
          <p className="font-bold">유효기간</p>
          <p>2024-01-12 ~ 2024-04-11</p>
        </div>
        <div className="flex h-20 flex-row items-stretch">
          <div className="bg-white-500 flex basis-1/2 flex-col items-center justify-center">
            <p className="font-bold">남은 수량</p>
            <p className="text-center">8개</p>
          </div>
          <div className="bg-white-700 flex basis-1/2  items-center justify-center">
            <p className="font-bold">6000원</p>
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

const getTicketTypeKorean = (type: TicketType): string => {
  switch (type) {
    case "oneday":
      return "당일"
    case "period":
      return "기간"
    case "discount":
      return "할인"
    default:
      return "시간"
  }
}
export default CardTicket
