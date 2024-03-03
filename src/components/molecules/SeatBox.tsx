import Link from "next/link"
import { SeatModel } from "@/models/bookable"

const SeatBox = (props: { seat: SeatModel }) => {
  const { seat } = props
  // Context
  const isLogin = true
  const isUsed = seat.userId === null
  const bgColor = isUsed ? "bg-black-100" : "bg-white-500"
  const borderColor = isUsed ? "border-black-700" : "border-blue-700"
  return isUsed ? (
    <_SeatBox label={seat.id} bgColor={bgColor} borderColor={borderColor}></_SeatBox>
  ) : (
    <Link href={isLogin ? "/user/ticket/seat" : "/login"}>
      <_SeatBox label={seat.id} bgColor={bgColor} borderColor={borderColor}></_SeatBox>
    </Link>
  )
}

const _SeatBox = (props: { label: string; bgColor: string; borderColor: string }) => {
  const { label, bgColor, borderColor } = props
  return (
    <div className={`flex size-20 items-center justify-center rounded-lg ${bgColor} border ${borderColor}`}>
      <h3 className="text-black-700  font-medium">{label}</h3>
    </div>
  )
}

export default SeatBox
