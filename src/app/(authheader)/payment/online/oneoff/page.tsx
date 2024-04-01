import Link from "next/link"
import Button from "@/components/molecules/Button/Button"
import Title from "@/components/molecules/Title/Title"
import NicepayPopupButton from "@/components/organisms/NicepayPopupButton"
import UserCardList from "@/components/organisms/Card/UserCardList"
import { order1 } from "@/models/order"
// import { useSearchParams } from "next/navigation"
// import { useState, useEffect } from "react"

// 여기도 Order정보 뿌려야 함

export default function PaymentOnlineOneoffPage() {
  // const searchParams = useSearchParams()
  // const ticketId = searchParams.get("ticketId")
  // 티켓id를 path에서 받을 것

  return (
    <div className="flex flex-col gap-2">
      <Title text="일회권 온라인 결제" />
      <UserCardList />
      <div className="flex flex-row justify-end gap-1">
        <Link href="/card/register">
          <Button>카드 등록</Button>
        </Link>
        <NicepayPopupButton order={order1} />
      </div>
      결제이후 /user/ticket/use/(bookableType)으로 리디렉션 결제실패시에는 실패 페이지로
    </div>
  )
}
