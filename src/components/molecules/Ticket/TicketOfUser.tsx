import Image from "next/image"
import type { Ticket, TicketType } from "@/src/models/ticket"
import { Bookable } from "@/src/models/ticket"

const TicketOfUser = (props: { ticket: Ticket }) => {
  const { ticket } = props
  const bookableKorean = getBookableKorean(ticket.bookable)
  const ticketTypeKorean = getTicketTypeKorean(ticket.type)

  const borderColors: { [key in Bookable]: string } = {
    seat: "border-blue-100",
    meetingroom: "border-yellow-500",
    rentbox: "border-teal-100",
    locker: "border-purple-100",
  }

  const bookableColors: { [key in Bookable]: string } = {
    seat: "bg-blue-700",
    meetingroom: "bg-yellow-700",
    rentbox: "bg-teal-500",
    locker: "bg-purple-700",
  }

  return (
    <div className={`flex ${borderColors[ticket.bookable]} flex-row rounded-lg border border-solid bg-white-300`}>
      <div
        className={`flex ${bookableColors[ticket.bookable]} size-20 flex-col items-center justify-center gap-1 rounded-l-lg bg-black-300`}
      >
        <Image src={`/icons/bookable/${ticket.bookable}.png`} alt="이것도 해야겠네" width="24" height="24"></Image>
        <p className="text-white-100">{bookableKorean}</p>
      </div>
      <div className="flex grow flex-row justify-between pl-2">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-lg font-bold">8{ticketTypeKorean}권</h3>
            <Image src={`/icons/ticket/${ticket.type}.png`} alt="이것도 해야겠네" width="24" height="24"></Image>
          </div>
          {/* 시간이 나오던가, 기간이 나오던가
            기간: 2024-01-12 ~ 2024-04-11
            유효기간: 2024-01-12 ~ 2024-04-11 8시간권일때, 할인권(야간권), 당일권일때
          */}
          <p className="text-sm">
            <span className="mr-2 font-bold">유효기간</span>
            2024-01-12 ~ 2024-04-11
          </p>
        </div>
      </div>
    </div>
  )
}

const getBookableKorean = (type: Bookable): string => {
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

export default TicketOfUser
