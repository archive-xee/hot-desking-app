import { headers } from "next/headers"
import Link from "next/link"
import Button from "@/components/molecules/Button/Button"
import SubTitle from "@/components/molecules/Title/SubTitle"
import Title from "@/components/molecules/Title/Title"
import BorderCardContainer from "@/components/organisms/BorderCardContainer"
import UserCardList from "@/components/organisms/Card/UserCardList"
import NicepayPopupButton from "@/components/organisms/NicepayPopupButton"
import OrderCard from "@/components/organisms/OrderCard"
import { order1 } from "@/models/order"

// 여기도 Order정보 뿌려야 함

export default async function PaymentOnlineOneoffPage() {
  const urlObject = new URL(headers().get("x-url")!)
  const selectedTicketId = urlObject.searchParams.get("ticketId") ?? "ticketIdError"

  return (
    <div className="flex flex-col gap-2">
      <Title text="일회권 온라인 결제" />
      <SubTitle text="해당 티켓에 쓸 수 있는 쿠폰 선택하기" />
      <BorderCardContainer>
        <SubTitle bold={true} text="현재 결제 정보" />
        <OrderCard ticketId={selectedTicketId} couponId={"12345"} />
      </BorderCardContainer>
      <BorderCardContainer>
        <SubTitle bold={true} text="내 카드 목록" />
        <UserCardList />
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
