import Image from "next/image"
import Link from "next/link"
import { StretchTicket } from "@/src/components/molecules/Ticket"
import ListViewContainer from "@/src/components/organisms/ListViewContainer"
import { Modal } from "@/src/components/organisms/Modal"
export default function TicketPage() {
  return (
    <>
      <TicketPageTitle />
      <ListViewContainer
        title="정해진 기간동안 사용할 수 있습니다."
        tabs={TicketTypeTab()}
        listItems={
          <>
            <Modal
              trigger={
                <StretchTicket
                  ticket={{
                    id: "1",
                    type: "oneday",
                    bookable: "locker",
                    price: 10000,
                    period: 86400,
                    issuedAt: 1706946429,
                    expiresAt: 1707551229,
                  }}
                ></StretchTicket>
              }
              title="티켓입니다"
              content={<></>}
              actions={
                <>
                  <button
                    type="button"
                    className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
                  >
                    일회성결제
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
                  >
                    정기결제
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
                  >
                    예약결제
                  </button>
                </>
              }
            ></Modal>

            <StretchTicket
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></StretchTicket>
          </>
        }
        actions={
          <Link href="/user/coupon">
            <button
              type="button"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              쿠폰 적용
            </button>
          </Link>
        }
      />
      <p>
        <br /> Ticket[ id, ticketType, expiresAt ]의 리스트
        <br /> 구매하기 위해 티켓을 눌렀을 때 나오는 모달에는
        <br /> 선택된 티켓을 프로퍼티로 보내겠음
        <br /> 일회성결제, 예약결제, 정기결제 3가지 옵션 보여줄 거임
        <br /> 각 버튼을 누르면 각 결제타입에 맞는 Order객체를 서버에 보내겠음
      </p>
    </>
  )
}

const TicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">이용권 구매하기</h1>
}

const TicketTypeTab = () => {
  return (
    <div className="flex flex-row bg-white-300">
      <div className="flex grow flex-row  justify-center p-2  hover:bg-yellow-300">
        <Image src="/icons/ticket/period.png" alt="기간권" width="24" height="24"></Image>
        <span className="ms-3">기간권</span>
      </div>
      <div className="flex grow flex-row justify-center p-2 hover:bg-purple-100">
        <Image src="/icons/ticket/oneday.png" alt="당일권" width="24" height="24"></Image>
        <span className="ms-3">당일권</span>
      </div>
      <div className="flex grow flex-row justify-center p-2 hover:bg-blue-300">
        <Image src="/icons/ticket/time.png" alt="시간권" width="24" height="24"></Image>
        <span className="ms-3">시간권</span>
      </div>
      <div className="flex grow flex-row justify-center p-2  hover:bg-teal-100">
        <Image src="/icons/ticket/discount.png" alt="할인권" width="24" height="24"></Image>
        <span className="ms-3">할인권</span>
      </div>
    </div>
  )
}
