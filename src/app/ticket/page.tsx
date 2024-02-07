import Image from "next/image"
import { TicketForSale } from "@/src/components/organisms/Ticket/"

export default function TicketPage() {
  return (
    <div className="m-auto mx-1 flex flex-col gap-2 py-1">
      <TicketPageTitle />
      <TicketViewContainer />
    </div>
  )
}

const TicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">이용권 구매하기</h1>
}

const TicketViewContainer = () => {
  return (
    <div className="container mx-auto  max-w-screen-md  overflow-hidden rounded-lg border border-black-100">
      <div className="bg-white-500 py-2 text-center">
        <p>기간권은 특정 기간동안 사용할 수 있습니다.</p>
      </div>
      <div className="flex flex-row">
        <aside>
          <ul className="h-full w-32 bg-white-300 py-2 font-medium">
            <li className="flex flex-row p-2  hover:bg-yellow-300">
              <Image src="/icons/ticket/period.png" alt="기간권" width="24" height="24"></Image>
              <span className="ms-3">기간권</span>
            </li>
            <li className="flex flex-row p-2 hover:bg-purple-100">
              <Image src="/icons/ticket/oneday.png" alt="당일권" width="24" height="24"></Image>
              <span className="ms-3">당일권</span>
            </li>
            <li className="flex flex-row p-2 hover:bg-blue-300">
              <Image src="/icons/ticket/time.png" alt="시간권" width="24" height="24"></Image>
              <span className="ms-3">시간권</span>
            </li>
            <li className="flex flex-row p-2  hover:bg-teal-100">
              <Image src="/icons/ticket/discount.png" alt="할인권" width="24" height="24"></Image>
              <span className="ms-3">할인권</span>
            </li>
          </ul>
        </aside>
        <div className="flex w-full flex-col gap-2 px-4 py-2">
          <div className="flex max-h-96 flex-col gap-2 overflow-y-auto pr-2">
            <TicketForSale
              ticket={{
                id: "1",
                type: "oneday",
                bookable: "locker",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
            <TicketForSale
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
            <TicketForSale
              ticket={{
                id: "1",
                type: "period",
                bookable: "meetingroom",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
            <TicketForSale
              ticket={{
                id: "1",
                type: "discount",
                bookable: "rentbox",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
            <TicketForSale
              ticket={{
                id: "1",
                type: "discount",
                bookable: "rentbox",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
            <TicketForSale
              ticket={{
                id: "1",
                type: "discount",
                bookable: "rentbox",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
            <TicketForSale
              ticket={{
                id: "1",
                type: "discount",
                bookable: "rentbox",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
          </div>
          <div className="flex flex-row justify-end">
            <button
              type="button"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              쿠폰 적용
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
