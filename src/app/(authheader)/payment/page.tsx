import { headers } from "next/headers"
import Link from "next/link"
import Button from "@/components/molecules/Button/Button"
import SubTitle from "@/components/molecules/Title/SubTitle"
import Title from "@/components/molecules/Title/Title"
import BorderCardContainer from "@/components/organisms/BorderCardContainer"
import UserCardList from "@/components/organisms/Card/UserCardList"
import NicepayPopupButton from "@/components/organisms/NicepayPopupButton"
import { order1 } from "@/models/order"

export default async function PaymentPage() {
  const urlObject = new URL(headers().get("x-url")!)
  const selectedTicketId = urlObject.searchParams.get("ticketId") ?? "ticketIdError"
  const selectedCouponId =
    urlObject.searchParams.get("couponId") === "null" ? null : urlObject.searchParams.get("couponId")
  const billingType = urlObject.searchParams.get("billingType")

  return (
    <div className="flex flex-col gap-2">
      <Title text="일회권 결제" />
      <BorderCardContainer>
        <SubTitle bold={true} text="내 카드 목록" />
        <UserCardList ticketId={selectedTicketId} couponId={selectedCouponId} />
        <div className="flex flex-row justify-end gap-1">
          <Link href="/card/register">
            <Button>카드 등록</Button>
          </Link>
          <NicepayPopupButton order={order1} />
        </div>
      </BorderCardContainer>
      결제이후 /user/ticket/use/(bookableType)으로 리디렉션 결제실패시에는 실패 페이지로
    </div>
  )
}
