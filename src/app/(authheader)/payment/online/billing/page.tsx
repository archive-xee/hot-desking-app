import Link from "next/link"
import Button from "@/components/molecules/Button/Button"
import BillingKeyTerm from "@/components/organisms/BillingKeyTerm"
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
    <>
      <div className="flex flex-col items-center">
        정기권 온라인 결제
        <UserCardList />
        <div>
          <Link href="/card/register">
            <Button>카드등록</Button>
          </Link>
        </div>
        <BillingKeyTerm />
        <div>
          <input
            id="payment-registered-card"
            type="checkbox"
            // onChange={({ target: { checked } }) => {}}
            className="size-4 rounded bg-white-100 text-black-700"
          />
          <label
            htmlFor="payment-registered-card"
            className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium"
          >
            약관에 동의하고 진행하기
          </label>
        </div>
      </div>
      결제 응답에 따라 성공하면 사용페이지로, 실패하면 실패 페이지로 리디렉션
    </>
  )
}
