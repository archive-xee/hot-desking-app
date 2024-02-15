import SeatBox from "@/src/components/molecules/SeatBox"
import { seat1, seat2 } from "@/src/models/bookable"

export default function SeatViewPage() {
  return (
    <>
      <SeatViewPageTitle />
      <SeatBoxMap>
        <SeatBox seat={seat1} />
        <SeatBox seat={seat2} />
      </SeatBoxMap>
    </>
  )
}

const SeatViewPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">좌석 현황</h1>
}

const SeatBoxMap = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <div className="container mx-auto max-w-screen-sm  overflow-hidden  rounded-lg border border-black-100">
      {children}
    </div>
  )
}
