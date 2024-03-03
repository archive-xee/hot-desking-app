import Link from "next/link"
import { MeetingRoomModel } from "@/models/bookable"

const MeetingRoomBox = (props: { meetingRoom: MeetingRoomModel }) => {
  const { meetingRoom } = props
  const isLogin = true
  const isUsed = meetingRoom.userId === null
  const bgColor = isUsed ? "bg-black-100" : "bg-white-500"
  const borderColor = isUsed ? "border-black-700" : "border-blue-700"
  return isUsed ? (
    <_MeetingRoomBox label={meetingRoom.id} bgColor={bgColor} borderColor={borderColor}></_MeetingRoomBox>
  ) : (
    <Link href={isLogin ? "/user/ticket/meetingroom" : "/login"}>
      <_MeetingRoomBox label={meetingRoom.id} bgColor={bgColor} borderColor={borderColor}></_MeetingRoomBox>
    </Link>
  )
}

const _MeetingRoomBox = (props: { label: string; bgColor: string; borderColor: string }) => {
  const { label, bgColor, borderColor } = props
  return (
    <div className="flex w-40 flex-col">
      <div className="flex flex-row justify-around gap-3">
        <Chair direction="up" bgColor={bgColor} borderColor={borderColor} />
        <Chair direction="up" bgColor={bgColor} borderColor={borderColor} />
        <Chair direction="up" bgColor={bgColor} borderColor={borderColor} />
      </div>
      <div className={`flex h-20 items-center justify-center rounded-lg ${bgColor} border ${borderColor}`}>
        <h3 className="text-black-700  font-medium">회의 {label}실</h3>
      </div>
      <div className="flex flex-row justify-around gap-3">
        <Chair direction="down" bgColor={bgColor} borderColor={borderColor} />
        <Chair direction="down" bgColor={bgColor} borderColor={borderColor} />
        <Chair direction="down" bgColor={bgColor} borderColor={borderColor} />
      </div>
    </div>
  )
}

const Chair = (props: { bgColor: string; borderColor: string; direction: "up" | "down" }) => {
  const { direction, bgColor, borderColor } = props
  const direcion = direction === "up" ? "rounded-t-full" : "rounded-b-full"
  const border = direction === "up" ? "border-r border-l border-t" : "border-r border-l border-b"
  return <div className={`${bgColor} ${borderColor} h-3 w-6 ${direcion} ${border}`}></div>
}

export default MeetingRoomBox
