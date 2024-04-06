import Link from "next/link"
import Button from "../molecules/Button/Button"
import StretchedTicket from "../molecules/Ticket/StretchedTicket"
import { getCouponFrame } from "@/actions/couponframe"
import { getTicketFrameById } from "@/actions/ticketframe"
import StretchedCoupon from "@/components/molecules/Coupon/StretchedCoupon"
import SubTitle from "@/components/molecules/Title/SubTitle"
import { TicketFrame } from "@/models/ticket"

export default async function OrderCard(props: { ticketId: string; couponId: string | null }) {
  const { ticketId, couponId } = props
  const ticketFrame: TicketFrame = await getTicketFrameById(ticketId)
  let { number: ticketNumber, purchasePrice: ticketPrice } = ticketFrame
  const { typeName } = ticketFrame
  if (couponId) {
    const couponFrame = await getCouponFrame(couponId)
    const { type, number: couponNumber } = couponFrame
    switch (type) {
      case "timebonus":
        ticketNumber += couponNumber
        break
      case "discount":
        ticketPrice -= couponNumber
        break
      default: // sale
        ticketPrice -= (ticketPrice * couponNumber) / 100
    }

    return (
      <div className="flex flex-col gap-2">
        <div>
          <SubTitle bold={true} text="선택된 티켓" />
          <StretchedTicket ticketFrame={ticketFrame} />
        </div>
        <div>
          <SubTitle bold={true} text="선택된 쿠폰" />
          <StretchedCoupon couponFrame={couponFrame} />
        </div>
        <div className="flex flex-row justify-end">
          <Link href={`/user/coupon/applicable?ticketId=${ticketId}`}>
            <Button>다른 쿠폰 적용해보기</Button>
          </Link>
        </div>
        <div className="flex flex-row justify-end">
          <SubTitle bold={true} text={`최종: ${ticketNumber}${typeName} ${ticketPrice}원`} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col gap-2">
        <SubTitle bold={true} text="선택된 티켓" />
        <StretchedTicket ticketFrame={ticketFrame} />
        <div className="flex flex-row justify-end">
          <Link href={`/user/coupon/applicable?ticketId=${ticketId}`}>
            <Button>적용가능한 쿠폰 찾아보기</Button>
          </Link>
        </div>
        <div className="flex flex-row justify-end">
          <SubTitle bold={true} text={`최종: ${ticketNumber}${typeName} ${ticketPrice}원`} />
        </div>
      </div>
    )
  }
}
