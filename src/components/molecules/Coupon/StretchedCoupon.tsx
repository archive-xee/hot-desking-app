import Image from "next/image"
import { BookableType } from "@/src/models/bookable"
import type { CouponType, Coupon } from "@/src/models/coupon"

const StretchedCoupon = (props: { coupon: Coupon }) => {
  const { coupon } = props
  const bookableKorean = getBookableKorean(coupon.bookable)
  const ticketTypeKorean = getTicketTypeKorean(coupon.type)

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
    <div className={`flex ${borderColors[coupon.bookable]} flex-row rounded-lg border border-solid bg-white-300`}>
      <div
        className={`flex ${bookableColors[coupon.bookable]} size-20 flex-col items-center justify-center gap-1 rounded-l-lg bg-black-300`}
      >
        <Image src={`/icons/bookable/${coupon.bookable}.png`} alt="이것도 해야겠네" width="24" height="24"></Image>
        <p className="text-white-100">{bookableKorean}</p>
      </div>
      <div className="flex grow flex-row justify-between pl-2">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-lg font-bold">
              {coupon.digit}
              {ticketTypeKorean}권
            </h3>
            <Image src={`/icons/coupon/${coupon.type}.png`} alt="이것도 해야겠네" width="24" height="24"></Image>
          </div>
          <p className="text-sm">
            <span className="mr-2 font-bold">유효기간</span>
            2024-01-12 ~ 2024-04-11
          </p>
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

const getTicketTypeKorean = (type: CouponType): string => {
  switch (type) {
    case "discount":
      return "% 할인"
    default:
      return "시간 추가"
  }
}

export default StretchedCoupon
