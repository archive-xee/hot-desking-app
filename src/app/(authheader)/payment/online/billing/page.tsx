import Link from "next/link"
import Button from "@/components/molecules/Button/Button"
import Title from "@/components/molecules/Title/Title"
import UserCardList from "@/components/organisms/UserCardList"
// import { useSearchParams } from "next/navigation"

export default function PaymentOnlineBillingPage() {
  // 유저가 예약결제에 동의했는지도 db에 들어가야 함
  // const searchParams = useSearchParams()
  // const ticketId = searchParams.get("ticketId")
  let hasConsent = false // eslint-disable-line
  // 티켓id를 path에서 받을 것
  // 정기권인지, 일회권인지에 따라 예약결제가 동의약관이 보일 것
  // 유저가 예약결제에 동의했는지도 db에 들어가야 함
  return (
    <div className="flex flex-col gap-2">
      <Title text="정기권 온라인 결제" />
      <UserCardList />
      <div className="flex flex-row justify-end">
        <Link href="/card/register">
          <Button>카드등록</Button>
        </Link>
      </div>
      결제이후 /user/ticket/use/(bookableType)으로 리디렉션 결제실패시에는 실패 페이지로
    </div>
  )
}
